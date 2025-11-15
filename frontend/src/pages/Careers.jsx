import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
            Brew Your Future With Cup Time
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Join a team that's redefining refreshment with tradition, technology, and timely delivery. Whether you're into operations, logistics, tech, or flavor—your journey starts here.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Opportunities for Growth:</h3>
              <p className="text-sm text-gray-600">From interns to full-time roles, Cup Time nurtures talent. With learning paths, mentorship, and leadership visibility, you'll have the tools to grow.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Work Benefits</h3>
              <p className="text-sm text-gray-600">Enjoy a flexible work environment, team outings, health benefits, and product discounts.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Work with Heart</h3>
              <p className="text-sm text-gray-600">Whether you're brewing coffee, coding the app, or managing franchise support—you're part of a tight-knit, purpose-driven team.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Culture of Purpose</h3>
              <p className="text-sm text-gray-600">We're passionate about great taste, community roots, and meaningful work. Your contribution matters from Day 1.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {/* Job Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400">📋</span>
                    <h3 className="text-lg font-bold text-gray-900">Delivery Executive (Hot Beverages)</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Vehicles will be provided. Candidate with Smart phone and driving licence. Attractive Incentives with ESI & PF
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span><strong>Location:</strong> Madurai & Coimbatore</span>
                    <span><strong>Experience:</strong> 0-2 years</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400">👥</span>
                    <h3 className="text-lg font-bold text-gray-900">Customer Care Executives (Female)</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    We are looking for enthusiastic and customer-focused individuals to join our team as Customer Care Executives. If you have a passion for communication and enjoy helping customers, we'd love to hear from you!
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span><strong>Location:</strong> Madurai & Nearby Areas</span>
                    <span><strong>Experience:</strong> 0-2 years</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400">🤝</span>
                    <h3 className="text-lg font-bold text-gray-900">Franchisee Support Coordinator</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    As our Franchisee Support Coordinator, you'll help new franchisee partners onboard, train staff, and ensure quality service across locations. Strong communication and multi-tasking skills are key.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span><strong>Location:</strong> Madurai & Coimbatore</span>
                    <span><strong>Experience:</strong> 0-2 years</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400">📢</span>
                    <h3 className="text-lg font-bold text-gray-900">Marketing Executives (Male)</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    We are looking for dynamic and self-driven Marketing Executives to join our team. This is a field-based role involving direct interaction with customers at their doorstep. If you're passionate about marketing and love meeting people, we'd like to meet you!
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span><strong>Location:</strong> Madurai & Coimbatore</span>
                    <span><strong>Experience:</strong> 0-2 years</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
