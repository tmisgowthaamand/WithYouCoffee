import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import axios from 'axios'

export default function Products() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]))
  }, [])

  const handleAdd = (product) => {
    try {
      addToCart(product)
      
      // Show success notification
      const notification = document.createElement('div')
      notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideInScale'
      notification.innerHTML = `
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          ${product.name} added to cart!
        </div>
      `
      document.body.appendChild(notification)
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove()
        }
      }, 3000)
    } catch (error) {
      console.error('Error adding product to cart:', error)
      alert('Error adding product to cart. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Products Grid - Clean 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, index) => (
            <div key={p.id}>
              <ProductCard product={p} onAdd={handleAdd} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 animate-floatingCard">☕</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Loading our delicious products...</h3>
            <p className="text-gray-500">Please wait while we fetch the latest menu.</p>
          </div>
        )}
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Loved by Thousands Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              We proudly collaborate with visionary investors and reputed companies who believe in bringing traditional flavors to modern workspaces.
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Nice and good taste, fresh tea and coffee and delivery on time. Useful for my staff for anytime refreshments.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">SRINI Madurai</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Everyday me and my staffs loved up with cup time tea. Thank you so much for your hygienic tea and perfect time delivery.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">HR</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Hari Rajaratahu</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  We purchase coffee and tea for our office. Prompt delivery and excellent taste every day. Highly recommended for your daily dose of coffee/tea.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SP</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Swathik Prasanna</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Sweetly service and cup time taste is very good and excellent. Highly recommended for office and corporate use.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">DK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Dinesh kumar</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>

              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Nice and good taste, fresh tea and coffee and delivery on time. Useful for my staff for anytime refreshments.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">SRINI Madurai</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Everyday me and my staffs loved up with cup time tea. Thank you so much for your hygienic tea and perfect time delivery.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">HR</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Hari Rajaratahu</div>
                    <div className="text-gray-500 text-xs">Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Cup Time Delivers Section */}
      <section className="relative py-20 bg-gray-800 overflow-hidden">
        {/* Coffee Bean Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-6 h-6 bg-amber-600 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-20 right-32 w-4 h-4 bg-orange-500 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-5 h-5 bg-amber-500 rounded-full opacity-50 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 right-48 w-3 h-3 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 right-40 w-4 h-4 bg-amber-400 rounded-full opacity-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How Cup Time Delivers Tradition to Your Workplace
            </h2>
            <p className="text-lg text-gray-300">
              From Order to Sip – A Seamless 6-Step Journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 1</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🛒</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Receive Order</h3>
                <p className="text-gray-300">Orders are placed through our easy-to-use mobile app — anytime, anywhere.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 2</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🥛</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Prepare Fresh Batches (Twice in a Day)</h3>
                <p className="text-gray-300">Every fresh beverage are geared into microganic, sanitized flasks to retain heat and hygiene.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 3</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🧴</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Transfer to Sanitized Flasks</h3>
                <p className="text-gray-300">All geared beverages are poured into food-grade, sanitized flasks to retain heat and hygiene.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 4</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📱</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Attach QR Code with Details</h3>
                <p className="text-gray-300">Each flask is labelled with a QR code containing product and delivery details for full traceability.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 5</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">👤</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Delivery Person Collection</h3>
                <p className="text-gray-300">Our trained delivery person collects the batched order, ready for safe and quick transportation.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Step 6</span>
                </div>
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Delivery at Your Doorsteps</h3>
                <p className="text-gray-300">Your order is delivered hot and fresh — right to your business location, ready to serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
