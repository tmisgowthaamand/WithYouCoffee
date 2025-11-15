const express = require('express')
const cors = require('cors')
const { nanoid } = require('nanoid')
const fs = require('fs')
const path = require('path')
const products = require('./data/products.json')
const supabase = require('./supabase')

const app = express()

// Configure CORS properly
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // React dev servers
  credentials: true
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Simple root health/info endpoint so Render root URL shows a JSON message
app.get('/', (req, res) => {
  res.json({
    service: 'With You Coffee Backend API',
    status: 'healthy',
    message: 'Backend is running successfully',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      orders: '/api/orders',
      contact: '/api/contact',
    },
  })
})

// --- Orders persistence (simple JSON storage) ---
const ordersFilePath = path.join(__dirname, 'data', 'orders.json')

const loadOrders = () => {
  try {
    if (!fs.existsSync(ordersFilePath)) {
      fs.writeFileSync(ordersFilePath, '[]', 'utf8')
    }
    const raw = fs.readFileSync(ordersFilePath, 'utf8')
    return JSON.parse(raw || '[]')
  } catch (err) {
    console.error('Failed to load orders file:', err)
    return []
  }
}

const saveOrders = (orders) => {
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8')
  } catch (err) {
    console.error('Failed to save orders file:', err)
  }
}

let orders = loadOrders()
// Contact requests now stored in Supabase database

app.get('/api/products', (req, res) => {
  res.json(products)
})

// --- Orders API ---

// Create order (called from Checkout)
app.post('/api/orders', async (req, res) => {
  try {
    const {
      customerInfo = {},
      items = [],
      subtotal = 0,
      gst = 0,
      total = 0,
      paymentMethod = 'upi'
    } = req.body || {}

    if (!items.length) {
      return res.status(400).json({ success: false, message: 'Order must contain at least one item' })
    }

    const id = nanoid(10)
    const createdAt = new Date().toISOString()

    const newOrder = {
      id,
      customerInfo,
      items,
      subtotal,
      gst,
      total,
      paymentMethod,
      status: 'confirmed',
      history: [
        { status: 'confirmed', at: createdAt }
      ],
      createdAt
    }

    // Persist to local in-memory + JSON file (existing behaviour)
    orders.push(newOrder)
    saveOrders(orders)

    // Also persist to Supabase for central reporting (best-effort)
    try {
      if (supabase) {
        const { data: orderRows, error: orderError } = await supabase
          .from('orders')
          .insert([
            {
              customer_name: customerInfo.name || '',
              customer_phone: customerInfo.phone || '',
              customer_email: customerInfo.email || '',
              total,
              payment_method: paymentMethod,
              status: 'confirmed',
              created_at: createdAt
            }
          ])
          .select()
          .single()

        if (orderError) {
          console.error('Supabase orders insert error:', orderError)
        } else if (orderRows && orderRows.id) {
          const supabaseOrderId = orderRows.id

          if (items && items.length) {
            const itemsPayload = items.map((item) => ({
              order_id: supabaseOrderId,
              product_id: item.productId || item.id || '',
              name: item.name || '',
              quantity: item.quantity || 0,
              price: item.price || 0
            }))

            const { error: itemsError } = await supabase
              .from('order_items')
              .insert(itemsPayload)

            if (itemsError) {
              console.error('Supabase order_items insert error:', itemsError)
            }
          }
        }
      }
    } catch (supabaseErr) {
      console.error('Error saving order to Supabase (non-fatal):', supabaseErr)
    }

    res.status(201).json({ success: true, order: newOrder })
  } catch (err) {
    console.error('Error creating order:', err)
    res.status(500).json({ success: false, message: 'Failed to create order' })
  }
})

// List all orders (for admin portal)
app.get('/api/orders', (req, res) => {
  res.json({ success: true, orders })
})

// Get single order by ID (for tracking)
app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id)
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' })
  }
  res.json({ success: true, order })
})

// Update order status (admin)
app.patch('/api/orders/:id/status', (req, res) => {
  const { status } = req.body || {}
  const allowedStatuses = ['confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled']

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' })
  }

  const orderIndex = orders.findIndex(o => o.id === req.params.id)
  if (orderIndex === -1) {
    return res.status(404).json({ success: false, message: 'Order not found' })
  }

  orders[orderIndex].status = status
  orders[orderIndex].history.push({ status, at: new Date().toISOString() })
  saveOrders(orders)

  // Simulated notification hooks (email/SMS can be wired here later)
  console.log(`Order ${orders[orderIndex].id} status updated to ${status}`)
  console.log('Notify customer at:', orders[orderIndex].customerInfo?.email, orders[orderIndex].customerInfo?.phone)

  res.json({ success: true, order: orders[orderIndex] })
})

// Contact Form API Endpoints
app.post('/api/contact', async (req, res) => {
  try {
    const { inquiryType, name, mobile, company, email, message } = req.body
    
    // Validation
    if (!name || !mobile || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, mobile, and email are required fields' 
      })
    }

    // Create contact request (ID will be auto-generated by Supabase)
    const contactRequest = {
      inquiry_type: inquiryType || 'general',
      name: name.trim(),
      mobile: mobile.trim(),
      company: company ? company.trim() : '',
      email: email.trim().toLowerCase(),
      message: message ? message.trim() : '',
      status: 'new'
      // created_at and updated_at will be auto-generated by Supabase
    }

    // Store in Supabase
    const { data, error } = await supabase
      .from('contact_requests')
      .insert([contactRequest])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ 
        success: false, 
        message: 'Database error occurred' 
      })
    }

    // Log for debugging
    console.log('New contact request saved to Supabase:', {
      id: data[0].id,
      name: data[0].name,
      email: data[0].email,
      inquiryType: data[0].inquiry_type,
      timestamp: data[0].created_at
    })

    res.status(201).json({ 
      success: true, 
      message: 'Contact request submitted successfully',
      id: data[0].id
    })

  } catch (error) {
    console.error('Error processing contact request:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
})

// Get all contact requests (for admin)
app.get('/api/contact', async (req, res) => {
  try {
    // Fetch from Supabase, sorted by newest first
    const { data, error } = await supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ 
        success: false, 
        message: 'Database error occurred' 
      })
    }

    res.json({
      success: true,
      total: data.length,
      requests: data
    })
  } catch (error) {
    console.error('Error fetching contact requests:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
})

// Get specific contact request by ID
app.get('/api/contact/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_requests')
      .select('*')
      .eq('id', req.params.id)
      .single()
    
    if (error || !data) {
      return res.status(404).json({ 
        success: false, 
        message: 'Contact request not found' 
      })
    }

    res.json({
      success: true,
      request: data
    })
  } catch (error) {
    console.error('Error fetching contact request:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
})

// Update contact request status (for admin)
app.patch('/api/contact/:id', async (req, res) => {
  try {
    const { status } = req.body
    
    // Update in Supabase
    const { data, error } = await supabase
      .from('contact_requests')
      .update({ 
        status: status,
        updated_at: new Date().toISOString()
      })
      .eq('id', req.params.id)
      .select()
    
    if (error || !data || data.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Contact request not found or update failed' 
      })
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      request: data[0]
    })
  } catch (error) {
    console.error('Error updating contact request:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    })
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log('Backend running on', port))
