import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Technology() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
                Brewing Innovation with Every Cup
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                At With You Coffee, we believe great coffee isn't just about the brew — it's about the experience. We've built a smart, seamless technology ecosystem that makes your daily beverage routine faster, smoother, and more rewarding — all through your phone.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <img src="/images/browser title.gif" alt="With You Coffee" className="w-24 h-24 mx-auto mb-4 object-contain" />
                      <div className="text-sm text-gray-600 mb-2">With You Coffee App</div>
                      <div className="text-xs text-gray-400">Order • Track • Enjoy</div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-amber-300 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
