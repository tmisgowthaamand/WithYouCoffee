import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase } from '../supabaseClient'

function getLocalOrders() {
  try {
    const raw = localStorage.getItem('cuptime_orders')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch (e) {
    console.error('Failed to read cuptime_orders from localStorage', e)
    return []
  }
}

async function fetchOrdersFromSupabase() {
  if (!supabase) return []

  // Fetch orders first
  const { data: orderRows, error: ordersError } = await supabase
    .from('orders')
    .select('id, created_at, total')
    .order('created_at', { ascending: false })

  if (ordersError) {
    console.error('Supabase orders fetch error:', ordersError)
    return []
  }

  if (!orderRows || orderRows.length === 0) return []

  const orderIds = orderRows.map((o) => o.id)

  // Fetch matching order_items
  const { data: itemRows, error: itemsError } = await supabase
    .from('order_items')
    .select('order_id, product_id, name, quantity, price')
    .in('order_id', orderIds)

  if (itemsError) {
    console.error('Supabase order_items fetch error:', itemsError)
    return []
  }

  const itemsByOrderId = {}
  ;(itemRows || []).forEach((row) => {
    if (!itemsByOrderId[row.order_id]) itemsByOrderId[row.order_id] = []
    itemsByOrderId[row.order_id].push({
      productId: row.product_id,
      name: row.name,
      quantity: row.quantity,
      price: Number(row.price || 0),
    })
  })

  return orderRows.map((order) => ({
    id: String(order.id),
    createdAt: order.created_at,
    total: Number(order.total || 0),
    items: itemsByOrderId[order.id] || [],
  }))
}

function aggregateByDayAndProduct(orders) {
  const aggregated = {}

  orders.forEach((order) => {
    const dateKey = (order.createdAt || '').slice(0, 10) // YYYY-MM-DD
    if (!dateKey) return

    ;(order.items || []).forEach((item) => {
      const key = `${dateKey}__${item.productId || item.id || item.name}`
      if (!aggregated[key]) {
        aggregated[key] = {
          date: dateKey,
          productId: item.productId || item.id || '',
          name: item.name || 'Unknown',
          quantity: 0,
          revenue: 0,
        }
      }
      aggregated[key].quantity += Number(item.quantity || 0)
      aggregated[key].revenue += Number(item.quantity || 0) * Number(item.price || 0)
    })
  })

  return Object.values(aggregated).sort((a, b) => {
    if (a.date === b.date) return b.revenue - a.revenue
    return a.date < b.date ? 1 : -1
  })
}

function exportToCsv(rows) {
  if (!rows || rows.length === 0) {
    alert('No data to export yet.')
    return
  }

  const header = ['Date', 'Product', 'Quantity', 'Revenue']
  const lines = [
    header.join(','),
    ...rows.map((r) => [
      r.date,
      `"${(r.name || '').replace(/"/g, '""')}"`,
      r.quantity,
      r.revenue.toFixed(2),
    ].join(',')),
  ]

  const csv = lines.join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'daily-sales-report.csv'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function SalesReport() {
  const [source, setSource] = useState('local')
  const [orders, setOrders] = useState([])

  useEffect(() => {
    let isCancelled = false

    const loadOrders = async () => {
      // Try Supabase first if configured
      if (supabase) {
        try {
          const supabaseOrders = await fetchOrdersFromSupabase()
          if (!isCancelled && supabaseOrders.length > 0) {
            setOrders(supabaseOrders)
            setSource('supabase')
            return
          }
        } catch (err) {
          console.error('Failed to load orders from Supabase, falling back to localStorage:', err)
        }
      }

      // Fallback to localStorage if Supabase not configured or empty
      const local = getLocalOrders()
      if (!isCancelled) {
        setOrders(local)
        setSource('local')
      }
    }

    loadOrders()
    return () => {
      isCancelled = true
    }
  }, [])

  const rows = useMemo(() => aggregateByDayAndProduct(orders), [orders])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20 pointer-events-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Daily Sales Report</h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              View product-wise sales aggregated by day. Currently showing data from local orders
              stored on this device.
            </p>
          </div>
          <button
            onClick={() => exportToCsv(rows)}
            className="px-4 py-2 rounded-lg bg-amber-500 text-white text-sm md:text-base font-medium hover:bg-amber-600 transition-colors relative z-30 pointer-events-auto"
          >
            Download as Excel (CSV)
          </button>
        </div>

        <div className="mb-4 text-xs md:text-sm text-gray-500">
          <span className="font-semibold">Source:</span> {source === 'local' ? 'LocalStorage (cuptime_orders)' : 'Supabase (orders & order_items)'}
        </div>

        {rows.length === 0 ? (
          <div className="mt-8 bg-white rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
            No orders found yet. Complete a checkout to start collecting sales data.
          </div>
        ) : (
          <div className="mt-4 overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Date</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Product</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-right whitespace-nowrap">Quantity</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-right whitespace-nowrap">Revenue (₹)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={`${row.date}-${row.productId}-${idx}`}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-2 border-t border-gray-100 align-top text-xs md:text-sm whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-100 align-top text-xs md:text-sm">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-100 align-top text-right text-xs md:text-sm whitespace-nowrap">
                      {row.quantity}
                    </td>
                    <td className="px-4 py-2 border-t border-gray-100 align-top text-right text-xs md:text-sm whitespace-nowrap">
                      {row.revenue.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
