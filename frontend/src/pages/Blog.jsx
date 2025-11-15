import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Blog() {
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
              Blog
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
            Discover the stories behind our beverages, industry insights, and the latest updates from the With You Coffee family.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-lg text-gray-600">Insights from the world of authentic South Indian beverages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <div className="md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">Featured</span>
                  <span className="text-gray-500 text-sm">Nov 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Art of South Indian Filter Coffee</h3>
                <p className="text-gray-600 mb-4">Discover the traditional brewing methods that make our filter coffee authentic and delicious. From bean selection to the perfect pour...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>

            {/* Regular Blog Posts */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <span className="text-6xl">🌿</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Health</span>
                  <span className="text-gray-500 text-sm">Nov 8, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Health Benefits of Karupatti Sukku Coffee</h3>
                <p className="text-gray-600 mb-4">Learn about the wellness benefits of palm jaggery and ginger in our traditional recipe...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Company</span>
                  <span className="text-gray-500 text-sm">Nov 5, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">With You Coffee Expands to 5 New Cities</h3>
                <p className="text-gray-600 mb-4">We're excited to announce our expansion to Chennai, Hyderabad, Pune, Mumbai, and Delhi...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Business</span>
                  <span className="text-gray-500 text-sm">Nov 2, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Franchise Success Stories</h3>
                <p className="text-gray-600 mb-4">Meet our successful franchise partners and learn how they built thriving businesses...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Technology</span>
                  <span className="text-gray-500 text-sm">Oct 30, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Behind the Scenes: Our Tech Stack</h3>
                <p className="text-gray-600 mb-4">Explore the technology that powers With You Coffee's seamless ordering and delivery experience...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center">
                <span className="text-6xl">🏆</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Awards</span>
                  <span className="text-gray-500 text-sm">Oct 25, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">With You Coffee Wins 'Best Startup' Award</h3>
                <p className="text-gray-600 mb-4">We're honored to receive the Best Food & Beverage Startup award at the India Startup Summit...</p>
                <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest stories and updates</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
