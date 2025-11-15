import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">Terms &amp; Conditions</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: August 2025</p>

          <div className="prose prose-invert max-w-none text-[15px] leading-relaxed space-y-4">
            <p>
              Welcome to J K Enterprises. By engaging in scrap collection, recycling services, or trading with us—whether directly, through our
              website, or by contacting us—you agree to comply with and be bound by these Terms &amp; Conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-6">1. General Use of Services</h2>
            <p>
              By using our services, you confirm that you are at least 18 years of age or acting on behalf of a business entity. Services must only
              be used for lawful purposes in compliance with waste management and environmental laws. We reserve the right to refuse service if
              fraudulent, unlawful, or unsafe practices are detected.
            </p>

            <h2 className="text-2xl font-semibold mt-6">2. Scrap Collection &amp; Transactions</h2>
            <p>
              All scrap collection, segregation, and trading is based on weight, grade, and material type. Prices are determined according to
              prevailing market rates, material condition, and quality verification. Once scrap is weighed, documented, and invoiced, the
              transaction is considered final.
            </p>

            <h2 className="text-2xl font-semibold mt-6">3. Payments</h2>
            <p>
              Payments for scrap transactions are made as per agreed terms, including immediate payment for small transactions or scheduled
              settlements for bulk agreements. Payments are accepted via bank transfer, UPI, or other secure digital methods. J K Enterprises does
              not store sensitive payment details; transactions are processed via secure gateways.
            </p>

            <h2 className="text-2xl font-semibold mt-6">4. Logistics &amp; Delivery</h2>
            <p>
              Scrap pickup and delivery schedules will be coordinated directly with clients. Customers must ensure clear access for
              loading/unloading at the collection site. Delivery timelines may vary based on location, logistics provider availability, and
              external conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-6">5. Returns &amp; Disputes</h2>
            <p>
              Due to the nature of scrap trading, returns are not accepted once materials have been verified, weighed, and invoiced. Disputes
              regarding weight, quality, or pricing must be raised immediately during the transaction and resolved on-site.
            </p>

            <h2 className="text-2xl font-semibold mt-6">6. Compliance &amp; Responsibility</h2>
            <p>
              All parties must comply with applicable environmental, safety, and waste management laws. J K Enterprises is not liable for improper
              segregation by suppliers that may affect value or acceptance.
            </p>

            <h2 className="text-2xl font-semibold mt-6">7. Intellectual Property</h2>
            <p>
              All logos, documents, images, and website content belonging to J K Enterprises are protected by intellectual property laws.
              Unauthorized use is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold mt-6">8. Limitation of Liability</h2>
            <p>
              J K Enterprises is not responsible for losses due to market price fluctuations of scrap materials. We are not liable for indirect,
              incidental, or consequential damages arising from transactions. Our liability, if any, is limited to the transaction value of the
              materials involved.
            </p>

            <h2 className="text-2xl font-semibold mt-6">9. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of India, and any disputes shall fall under the jurisdiction of the courts in
              Kancheepuram, Tamil Nadu.
            </p>

            <h2 className="text-2xl font-semibold mt-6">10. Contact Us</h2>
            <p>
              For questions or clarifications regarding these Terms &amp; Conditions, please contact J K Enterprises at Soroco House, Anna Nagar,
              Chennai, Tamil Nadu, Email: reach@cuptime.in, Phone: +91 915 916 1110.
            </p>

            <p className="mt-4 text-sm text-gray-400">© 2025 J K Enterprises. All Rights Reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
