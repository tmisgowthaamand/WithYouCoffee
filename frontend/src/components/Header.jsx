import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  
  // Use cart context for global state management
  const { items: cartItems, cartTotal, cartItemCount, gstAmount, finalTotal, removeFromCart, updateQuantity } = useCart()

  return (
    <header className="bg-slate-950/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-2xl shadow-black/20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 animate-backgroundShift opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center gap-3 group animate-slideInScale">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black/40 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glowPulseBlue">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/40 to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <video
              src="/images/two_cups_logo_glow.mp4"
              className="relative z-10 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="group-hover:translate-x-1 transition-transform duration-300">
            <div className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors duration-300">With You Coffee</div>
            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Traditional taste, modern delivery</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link 
            to="/" 
            className={`relative transition-all duration-300 font-medium pb-1 animate-textRevealStagger stagger-1 ${
              location.pathname === '/' 
                ? 'text-amber-400 border-b-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">Home</span>
          </Link>
          <Link 
            to="/products" 
            className={`relative transition-all duration-300 font-medium group animate-textRevealStagger stagger-2 ${
              location.pathname === '/products' 
                ? 'text-amber-400' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">Our Products</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${
              location.pathname === '/products' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            to="/franchise" 
            className={`relative transition-all duration-300 font-medium group animate-textRevealStagger stagger-3 ${
              location.pathname === '/franchise' 
                ? 'text-amber-400' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">Franchisee</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${
              location.pathname === '/franchise' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            to="/about" 
            className={`relative transition-all duration-300 font-medium group animate-textRevealStagger stagger-4 ${
              location.pathname === '/about' 
                ? 'text-amber-400' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">About Us</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${
              location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            to="/mobile" 
            className={`relative transition-all duration-300 font-medium group animate-textRevealStagger stagger-5 ${
              location.pathname === '/mobile' 
                ? 'text-amber-400' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">With You Coffee Mobile</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${
              location.pathname === '/mobile' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          <Link 
            to="/contact" 
            className={`relative transition-all duration-300 font-medium group animate-textRevealStagger stagger-6 ${
              location.pathname === '/contact' 
                ? 'text-amber-400' 
                : 'text-gray-300 hover:text-amber-400'
            }`}
          >
            <span className="relative z-10">Contact Us</span>
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </Link>
          
          {/* More Dropdown */}
          <div className="relative animate-textRevealStagger stagger-7">
            <button 
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium group relative"
            >
              <span className="relative z-10">More</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isMoreDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            {isMoreDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 py-3 z-50 animate-slideInScale">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl"></div>
                <div className="relative z-10">
                  <Link to="/careers" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-amber-400 transition-all duration-300 rounded-lg mx-2 group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors duration-300"></div>
                      Our Careers
                    </div>
                  </Link>
                  <Link to="/blog" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-amber-400 transition-all duration-300 rounded-lg mx-2 group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors duration-300"></div>
                      Blog
                    </div>
                  </Link>
                  <Link to="/events" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-amber-400 transition-all duration-300 rounded-lg mx-2 group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors duration-300"></div>
                      Events
                    </div>
                  </Link>
                  <Link to="/technology" className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-amber-400 transition-all duration-300 rounded-lg mx-2 group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors duration-300"></div>
                      Technology
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        {/* Right Side - Cart & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Cart Component */}
          <div className="relative animate-textRevealStagger stagger-8">
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
            >
              {/* Cart Icon */}
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
              </svg>
              
              {/* Cart Badge */}
              {cartItemCount > 0 && (
                <div className="absolute -top-1 -right-1 min-w-[20px] h-[20px] bg-red-500 text-white font-bold rounded-full flex items-center justify-center shadow-lg z-30 border-2 border-slate-900 text-xs">
                  {cartItemCount}
                </div>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute top-full right-0 mt-3 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 animate-slideInScale">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl"></div>
                <div className="relative z-10 p-6">
                  {/* Cart Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">Shopping Cart</h3>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Cart Items */}
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-0" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Your cart is empty</p>
                      <Link 
                        to="/products" 
                        onClick={() => setIsCartOpen(false)}
                        className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
                      >
                        Browse Products
                      </Link>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items List */}
                      <div className="space-y-4 max-h-64 overflow-y-auto">
                        {Array.isArray(cartItems) && cartItems.map((item, index) => (
                          <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 animate-slideInScale" style={{animationDelay: `${index * 0.1}s`}}>
                            {/* Product Image */}
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                              {item.image ? (
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full h-full object-cover rounded-lg"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                              ) : null}
                              <span className="text-amber-400 text-xs font-bold flex items-center justify-center w-full h-full" style={{display: item.image ? 'none' : 'flex'}}>
                                {item.name.charAt(0)}
                              </span>
                            </div>
                            
                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white text-sm font-medium truncate">{item.name}</h4>
                              <p className="text-amber-400 text-sm font-bold">₹{item.price}</p>
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-xs flex items-center justify-center transition-colors duration-300"
                              >
                                -
                              </button>
                              <span className="text-white text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-xs flex items-center justify-center transition-colors duration-300"
                              >
                                +
                              </button>
                            </div>
                            
                            {/* Remove Button */}
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Cart Footer */}
                      <div className="border-t border-white/10 pt-4 mt-4">
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">Subtotal:</span>
                            <span className="text-gray-300 text-sm">₹{cartTotal.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm">GST (5%):</span>
                            <span className="text-gray-300 text-sm">₹{gstAmount.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between border-t border-white/10 pt-2">
                            <span className="text-white font-medium">Total:</span>
                            <span className="text-amber-400 text-xl font-bold">₹{finalTotal.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Link 
                            to="/cart" 
                            onClick={() => setIsCartOpen(false)}
                            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
                            </svg>
                            View Cart
                          </Link>
                          <Link 
                            to="/checkout" 
                            onClick={() => setIsCartOpen(false)}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-medium rounded-xl transition-all duration-300 text-center magnetic-button flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-amber-400 transition-all duration-300 p-3 rounded-xl hover:bg-white/5 magnetic-button flex items-center justify-center"
          >
          <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 animate-slideInScale">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50"></div>
          <div className="px-6 py-6 space-y-2 relative z-10">
            <Link to="/" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-1 ${
              location.pathname === '/' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>Home</Link>
            <Link to="/products" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-2 ${
              location.pathname === '/products' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>Our Products</Link>
            <Link to="/franchise" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-3 ${
              location.pathname === '/franchise' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>Franchisee</Link>
            <Link to="/about" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-4 ${
              location.pathname === '/about' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>About Us</Link>
            <Link to="/mobile" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-5 ${
              location.pathname === '/mobile' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>With You Coffee Mobile</Link>
            <Link to="/contact" className={`block font-medium py-3 px-4 rounded-xl transition-all duration-300 animate-textRevealStagger stagger-6 ${
              location.pathname === '/contact' 
                ? 'text-amber-400 bg-amber-500/10 border-l-2 border-amber-500' 
                : 'text-gray-300 hover:text-amber-400 hover:bg-white/5'
            }`}>Contact Us</Link>
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="text-sm font-medium text-gray-400 mb-3 px-4">More</div>
              <Link to="/careers" className={`block text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/careers' 
                  ? 'text-amber-400 bg-amber-500/10' 
                  : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'
              }`}>Our Careers</Link>
              <Link to="/blog" className={`block text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/blog' 
                  ? 'text-amber-400 bg-amber-500/10' 
                  : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'
              }`}>Blog</Link>
              <Link to="/events" className={`block text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/events' 
                  ? 'text-amber-400 bg-amber-500/10' 
                  : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'
              }`}>Events</Link>
              <Link to="/technology" className={`block text-sm py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/technology' 
                  ? 'text-amber-400 bg-amber-500/10' 
                  : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'
              }`}>Technology</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
