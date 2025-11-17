import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Delivery() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">Shipping &amp; Delivery Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last Updated: August 2025</p>

          <div className="prose prose-invert max-w-none text-[15px] leading-relaxed space-y-4">
            <p>
              At J K Enterprises, we ensure that scrap materials and recyclable goods are collected, transported, and delivered in a safe, timely,
              and compliant manner. This Shipping &amp; Delivery Policy outlines our procedures for pickup, logistics, and bulk delivery.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Order Processing</h2>
            <p>
              Pickup and delivery are scheduled only after order confirmation and agreement on pricing/terms. Processing times vary depending on the
              type, volume, and segregation requirements of the scrap. For bulk/wholesale transactions, timelines are finalized in the sales
              contract or quotation.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Collection &amp; Pickup Services</h2>
            <p>
              Scrap collection is available for both individual suppliers and corporate clients. Customers must ensure clear site access for
              loading/unloading. Hazardous, restricted, or non-recyclable items will not be accepted during collection.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Delivery Coverage</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Local deliveries (Kancheepuram, Chennai &amp; nearby areas)</li>
              <li>Statewide deliveries across Tamil Nadu</li>
              <li>Pan-India &amp; export shipments for bulk buyers</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Packaging &amp; Handling</h2>
            <p>
              Scrap is transported using industrial-grade containers, trucks, or freight carriers to ensure safety and compliance. Segregated
              materials are handled separately to maintain quality standards, and bulk shipments are documented and sealed before transit.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Shipping Charges</h2>
            <p>
              Charges are based on location, distance, weight, volume, and category of scrap, as well as mode of logistics. All charges will be
              communicated in advance and included in the quotation or invoice.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Delays &amp; Exceptions</h2>
            <p>
              Deliveries may face delays due to transport strikes, road closures, natural calamities, customs clearance, or incomplete pickup/
              delivery details provided by the client. J K Enterprises will inform customers of any delays and provide revised schedules wherever
              possible.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Tracking &amp; Communication</h2>
            <p>
              Bulk clients and corporate partners receive dispatch updates and documentation. Delivery status may be communicated via phone, email,
              or WhatsApp. Clients are advised to verify delivery against the invoice/weight slip upon receipt.
            </p>

            <h2 className="text-2xl font-semibold mt-6">Need Assistance?</h2>
            <p>
              For logistics or delivery-related queries, please contact J K Enterprises at Soroco House, Anna Nagar, Chennai, Tamil Nadu,
              Email: reach@cuptime.in, Phone: +91 915 916 1110.
            </p>

            <p className="mt-4 text-sm text-gray-400">© 2025 J K Enterprises. All Rights Reserved.</p>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to Partner or Franchise with Us?</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                to="/franchise"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-center cursor-pointer"
              >
                Join as Franchisee
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center cursor-pointer"
              >
                Order for Your Business
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
