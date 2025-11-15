import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Spline-style gradient + glass contact card */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-40 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center">
            {/* Text block */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                  Contact
                </span>
                <span
                  className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger"
                  style={{ animationDelay: '0.2s' }}
                >
                  With You Coffee
                </span>
              </h1>
              <p
                className="text-lg text-gray-300 max-w-2xl mt-6 mx-auto lg:mx-0 animate-textStagger"
                style={{ animationDelay: '0.4s' }}
              >
                We'd love to hear from you. Get in touch with our team for any questions, feedback, or support.
              </p>
            </div>

            {/* Glassmorphism contact summary card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 opacity-60 blur-xl" />
                <div className="relative rounded-3xl bg-white/10 border border-white/15 backdrop-blur-2xl p-6 shadow-2xl text-gray-100 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80 mb-3">Reach Us</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/90 flex items-center justify-center text-white text-sm">📍</div>
                      <div>
                        <p className="text-xs text-gray-300">Head Office</p>
                        <p className="text-sm font-medium text-gray-100">Soroco House, Anna Nagar, Chennai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/90 flex items-center justify-center text-white text-sm">📞</div>
                      <div>
                        <p className="text-xs text-gray-300">Phone & WhatsApp</p>
                        <p className="text-sm font-medium text-gray-100">+91 915 916 1110</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/90 flex items-center justify-center text-white text-sm">✉️</div>
                      <div>
                        <p className="text-xs text-gray-300">Email</p>
                        <p className="text-sm font-medium text-gray-100">reach@cuptime.in</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-[0.7rem] text-gray-300 flex items-center justify-between">
                    <span>Typical response within 24 hours</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-gray-200">We are online</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Franchise Information</option>
                    <option>Technical Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-6 shadow-md border border-orange-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Head Office</h3>
                    <p className="text-gray-600">Soroco House</p>
                    <p className="text-gray-600">Anna Nagar, Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-6 shadow-md border border-orange-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Phone Numbers</h3>
                    <p className="text-gray-600">Customer Support: +91 915 916 1110</p>
                    <p className="text-gray-600">Franchise Inquiry: +91 915 916 1110</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-6 shadow-md border border-orange-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email Addresses</h3>
                    <p className="text-gray-600">General: reach@cuptime.in</p>
                    <p className="text-gray-600">Support: reach@cuptime.in</p>
                    <p className="text-gray-600">Franchise: franchise@cuptime.in</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    <span className="text-sm font-bold">📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <span className="text-sm font-bold">🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <span className="text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
