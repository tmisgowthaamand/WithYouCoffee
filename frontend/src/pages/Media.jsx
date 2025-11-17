import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Media() {
  const pressReleases = [
    {
      date: 'November 15, 2025',
      title: 'With You Coffee Launches Revolutionary Time-Slotted Delivery System',
      description: 'Introducing flexible delivery slots for corporate offices. Now available in Chennai and expanding to major cities.',
      category: 'Product Launch'
    },
    {
      date: 'October 28, 2025',
      title: 'With You Coffee Wins Best Innovation in F&B at National Startup Awards',
      description: 'Recognized for innovative approach to coffee delivery and subscription services.',
      category: 'Awards'
    },
    {
      date: 'October 10, 2025',
      title: 'Franchise Opportunities Now Open Across India',
      description: 'With You Coffee invites entrepreneurs to join our growing network. Comprehensive support and training provided.',
      category: 'Franchise'
    },
    {
      date: 'September 20, 2025',
      title: 'Mobile App Downloads Cross 100,000 Mark',
      description: 'Celebrating milestone with exclusive in-app offers and loyalty rewards for our community.',
      category: 'Milestone'
    }
  ]

  const mediaKit = [
    {
      icon: '📸',
      title: 'High-Resolution Images',
      description: 'Professional product photography and brand assets available for media use'
    },
    {
      icon: '📄',
      title: 'Brand Guidelines',
      description: 'Complete brand guidelines and logo usage specifications'
    },
    {
      icon: '🎬',
      title: 'Video Content',
      description: 'Behind-the-scenes footage and promotional videos'
    },
    {
      icon: '📊',
      title: 'Company Statistics',
      description: 'Key metrics, growth data, and company information'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                Media & Press
              </span>
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
                Center
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
              Latest news, press releases, and media resources about With You Coffee
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Press Releases</h2>
            <p className="text-lg text-gray-600">Stay updated with our latest news and announcements</p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-3">
                      {release.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{release.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm whitespace-nowrap">{release.date}</p>
                </div>
                <p className="text-gray-600 mb-4">{release.description}</p>
                <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Read Full Release →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-lg text-gray-600">Download our brand assets and media resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Media */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100/80">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=media@withyoucoffee.in" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-medium">
                    media@withyoucoffee.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+919159161110" className="text-amber-600 hover:text-amber-700 font-medium">
                    +91 915 916 1110
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl">🏢</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">Soroco House, Anna Nagar, Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">For Media Requests</h3>
              <p className="text-gray-600">We welcome media inquiries, interview requests, and partnership opportunities. Please contact our media team for more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for latest updates and press releases</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
