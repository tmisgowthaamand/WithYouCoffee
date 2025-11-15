import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const STATUS_STEPS = [
  { key: 'confirmed', label: 'Order Confirmed' },
  { key: 'preparing', label: 'Being Prepared' },
  { key: 'out_for_delivery', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' }
]

export default function OrderTracking() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      setLoading(true)
      const raw = localStorage.getItem('cuptime_orders') || '[]'
      const list = JSON.parse(raw)
      const found = Array.isArray(list) ? list.find(o => String(o.id) === String(id)) : null
      if (!found) {
        setError('Order not found. Please check the link or try again later.')
      } else {
        setOrder(found)
      }
    } catch (err) {
      console.error('Error loading order from localStorage:', err)
      setError('Unable to load this order. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [id])

  const getStepStatus = (stepKey) => {
    if (!order) return 'upcoming'
    const currentIndex = STATUS_STEPS.findIndex(s => s.key === order.status)
    const stepIndex = STATUS_STEPS.findIndex(s => s.key === stepKey)
    if (stepIndex < currentIndex) return 'completed'
    if (stepIndex === currentIndex) return 'current'
    return 'upcoming'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-10 relative z-20 pointer-events-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-gray-500 hover:text-gray-800"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
        <p className="text-gray-600 mb-6">Order ID: <span className="font-mono text-sm">{id}</span></p>

        {loading && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center text-gray-500">
            Loading order details...
          </div>
        )}

        {!loading && error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
            {error}
          </div>
        )}

        {!loading && !error && order && (
          <div className="space-y-8">
            {/* Status timeline */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Delivery Status</h2>
              <ol className="relative border-l border-gray-200 ml-3">
                {STATUS_STEPS.map((step) => {
                  const state = getStepStatus(step.key)
                  const isCompleted = state === 'completed'
                  const isCurrent = state === 'current'

                  const isDeliveredStep = step.key === 'delivered'
                  const activeDotColor = isDeliveredStep ? 'bg-green-500 border-green-500' : 'bg-amber-500 border-amber-500'

                  return (
                    <li key={step.key} className="mb-6 ml-4">
                      <div className={`absolute -left-1.5 w-3 h-3 rounded-full border ${
                        isCompleted || isCurrent
                          ? activeDotColor
                          : 'bg-white border-gray-300'
                      }`}></div>
                      <p className={`text-sm font-medium ${
                        isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.label}
                      </p>
                      {isCurrent && order.status !== 'delivered' && (
                        <p className="text-xs text-amber-600 mt-1">In progress</p>
                      )}
                      {isDeliveredStep && order.status === 'delivered' && (
                        <p className="text-xs text-green-600 mt-1">Completed</p>
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Basic order meta */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Order Details</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Customer</span>
                  <span className="font-medium">{order.customerInfo?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone</span>
                  <span>{order.customerInfo?.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email</span>
                  <span>{order.customerInfo?.email}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment</span>
                  <span className="font-medium">
                    {(() => {
                      const method = (order.paymentMethod || '').toLowerCase()
                      if (method === 'upi') return 'UPI'
                      if (method.includes('cash')) return 'Cash on Delivery'
                      return order.paymentMethod || ''
                    })()}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span>Total</span>
                  <span className="font-bold text-amber-600">₹{order.total?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
