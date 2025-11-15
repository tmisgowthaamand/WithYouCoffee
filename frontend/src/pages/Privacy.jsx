import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl p-8 md:p-10 relative z-10">
          <div className="mb-6 relative z-20 pointer-events-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="text-lg">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last Revised: August 2025</p>

          <div className="prose prose-invert max-w-none text-[15px] leading-relaxed space-y-4">
            <p><strong>Your Privacy, Our Responsibility</strong></p>
            <p>
              At J K Enterprises, we value your trust and are committed to protecting the personal and business information you share with us.
              Whether you are a supplier, buyer, or recycling partner, we ensure that your data is handled with transparency, security, and
              compliance—aligned with the Indian IT Act and internationally recognized data protection standards such as GDPR.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and the rights you have regarding your data.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
            <p>When you engage with our business—through inquiries, scrap collection requests, or recycling transactions—we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name / Business Name</li>
              <li>Email Address &amp; Phone Number</li>
              <li>Business &amp; Operational Addresses</li>
              <li>Transaction &amp; Payment Details (via secure third-party gateways)</li>
              <li>Material Categories (scrap type, weight, grade, and value)</li>
              <li>Order/Service History</li>
              <li>Device &amp; Browser Information (if using our website)</li>
              <li>Cookies and Tracking Data (for analytics and website performance)</li>
            </ul>
            <p>We collect only the data required for business transactions, compliance, and service improvement.</p>

            <h2 className="text-2xl font-semibold mt-6">Why We Collect Your Information</h2>
            <p>Your information may be used for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing and fulfilling scrap collection, recycling, or trading orders</li>
              <li>Communicating pickup schedules, invoices, and delivery updates</li>
              <li>Providing customer and supplier support</li>
              <li>Ensuring compliance with environmental, trade, and waste management regulations</li>
              <li>Maintaining proper accounting and business records</li>
              <li>Improving our recycling operations and digital platforms</li>
              <li>Sending optional updates or promotional offers (only if you opt in)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">How We Protect Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>SSL Encryption for online communication and transactions</li>
              <li>Secure, PCI-compliant payment gateways (we do not store sensitive payment data)</li>
              <li>Server security with firewalls, restricted access, and routine audits</li>
              <li>Confidential access limited to authorized personnel only</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Your Rights &amp; Choices</h2>
            <p>You are in control of your data. You can:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to the information we hold about you</li>
              <li>Ask for corrections or updates to inaccurate details</li>
              <li>Request deletion of your personal data (subject to legal obligations)</li>
              <li>Withdraw consent for promotional communications</li>
              <li>Raise a privacy concern or complaint directly with us</li>
            </ul>
            <p>We commit to responding to all valid requests within 30 days.</p>

            <h2 className="text-2xl font-semibold mt-6">Third-Party Sharing</h2>
            <p>
              We do not sell or rent your personal data. Information is shared only with logistics partners, payment providers, and regulatory
              authorities where required by law.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
            <p>If you have any questions, requests, or concerns about this Privacy Policy, please contact:</p>
            <p>
              J K Enterprises<br />
              Soroco House, Anna Nagar, Chennai, Tamil Nadu<br />
              Email: reach@cuptime.in<br />
              Phone: +91 915 916 1110
            </p>

            <p className="mt-4 text-sm text-gray-400">
              © 2025 J K Enterprises. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
