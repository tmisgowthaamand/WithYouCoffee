import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

export default function Cart() {
  // ...existing code...
  const handleEdit = (item) => {
    openEditModal(item);
  }
  const { items: cartItems, cartTotal, gstAmount, finalTotal, cartItemCount, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleRemove = (productId) => {
    console.log('Remove from cart:', productId);
    removeFromCart(productId);
  };
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  // Edit modal state
  const [editItem, setEditItem] = useState(null)
  const [editQty, setEditQty] = useState(1)

  const openEditModal = (item) => {
    setEditItem(item)
    setEditQty(item.quantity || 1)
  }
  const closeEditModal = () => setEditItem(null)
  const saveEdit = () => {
    if (editItem) {
      updateQuantity(editItem.id, editQty)
      setEditItem(null)
    }
  }

  const handleQuantityChange = (productId, newQuantity) => {
    console.log('Quantity change:', { productId, newQuantity });
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  }

  // Event-safe wrappers to guarantee clicks aren't blocked by parents
  const handleQtyDec = (e, productId, quantity) => {
    e.preventDefault();
    e.stopPropagation();
    if (quantity <= 1) return;
    handleQuantityChange(productId, quantity - 1);
  }

  const handleQtyInc = (e, productId, quantity) => {
    e.preventDefault();
    e.stopPropagation();
    handleQuantityChange(productId, quantity + 1);
  }

  const handleRemoveClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    handleRemove(productId);
  }

  const handleEditClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    handleEdit(item);
  }

  const applyCoupon = () => {
    const code = couponCode.trim().toLowerCase()

    // Both coupons apply ₹2 discount per item in cart
    if (code === 'save10' || code === 'welcome') {
      const perItemDiscount = 2
      const totalDiscount = cartItemCount * perItemDiscount
      setDiscount(totalDiscount)
    } else {
      setDiscount(0)
      alert('Invalid coupon code')
    }
  }

  const finalTotalWithDiscount = finalTotal - discount

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cart</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-8 mt-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="ml-2 text-gray-900 font-medium">Cart</span>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="ml-2 text-gray-500">Checkout</span>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="ml-2 text-gray-500">Payment</span>
            </div>
          </div>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
            <button 
              disabled
              className="inline-block bg-gray-400 text-gray-600 px-8 py-3 rounded-lg font-medium cursor-not-allowed opacity-50"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 relative">
                  <div className="flex items-start gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center flex-shrink-0 border border-amber-200 overflow-hidden">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span className="text-amber-600 text-3xl font-bold flex items-center justify-center w-full h-full" style={{display: item.image ? 'none' : 'flex'}}>
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-xl mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{item.description}</p>
                      
                      {/* Product Attributes */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Size:</span>
                          <span className="text-sm font-medium text-gray-900">Regular</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Type:</span>
                          <span className="text-sm font-medium text-gray-900">{item.category || 'Beverage'}</span>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
                        <span className="text-lg text-gray-400 line-through">₹{Math.round(item.price * 1.2)}</span>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg relative z-50 pointer-events-auto">
                          <button 
                            onClick={(e) => handleQtyDec(e, item.id, item.quantity)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-l-lg transition-colors cursor-pointer pointer-events-auto"
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>
                          <span className="w-12 h-10 flex items-center justify-center text-lg font-medium border-x border-gray-200">{item.quantity}</span>
                          <button 
                            onClick={(e) => handleQtyInc(e, item.id, item.quantity)}
                            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-r-lg transition-colors cursor-pointer pointer-events-auto"
                          >
                            +
                          </button>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 relative z-50 pointer-events-auto">
                          <button 
                            onClick={(e) => handleRemoveClick(e, item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer pointer-events-auto"
                            title="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                          <button 
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer pointer-events-auto" 
                            title="Edit item"
                            onClick={(e) => handleEditClick(e, item)}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sub Total</span>
                    <span className="font-bold text-gray-900">₹{cartTotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center text-green-600">
                      <span>Discount</span>
                      <span className="font-bold">-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-bold text-gray-900">₹{gstAmount.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-bold text-green-600">Free</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">₹{finalTotalWithDiscount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/checkout"
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium text-center block text-lg cursor-pointer hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  style={{zIndex: 10, position: 'relative'}}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Proceed to Checkout
                  </div>
                </Link>
                
                {/* Estimated Delivery */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Delivery in <strong>30 minutes</strong></span>
                  </div>
                </div>
              </div>
              
              {/* Coupon Section */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Have a Coupon?</h3>
                
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-3 bg-amber-500 text-white font-medium rounded-xl hover:bg-amber-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                
                {/* Sample Coupons */}
                <div className="mt-4 text-sm text-gray-500">
                  <p>Try: <code className="bg-gray-100 px-2 py-1 rounded">SAVE10</code> or <code className="bg-gray-100 px-2 py-1 rounded">WELCOME</code></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {editItem && (
        <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center p-4" onClick={closeEditModal}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Edit {editItem.name}</h3>
              <button onClick={closeEditModal} className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">Quantity</div>
                <div className="flex items-center border border-gray-200 rounded-lg w-max mx-auto">
                  <button onClick={() => setEditQty(Math.max(1, editQty - 1))} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-l-lg transition-colors" disabled={editQty <= 1}>−</button>
                  <span className="w-12 h-10 flex items-center justify-center text-lg font-medium border-x border-gray-200">{editQty}</span>
                  <button onClick={() => setEditQty(editQty + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-r-lg transition-colors">+</button>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <button onClick={closeEditModal} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">Cancel</button>
                <button onClick={saveEdit} className="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
