import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TimeSlottedDeliveries() {
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
                Time-Slotted
              </span>
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
                Deliveries
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
              Schedule coffee deliveries at your preferred time slots. Perfect for office breaks, meetings, and team gatherings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Time-Slotted Deliveries?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl">⏰</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Choose from morning, afternoon, and evening delivery slots that fit your office routine perfectly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Frequency</h3>
                  <p className="text-gray-600">Daily, weekly, or bi-weekly deliveries. Adjust your schedule anytime based on your office needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-600">Track your delivery in real-time and know exactly when your coffee will arrive.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">👤</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Delivery Partner</h3>
                  <p className="text-gray-600">Get a dedicated delivery partner who knows your office and preferences.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-semibold text-amber-600">Morning</p>
                  <p className="text-gray-600">7:00 AM - 10:00 AM</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-amber-600">Afternoon</p>
                  <p className="text-gray-600">12:00 PM - 3:00 PM</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-amber-600">Evening</p>
                  <p className="text-gray-600">4:00 PM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Schedule Your Deliveries?</h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
