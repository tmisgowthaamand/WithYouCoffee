import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Refund() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">Cancellation &amp; Refund Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: August 2025</p>

          <div className="prose prose-invert max-w-none text-[15px] leading-relaxed space-y-4">
            <p>
              At J K Enterprises, we prioritize clarity and fairness in all recycling and trading transactions. Since we deal with scrap
              collection, segregation, and bulk trading, cancellations and refunds must follow specific conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Order Cancellations</h2>
            <p>
              Retail/small suppliers may request cancellations within 2 hours of scheduling pickup, provided the collection has not started.
              Bulk/corporate clients are subject to prior agreements or contracts. Once logistics arrangements or material verification has begun,
              cancellations may not be accepted.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Returns &amp; Disputes</h2>
            <p>
              Disputes are accepted only in limited cases such as incorrect material category recorded, weight discrepancies identified on-site, or
              documentation errors. Disputes must be raised immediately during the transaction.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scrap materials once collected and processed</li>
              <li>Hazardous or restricted waste rejected at collection site</li>
              <li>Materials altered, mixed, or contaminated after pickup</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Refunds</h2>
            <p>
              If an error is verified (e.g., overcharging or weight mismatch), refunds will be processed within 3–5 business days of confirmation via
              the original payment method. Depending on the provider, refunds may take 5–10 business days to reflect.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Exceptions</h2>
            <p>
              Refunds or cancellations will not apply in cases of price fluctuations after transaction finalization, delays due to external
              conditions, or disputes raised without supporting evidence.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Need Assistance?</h2>
            <p>
              For cancellations, disputes, or refund-related queries, please contact J K Enterprises at Soroco House, Anna Nagar, Chennai,
              Tamil Nadu, Email: reach@cuptime.in, Phone: +91 915 916 1110.
            </p>

            <p className="mt-4 text-sm text-gray-400">© 2025 J K Enterprises. All Rights Reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
