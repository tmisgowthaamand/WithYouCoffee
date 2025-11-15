import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Admin() {
  const [contactRequests, setContactRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [orders, setOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(false)

  useEffect(() => {
    fetchContactRequests()
    fetchOrders()
  }, [])

  const fetchContactRequests = async () => {
    try {
      setLoading(true)
      const API_URL = 'http://localhost:4000'
      const response = await fetch(`${API_URL}/api/contact`)
      const data = await response.json()
      
      if (data.success) {
        setContactRequests(data.requests)
      } else {
        setError('Failed to fetch contact requests')
      }
    } catch (err) {
      setError('Error connecting to server')
      console.error('Error fetching contact requests:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchOrders = () => {
    try {
      setOrdersLoading(true)
      const raw = localStorage.getItem('cuptime_orders') || '[]'
      const parsed = JSON.parse(raw)
      const list = Array.isArray(parsed) ? parsed : []
      // Sort so newest orders (by createdAt) appear first
      list.sort((a, b) => {
        const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return bTime - aTime
      })
      setOrders(list)
    } catch (err) {
      console.error('Error loading orders from localStorage:', err)
      setOrders([])
    } finally {
      setOrdersLoading(false)
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      const API_URL = 'http://localhost:4000'
      const response = await fetch(`${API_URL}/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
      })

      const data = await response.json()
      
      if (data.success) {
        // Update local state
        setContactRequests(prev => 
          prev.map(req => 
            req.id === id ? { ...req, status: newStatus, updatedAt: new Date().toISOString() } : req
          )
        )
      }
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const updateOrderStatus = async (id, newStatus) => {
    // Update local state and localStorage only (no backend dependency)
    setOrders(prev => {
      const updated = prev.map(o => (
        o.id === id ? { ...o, status: newStatus } : o
      ))
      try {
        localStorage.setItem('cuptime_orders', JSON.stringify(updated))
      } catch (err) {
        console.error('Error saving updated orders to localStorage:', err)
      }
      return updated
    })
  }

  const deleteOrder = (id) => {
    setOrders(prev => {
      const updated = prev.filter(o => o.id !== id)
      try {
        localStorage.setItem('cuptime_orders', JSON.stringify(updated))
      } catch (err) {
        console.error('Error saving orders after delete:', err)
      }
      return updated
    })
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  const formatFieldName = (fieldName) => {
    // Convert snake_case to display format
    return fieldName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getOrderStatusBadge = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'preparing': return 'bg-yellow-100 text-yellow-800'
      case 'out_for_delivery': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-10 relative z-20 pointer-events-auto">
        {/* Contact Requests Admin */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <div className="flex gap-3">
              <button 
                onClick={fetchContactRequests}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh Contacts
              </button>
              <button 
                onClick={fetchOrders}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Refresh Orders
              </button>
            </div>
          </div>

        {loading && (
          <div className="text-center py-8">
            <div className="text-gray-600">Loading contact requests...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Total Requests: {contactRequests.length}
              </h2>
            </div>

            {contactRequests.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No contact requests found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Inquiry Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contactRequests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{request.name}</div>
                          <div className="text-sm text-gray-500">{request.email}</div>
                          <div className="text-sm text-gray-500">{request.mobile}</div>
                          {request.company && (
                            <div className="text-sm text-gray-500">{request.company}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {request.inquiry_type || 'general'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs truncate">
                            {request.message || 'No message'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(request.created_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <select
                            value={request.status}
                            onChange={(e) => updateStatus(request.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 cursor-pointer pointer-events-auto"
                          >
                            <option value="new">New</option>
                            <option value="in-progress">In Progress</option>
                            <option value="resolved">Resolved</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Close Contact Admin Section */}
        </div>

        {/* Orders Admin Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
            <span className="text-sm text-gray-500">Total Orders: {orders.length}</span>
          </div>

          {ordersLoading ? (
            <div className="text-center py-8 text-gray-500">Loading orders...</div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No orders yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="font-medium">{order.id}</div>
                        <div className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="font-medium">{order.customerInfo?.name}</div>
                        <div className="text-xs text-gray-500">{order.customerInfo?.phone}</div>
                        <div className="text-xs text-gray-500">{order.customerInfo?.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <ul className="text-xs list-disc list-inside space-y-1 max-w-xs">
                          {order.items?.map((item) => (
                            <li key={item.id}>{item.name} × {item.quantity}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₹{order.total?.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {(() => {
                          const method = (order.paymentMethod || '').toLowerCase()
                          if (method === 'upi') return 'UPI'
                          if (method.includes('cash')) return 'Cash on Delivery'
                          if (!method) return '-'
                          return order.paymentMethod
                        })()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getOrderStatusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="confirmed">Confirmed</option>
                            <option value="preparing">Preparing</option>
                            <option value="out_for_delivery">Out for Delivery</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => deleteOrder(order.id)}
                            className="text-xs text-red-600 hover:text-red-800 underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
