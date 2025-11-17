import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#151a23] text-gray-300 border-t border-white/10 pt-12 pb-4 px-4 md:px-0">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* About Cup Time */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 tracking-wide">About Cup Time</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="/media" className="hover:text-amber-400 transition-colors">Media & Press</a></li>
            </ul>
          </div>

          {/* Join Us / Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 tracking-wide">Join Us / Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/events" className="hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="/mobile" className="hover:text-amber-400 transition-colors">App Download</a></li>
              <li><a href="/blog" className="hover:text-amber-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 tracking-wide">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-amber-400 transition-colors">Our Products</a></li>
              <li><a href="/mobile" className="hover:text-amber-400 transition-colors">Mobile App</a></li>
              <li><a href="/franchise" className="hover:text-amber-400 transition-colors">Franchisee Opportunities</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-amber-400 transition-colors">Cancellation & Refund</Link></li>
              <li><Link to="/delivery" className="hover:text-amber-400 transition-colors">Delivery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=reach@withyoucoffee.in" target="_blank" rel="noopener noreferrer" className="no-underline">reach@withyoucoffee.in</a>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919159161110" target="_blank" rel="noopener noreferrer" className="no-underline">+91 915 916 1110</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Soroco+House,+Anna+Nagar,+Chennai,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Soroco House, Anna Nagar, Chennai, Tamil Nadu
                </a>
              </li>
            </ul>
          </div>

          {/* Office Solutions */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Office Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/time-slotted-deliveries" className="hover:text-amber-400 transition-colors">Time-slotted deliveries</Link></li>
              <li><Link to="/insulated-packaging" className="hover:text-amber-400 transition-colors">Insulated packaging</Link></li>
              <li><Link to="/subscription-plans" className="hover:text-amber-400 transition-colors">Subscription plans</Link></li>
              <li><Link to="/bulk-orders" className="hover:text-amber-400 transition-colors">Bulk orders</Link></li>
              <li><Link to="/corporate-gifting" className="hover:text-amber-400 transition-colors">Corporate gifting</Link></li>
            </ul>
          </div>

          {/* Get the App */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Get the App</h4>
            <p className="text-sm text-gray-400">Download our app for exclusive deals and faster ordering.</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-105 group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold text-white">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-105 group">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-black/40 shadow-md">
                <video
                  src="/images/two_cups_logo_glow.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Cup Time. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              <Link to="/delivery" className="hover:text-amber-400 transition-colors">Shipping &amp; Delivery</Link>
              <Link to="/refund" className="hover:text-amber-400 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
