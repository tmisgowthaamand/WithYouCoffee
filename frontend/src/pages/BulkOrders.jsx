import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function BulkOrders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                Bulk
              </span>
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
                Orders
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
              Special pricing for large corporate orders. Whether it's 50 cups or 500, we handle it with precision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bulk Order Benefits</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wholesale Pricing</h3>
                  <p className="text-gray-600">Get special discounts on large orders. The more you order, the better the price.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Quantities</h3>
                  <p className="text-gray-600">Order exactly what you need. From 50 cups to 5000+ for large events and conferences.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">🎪</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Event Coordination</h3>
                  <p className="text-gray-600">Our team coordinates with you for perfect timing and delivery for your events.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Account Manager</h3>
                  <p className="text-gray-600">Get a dedicated point of contact for all your bulk order needs and inquiries.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Perfect For</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <li>✓ Corporate Events</li>
                <li>✓ Conferences & Seminars</li>
                <li>✓ Product Launches</li>
                <li>✓ Team Celebrations</li>
                <li>✓ Client Meetings</li>
                <li>✓ Office Parties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Bulk Quote</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get a Quote Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
