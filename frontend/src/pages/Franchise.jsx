import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Franchise() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Spline-style gradient + glass card */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center">
            {/* Text block */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                  Join With You Coffee
                </span>
                <span
                  className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger"
                  style={{ animationDelay: '0.2s' }}
                >
                  Franchise Network
                </span>
              </h1>
              <p
                className="text-lg text-gray-300 max-w-2xl mt-6 mx-auto lg:mx-0 animate-textStagger"
                style={{ animationDelay: '0.4s' }}
              >
                Partner with us to bring authentic South Indian beverages to your community.
                Low investment, high returns, complete support.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#franchise-form"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/40 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Get Franchise Brochure
                </a>
                <a
                  href="#franchise-benefits"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-white/20 text-amber-100 hover:bg-white/5 font-medium backdrop-blur-md transition-colors"
                >
                  View Benefits
                </a>
              </div>
            </div>

            {/* Glassmorphism stats card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 opacity-60 blur-xl" />
                <div className="relative rounded-3xl bg-white/10 border border-white/15 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">Franchise Snapshot</p>
                      <p className="text-sm text-gray-200 mt-1">With You Coffee Partner Network</p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/90 flex items-center justify-center shadow-lg shadow-amber-500/60">
                      <span className="text-white text-sm font-bold">CT</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-gray-100 text-xs">
                    <div className="rounded-2xl bg-white/5 border border-white/10 py-3">
                      <p className="text-[0.65rem] uppercase tracking-wide text-amber-200/80">Avg. ROI</p>
                      <p className="mt-1 text-lg font-bold text-amber-300">18-24</p>
                      <p className="text-[0.7rem] text-gray-300">months</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 py-3">
                      <p className="text-[0.65rem] uppercase tracking-wide text-amber-200/80">Support</p>
                      <p className="mt-1 text-lg font-bold text-amber-300">360°</p>
                      <p className="text-[0.7rem] text-gray-300">training</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 py-3">
                      <p className="text-[0.65rem] uppercase tracking-wide text-amber-200/80">Menu</p>
                      <p className="mt-1 text-lg font-bold text-amber-300">25+</p>
                      <p className="text-[0.7rem] text-gray-300">SKUs</p>
                    </div>
                  </div>

                  <div className="mt-5 text-[0.7rem] text-gray-300 flex items-center justify-between">
                    <span>Designed for offices, hospitals & campuses</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-gray-200">Slots open</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Benefits */}
      <section id="franchise-benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose With You Coffee Franchise?</h2>
            <p className="text-lg text-gray-600">Join India's fastest-growing beverage franchise network</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Low Investment</h3>
              <p className="text-gray-600">Start your franchise with minimal investment and maximum support from our team.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Business Model</h3>
              <p className="text-gray-600">Our tested business model ensures consistent profitability and growth.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Support</h3>
              <p className="text-gray-600">From setup to operations, we provide end-to-end support for your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="franchise-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
            <p className="text-lg text-gray-600">Fill out the form below and our team will contact you within 24 hours.</p>
          </div>

          <form className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Budget</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>Select your budget range</option>
                  <option>₹5-10 Lakhs</option>
                  <option>₹10-20 Lakhs</option>
                  <option>₹20-50 Lakhs</option>
                  <option>₹50+ Lakhs</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Submit Franchise Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Cup Time Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Choose With You Coffee?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At With You Coffee, we're not just brewing beverages — we're brewing business success. Here's why entrepreneurs and local partners across Tamil Nadu trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Features Left */}
  <div className="space-y-8">
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-xl">🏛️</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Authentic Taste, Rooted in Tradition</h3>
        <p className="text-gray-600 text-sm">Our beverages are made using time-honored recipes from Madurai — no chemicals, no preservatives, only natural goodness.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-xl">📈</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">High Demand, Everyday Needs</h3>
        <p className="text-gray-600 text-sm">Offices, hospitals, schools, and retail shops need consistent refreshments — so you meet that demand with every cup served.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-xl">💰</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Low Investment, High Potential</h3>
        <p className="text-gray-600 text-sm">With a compact kitchen setup and our full support, you can start small and grow fast.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-xl">💳</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Royalty Charges</h3>
        <p className="text-gray-600 text-sm">A royalty fee is applicable, calculated as a percentage of your earnings.</p>
      </div>
    </div>
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-gray-600 text-xl">🎓</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Full Training & Support</h3>
        <p className="text-gray-600 text-sm">From recipe preparation to delivery management, we guide you every step of the way.</p>
      </div>
    </div>
    <div className="mt-8">
      <button className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors">
        Become a Franchisee
      </button>
    </div>
  </div>
  {/* Image Right */}
  <div className="flex justify-center">
    <div className="relative">
      <img 
        src="/images/parnter 1.png" 
        alt="Cup Time Delivery Partner" 
        className="w-full max-w-lg h-auto object-cover rounded-2xl"
      />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Timeline Section - Our Journey, One Cup at a Time */}
      <section className="py-20 bg-gray-800 text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2">Our Journey, One Cup at a Time</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From the heart of Madurai to your business doorstep — here’s how our passion for traditional beverages became a brewing movement.
          </p>
          <div className="relative mb-16">
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-gray-600 opacity-50 z-0" style={{zIndex: 0}}></div>
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {/* 2018 */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2018</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2018 – The First Spark</div>
                  <div className="text-sm text-gray-300">The idea was born in the heritage-rich streets of Madurai — a city known for its taste, culture and warmth. We envisioned bringing authentic local beverages like Kaunagiri Coffee, Panangkilangu Paal, and Sukku Kaapi back into everyday life.</div>
                </div>
              </div>
              {/* 2019 */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2019</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2019 – Groundwork & Recipe Trials</div>
                  <div className="text-sm text-gray-300">Collaboration with local traditional recipe makers, documenting authentic preparation methods that preserved authentic taste without compromising hygiene and consistency.</div>
                </div>
              </div>
              {/* 2020 */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2020</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2020 – Officially Brewed: Cup Time Launched</div>
                  <div className="text-sm text-gray-300">We launched Cup Time with one goal: serve businesses fresh, hot, preservative-free beverages in a sustainable and scalable way — prepared with love, not machines.</div>
                </div>
              </div>
              {/* 2021 */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2021</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2021 – First B2B Deliveries</div>
                  <div className="text-sm text-gray-300">Offices, hospitals, and educational institutions started ordering and sipping our products — quickly making Cup Time a part of their morning refreshments.</div>
                </div>
              </div>
              {/* 2022 */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2022</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2022 – Franchisee Model Introduced</div>
                  <div className="text-sm text-gray-300">Our Franchisee (Franchisee Cup Time-Operated) model helped local entrepreneurs to start their own Cup Time kitchen, with products overseen by us, but prepared by them.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Franchisee Partner Image Section */}
      
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
                  Best Masala Tea and Filter Coffee Servicing Company and Easily Ordered with the App.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Deepak Parmar</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Tastes are Good, especially with Masala Tea.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Hariharan K</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Nice and good taste, fresh tea and coffee and delivery on time. Useful for my staff for anytime refreshments.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">SRINI Madurai</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Good in service and Cup time taste is very good and excellent.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Customer</div>
                  <div className="text-gray-500 text-xs">Verified Review</div>
                </div>
              </div>

              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Best Masala Tea and Filter Coffee Servicing Company and Easily Ordered with the App.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Deepak Parmar</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Tastes are Good, especially with Masala Tea.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Hariharan K</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Nice and good taste, fresh tea and coffee and delivery on time. Useful for my staff for anytime refreshments.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">SRINI Madurai</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchisee Partner Image Section */}
      
      {/* Final Testimonials Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from successful franchisees who have built thriving businesses with With You Coffee.
            </p>
          </div>

          {/* Scrolling Testimonials */}
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Starting a With You Coffee franchise was the best business decision I made. The support team guided me through every step, and now I'm serving 50+ offices daily.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">RK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Rajesh Kumar</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The traditional recipes and quality standards of With You Coffee helped me build a loyal customer base. My monthly revenue has grown 300% in just 8 months.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">PS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Priya Sharma</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  With You Coffee's training program and ongoing support made it easy to maintain quality. My customers always compliment the authentic taste of our beverages.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Arjun Menon</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The low investment and high returns model of With You Coffee is perfect for entrepreneurs. I recovered my investment in just 6 months and now expanding to a second location.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Suresh Krishnan</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>

              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Starting a With You Coffee franchise was the best business decision I made. The support team guided me through every step, and now I'm serving 50+ offices daily.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">RK</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Rajesh Kumar</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                <div className="text-red-500 text-2xl mb-4">"</div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The traditional recipes and quality standards of With You Coffee helped me build a loyal customer base. My monthly revenue has grown 300% in just 8 months.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">PS</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Priya Sharma</div>
                    <div className="text-gray-500 text-xs">Franchisee Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind With You Coffee</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">RS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Rajesh Sharma</h3>
              <p className="text-amber-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">20+ years in F&B industry, passionate about bringing authentic flavors to modern consumers.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">PM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Menon</h3>
              <p className="text-amber-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">Expert in supply chain management and quality control, ensuring every cup meets our standards.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Arjun Kumar</h3>
              <p className="text-amber-600 font-medium mb-2">Franchise Director</p>
              <p className="text-gray-600 text-sm">Dedicated to supporting our franchise partners with training, guidance, and business growth strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
