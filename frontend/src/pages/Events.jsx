import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
              With You Coffee
            </span>
            <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
              Events
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
            Join us for exciting events, workshops, and community gatherings celebrating the culture of authentic beverages.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss out on these exciting opportunities</p>
          </div>

          <div className="space-y-8">
            {/* Featured Event */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold">Featured Event</span>
                    <span className="text-amber-100">Dec 15, 2025</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">With You Coffee Festival 2025</h3>
                  <p className="text-lg text-amber-100 mb-6">
                    Join us for the biggest coffee celebration of the year! Experience live brewing demonstrations, 
                    taste exclusive blends, meet coffee experts, and enjoy cultural performances.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📍</span>
                      <span>Bangalore Convention Center</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🕒</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎫</span>
                      <span>Free Entry</span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-white text-amber-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
                <div className="w-64 h-64 bg-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">🎪</span>
                </div>
              </div>
            </div>

            {/* Regular Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Wellness Workshop</h3>
                    <p className="text-gray-600">Nov 25, 2025 • 2:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn about the health benefits of traditional South Indian beverages and how to incorporate them into your daily routine.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">Online Event</span>
                  <button className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-lg hover:bg-green-200 transition-colors">
                    Join Free
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Franchise Meetup</h3>
                    <p className="text-gray-600">Dec 5, 2025 • 6:00 PM</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Connect with existing franchise partners, share experiences, and learn about new opportunities in the With You Coffee network.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">Mumbai Office</span>
                  <button className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg hover:bg-blue-200 transition-colors">
                    RSVP
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Barista Training</h3>
                    <p className="text-gray-600">Dec 10, 2025 • 9:00 AM</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional barista training session covering traditional South Indian brewing techniques and modern coffee preparation methods.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-medium">Bangalore HQ</span>
                  <button className="px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 transition-colors">
                    Register
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🎉</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Customer Appreciation Day</h3>
                    <p className="text-gray-600">Dec 20, 2025 • All Day</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Special discounts, free samples, and exclusive offers for our loyal customers. Celebrate with us across all With You Coffee locations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-600 font-medium">All Locations</span>
                  <button className="px-4 py-2 bg-pink-100 text-pink-700 font-medium rounded-lg hover:bg-pink-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600">Highlights from our previous gatherings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-4xl">📸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Grand Opening - Chennai</h3>
              <p className="text-gray-600 text-sm mb-3">October 15, 2025</p>
              <p className="text-gray-600">Celebrated the launch of our Chennai flagship store with over 500 coffee enthusiasts.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Startup Awards Ceremony</h3>
              <p className="text-gray-600 text-sm mb-3">September 20, 2025</p>
              <p className="text-gray-600">Received the 'Best Innovation in F&B' award at the National Startup Awards.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-4xl">🎪</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Summer Festival 2025</h3>
              <p className="text-gray-600 text-sm mb-3">August 10, 2025</p>
              <p className="text-gray-600">A day-long celebration featuring live music, food stalls, and coffee tasting sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
