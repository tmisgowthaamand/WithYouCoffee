import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Mobile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Spline-style gradient + glass card for mobile */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-44 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center">
            {/* Text block */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                  With You Coffee
                </span>
                <span
                  className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger"
                  style={{ animationDelay: '0.2s' }}
                >
                  Mobile App
                </span>
              </h1>
              <p
                className="text-lg text-gray-300 max-w-2xl mt-6 mx-auto lg:mx-0 animate-textStagger"
                style={{ animationDelay: '0.4s' }}
              >
                Order your favorite South Indian beverages on the go. Fast, convenient, and always fresh.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#download-app"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/40 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get App Updates
                </a>
                <a
                  href="#app-features"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-amber-100 hover:bg-white/5 font-medium backdrop-blur-md transition-colors"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Glassmorphism mobile preview card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 opacity-60 blur-xl" />
                <div className="relative rounded-[2rem] bg-white/10 border border-white/15 backdrop-blur-2xl p-5 shadow-2xl flex flex-col items-center">
                  {/* Mock phone frame */}
                  <div className="w-48 h-80 rounded-[1.75rem] bg-slate-950/80 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-x-10 top-3 h-1.5 rounded-full bg-gray-600/80" />
                    <div className="absolute inset-0 pt-8 px-3">
                      <div className="flex items-center justify-between mb-3 text-[0.65rem] text-gray-300">
                        <span>With You Coffee</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      </div>
                      <div className="space-y-2 text-[0.7rem]">
                        <div className="rounded-xl bg-amber-500/10 border border-amber-400/40 px-3 py-2 flex items-center justify-between">
                          <span className="text-amber-100">Filter Coffee</span>
                          <span className="text-amber-300 font-semibold">₹25</span>
                        </div>
                        <div className="rounded-xl bg-amber-500/5 border border-white/10 px-3 py-2 flex items-center justify-between">
                          <span className="text-gray-100">Masala Tea</span>
                          <span className="text-gray-200 font-semibold">₹20</span>
                        </div>
                        <div className="rounded-xl bg-amber-500/5 border border-white/10 px-3 py-2 flex items-center justify-between">
                          <span className="text-gray-100">Rose Milk</span>
                          <span className="text-gray-200 font-semibold">₹35</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[0.65rem] text-gray-300">
                          <span>Delivery in 30 mins</span>
                          <span>UPI • Cash on Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.7rem] text-gray-200 text-center">
                    Preview of the upcoming With You Coffee mobile app interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section id="app-features" className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Download With You Coffee App?</h2>
            <p className="text-lg text-gray-600">Experience the convenience of ordering authentic beverages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Ordering</h3>
              <p className="text-gray-600">Order your favorite drinks in just a few taps. Save your preferences for even faster ordering.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Track your order in real-time from preparation to delivery. Know exactly when your drink will arrive.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exclusive Offers</h3>
              <p className="text-gray-600">Get access to app-only discounts, loyalty rewards, and special promotions.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Multiple payment options including UPI, cards, and digital wallets. All transactions are secure.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Experience</h3>
              <p className="text-gray-600">Get recommendations based on your preferences and order history.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Notifications</h3>
              <p className="text-gray-600">Get notified about order updates, new menu items, and special offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-app" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Download With You Coffee App</h2>
          <p className="text-lg text-gray-600 mb-8">Available on both iOS and Android platforms</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
            
            <a href="#" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h3>
            <p className="text-lg text-gray-600 mb-4">
              Our mobile app is currently in development and will be available soon on both iOS and Android platforms.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Notify Me When Available
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
