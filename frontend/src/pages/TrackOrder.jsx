import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TrackOrder() {
  const navigate = useNavigate()
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const value = contact.trim().toLowerCase()
    if (!value) {
      setError('Please enter your phone number or email.')
      return
    }

    try {
      const raw = localStorage.getItem('cuptime_orders') || '[]'
      const list = JSON.parse(raw)
      if (!Array.isArray(list) || list.length === 0) {
        setError('No orders found for this device. Please place an order first.')
        return
      }

      // Find latest order for this email or phone
      const matching = list.filter(o => {
        const phone = (o.customerInfo?.phone || '').toString().toLowerCase()
        const email = (o.customerInfo?.email || '').toString().toLowerCase()
        return phone.includes(value) || email.includes(value)
      })

      if (matching.length === 0) {
        setError('No order found for this phone or email.')
        return
      }

      // Sort by createdAt and take latest
      matching.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      const latest = matching[0]

      if (!latest.id) {
        setError('Order found but has no ID. Please contact support.')
        return
      }

      navigate(`/order/${latest.id}`)
    } catch (err) {
      console.error('Error looking up order by contact:', err)
      setError('Something went wrong while searching your order.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-xl mx-auto px-6 py-10 relative z-20 pointer-events-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
        <p className="text-gray-600 mb-6">
          Enter the phone number or Gmail you used during checkout to see your latest order status.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone number or Gmail
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="e.g. 9876543210 or name@gmail.com"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            Find My Order
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
