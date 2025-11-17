import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CorporateGifting() {
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
                Corporate
              </span>
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
                Gifting
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
              Impress your clients and employees with premium coffee gift sets. Customizable with your company branding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Gift Options</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Branding</h3>
                  <p className="text-gray-600">Add your company logo, colors, and messaging to create a unique gift that represents your brand.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📦</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Packaging</h3>
                  <p className="text-gray-600">Elegant gift boxes with premium finishes. Perfect for making a lasting impression.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">🎁</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Gifting Options</h3>
                  <p className="text-gray-600">Order in bulk for client appreciation, employee rewards, or special occasions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">✍️</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Notes</h3>
                  <p className="text-gray-600">Add personalized messages to each gift. Make every recipient feel special.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Perfect For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                <div>
                  <p className="font-semibold text-purple-600 mb-1">Client Appreciation</p>
                  <p className="text-sm">Show gratitude to your valued clients with premium gifts</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600 mb-1">Employee Rewards</p>
                  <p className="text-sm">Recognize and reward your team's hard work</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600 mb-1">Corporate Events</p>
                  <p className="text-sm">Memorable gifts for conferences and corporate gatherings</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600 mb-1">Holiday Gifts</p>
                  <p className="text-sm">Seasonal gifting for clients and employees</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Gift Customization Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Custom box designs with your company logo</li>
                <li>✓ Choice of premium coffee blends</li>
                <li>✓ Personalized greeting cards</li>
                <li>✓ Branded ribbons and packaging materials</li>
                <li>✓ Bulk quantity discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Your Custom Gift Set</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Customizing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
