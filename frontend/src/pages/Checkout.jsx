import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { apiUrl } from '../config/api'

export default function Checkout() {
  const navigate = useNavigate()
  const { items: cartItems, cartTotal, gstAmount, finalTotal, clearCart } = useCart()
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  })
  
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  // orderId: backend ID used for tracking page URL
  const [orderId, setOrderId] = useState('')
  // orderCode: user-friendly code shown in UI (e.g. CT-...)
  const [orderCode, setOrderCode] = useState('')
  const [paidTotal, setPaidTotal] = useState(null)

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      navigate('/cart')
    }
  }, [cartItems, navigate, orderPlaced])

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      const totalAtPaymentTime = finalTotal

      // Create order payload for backend
      const orderPayload = {
        customerInfo,
        items: cartItems,
        subtotal: cartTotal,
        gst: gstAmount,
        total: totalAtPaymentTime,
        paymentMethod
      }

      const response = await fetch(apiUrl('/api/orders'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderPayload)
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const result = await response.json()
      // Prefer backend order.id; fall back to older { id } format if present
      const backendId = result?.order?.id || result?.id || ''
      const displayCode = backendId ? `CT-${backendId}` : `CT-${Date.now()}`

      // Also store a copy in localStorage so admin can read orders
      const localOrder = {
        id: backendId || displayCode,
        code: displayCode,
        customerInfo,
        items: cartItems,
        subtotal: cartTotal,
        gst: gstAmount,
        total: totalAtPaymentTime,
        paymentMethod,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }
      try {
        const existing = JSON.parse(localStorage.getItem('cuptime_orders') || '[]')
        existing.push(localOrder)
        localStorage.setItem('cuptime_orders', JSON.stringify(existing))
      } catch (e) {
        console.error('Failed to save order to localStorage', e)
      }

      // Clear cart and show success
      clearCart()
      setOrderId(backendId || displayCode)
      setOrderCode(displayCode)
      setPaidTotal(totalAtPaymentTime)
      setOrderPlaced(true)
      
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  // Order Success Component
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-4xl mx-auto px-6 py-12 relative z-30 pointer-events-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-6">Thank you for your order. We'll prepare your delicious items with care.</p>
            
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Details</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium">{orderCode || orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-bold text-amber-600">₹{(paidTotal ?? finalTotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium">
                    {(() => {
                      const method = (paymentMethod || '').toLowerCase()
                      if (method === 'upi') return 'UPI'
                      if (method.includes('cash')) return 'Cash on Delivery'
                      if (!method) return ''
                      return paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)
                    })()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center mt-6 pointer-events-auto">
              <button 
                onClick={() => navigate('/products')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => navigate('/')}
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium"
              >
                Go Home
              </button>
              <button 
                onClick={() => navigate(`/order/${orderId}`)}
                className="bg-white border border-amber-400 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors duration-300 font-medium"
              >
                Track Order
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20 pointer-events-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Delivery Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode *"
                    value={customerInfo.pincode}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Complete Address *"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent h-24 md:col-span-2"
                    required
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                <div className="space-y-4">
                  {/* UPI Payment */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <div className="ml-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">UPI</span>
                      </div>
                      <div>
                        <div className="font-medium">UPI Payment</div>
                        <div className="text-sm text-gray-500">Pay using PhonePe, Google Pay, Paytm, etc.</div>
                      </div>
                    </div>
                  </label>

                  {/* Debit Card */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="debit"
                      checked={paymentMethod === 'debit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <div className="ml-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Debit Card</div>
                        <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                      </div>
                    </div>
                  </label>

                  {/* Credit Card */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <div className="ml-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Credit Card</div>
                        <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                      </div>
                    </div>
                  </label>

                  {/* Net Banking */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <div className="ml-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Net Banking</div>
                        <div className="text-sm text-gray-500">All major banks supported</div>
                      </div>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash_on_delivery"
                      checked={paymentMethod === 'cash_on_delivery'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-amber-500 focus:ring-amber-500"
                    />
                    <div className="ml-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4zm0 2h12v6H4V7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-gray-500">Pay with cash when your order is delivered.</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay ₹${finalTotal.toFixed(2)}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-gray-500 text-xs">Qty: {item.quantity}</div>
                    </div>
                    <div className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (5%)</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-amber-600">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Swiggy Instamart-style quick delivery copy */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  Delivery in <strong>30 minutes</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
