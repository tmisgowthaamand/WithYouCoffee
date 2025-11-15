import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { apiUrl } from '../config/api'

export default function About() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    mobile: '',
    company: '',
    email: '',
    message: ''
  })
  
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  })

  // Contact Information State - Easy to update
  const [contactInfo, setContactInfo] = useState({
    businessName: 'Cup Time',
    address: {
      line1: 'Soroco House,',
      line2: 'Anna Nagar,',
      line3: 'Chennai, Tamil Nadu',
      pincode: ''
    },
    emails: {
      franchise: 'franchise@cuptime.in',
      general: 'reach@cuptime.in'
    },
    phone: '+91 915 916 1110',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2123456789!2d80.2123456!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sSoroco%20House!5e0!3m2!1sen!2sin!4v1699876543210!5m2!1sen!2sin'
  })

  // Function to update contact information
  const updateContactInfo = (newInfo) => {
    setContactInfo(prev => ({
      ...prev,
      ...newInfo
    }))
  }

  // Example functions to update specific contact details
  const updateAddress = (newAddress) => {
    setContactInfo(prev => ({
      ...prev,
      address: { ...prev.address, ...newAddress }
    }))
  }

  const updateEmails = (newEmails) => {
    setContactInfo(prev => ({
      ...prev,
      emails: { ...prev.emails, ...newEmails }
    }))
  }

  // Example usage (you can call these functions when needed):
  // updateAddress({ line1: 'New Building Name,', line2: 'New Street,', line3: 'New City, State', pincode: '123456' })
  // updateEmails({ franchise: 'newfranchise@cuptime.in', general: 'newcontact@cuptime.in' })
  // updateContactInfo({ phone: '+91 987 654 3210', businessName: 'New Business Name' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' })

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.email) {
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all required fields (Name, Mobile, Email)'
      })
      return
    }

    try {
      // API URL - change this to your production URL when deploying
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inquiryType: formData.inquiryType,
          name: formData.name,
          mobile: formData.mobile,
          company: formData.company,
          email: formData.email,
          message: formData.message
        })
      })

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        // Log success for debugging
        console.log('Contact Form Submitted Successfully:', {
          id: result.id,
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          timestamp: new Date().toISOString()
        })

        setSubmitStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        })

        // Reset form after successful submission
        setFormData({
          inquiryType: '',
          name: '',
          mobile: '',
          company: '',
          email: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Failed to submit form')
      }

    } catch (error) {
      console.error('Contact form submission error:', error)
      
      let errorMessage = 'Sorry, there was an error sending your message. Please try again.'
      
      // Provide more specific error messages
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to server. Please check if the backend is running on port 4000.'
      } else if (error.message.includes('HTTP error')) {
        errorMessage = 'Server error occurred. Please try again later.'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage
      })
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="w-full bg-black flex justify-center items-center overflow-hidden" style={{aspectRatio: '16/9', maxHeight: '80vh'}}>
  <video src="/images/intro video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" style={{aspectRatio:'16/9',maxHeight:'80vh'}} />
</div>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Left: Text */}
  <div>
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
    <p className="text-lg text-gray-600 mb-4">


    </p>
    <p className="text-lg text-gray-600 mb-4">
      Our founders, passionate about traditional recipes and modern convenience, created a unique blend of heritage and innovation. From our signature Filter Coffee to the wellness-focused Karupatti Sukku Coffee, every drink tells a story of tradition.
    </p>
    <p className="text-lg text-gray-600">
      Today, we serve thousands of customers across multiple cities, maintaining the same commitment to quality, authenticity, and customer satisfaction that started our journey.
    </p>
  </div>
  {/* Right: GIF */}
  <div className="flex justify-center items-center">
    <img src="/images/coffee_pouring.gif" alt="Coffee Pouring" className="max-w-md w-full h-auto rounded-2xl shadow-xl" />
  </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-20 bg-gray-800 text-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-2">Our Journey, One Cup at a Time</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From the heart of Madurai to your business doorstep — here’s how our passion for traditional beverages became a brewing movement.
          </p>
          <div className="relative mb-16">
            <div className="absolute left-0 right-0 top-7 h-0.5 bg-gray-600 opacity-50 z-0" style={{zIndex: 0}}></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {/* 2018 */}
              <div className="flex flex-col items-center mb-10 md:mb-0">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2018</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2018 – The First Spark</div>
                  <div className="text-sm text-gray-300">The idea was born in the heritage-rich streets of Madurai — a city known for its taste, culture and warmth. We envisioned bringing authentic local beverages like Kaunagiri Coffee, Panangkilangu Paal, and Sukku Kaapi back into everyday life.</div>
                </div>
              </div>
              {/* 2019 */}
              <div className="flex flex-col items-center mb-10 md:mb-0">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2019</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2019 – Groundwork & Recipe Trials</div>
                  <div className="text-sm text-gray-300">Collaboration with local traditional recipe makers, documenting authentic preparation methods that preserved authentic taste without compromising hygiene and consistency.</div>
                </div>
              </div>
              {/* 2020 */}
              <div className="flex flex-col items-center mb-10 md:mb-0">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2020</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2020 – Officially Brewed: Cup Time Launched</div>
                  <div className="text-sm text-gray-300">We launched Cup Time with one goal: serve businesses fresh, hot, preservative-free beverages in a sustainable and scalable way — prepared with love, not machines.</div>
                </div>
              </div>
              {/* 2021 */}
              <div className="flex flex-col items-center mb-10 md:mb-0">
                <div className="bg-red-500 text-white font-bold px-6 py-2 rounded-full mb-2">2021</div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 mb-4"></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-4 shadow-md w-full text-left">
                  <div className="font-bold mb-1">2021 – First B2B Deliveries</div>
                  <div className="text-sm text-gray-300">Offices, hospitals, and educational institutions started ordering and sipping our products — quickly making Cup Time a part of their morning refreshments.</div>
                </div>
              </div>
              {/* 2022 */}
              <div className="flex flex-col items-center mb-10 md:mb-0">
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

      {/* Serving More Than Beverages Section */}
      <section className="py-16 bg-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">Serving More Than Beverages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Award Won */}
            <div className="bg-gray-100 rounded-xl shadow-md flex flex-col items-center py-8">
              <span className="text-3xl text-red-500 mb-2">🏆</span>
              <div className="text-2xl font-bold text-gray-800 mb-1">5</div>
              <div className="text-xs text-gray-500">Award Won</div>
            </div>
            {/* Trusted by companies */}
            <div className="bg-gray-100 rounded-xl shadow-md flex flex-col items-center py-8">
              <span className="text-3xl text-red-500 mb-2">🛡️</span>
              <div className="text-2xl font-bold text-gray-800 mb-1">200+</div>
              <div className="text-xs text-gray-500">Trusted by companies</div>
            </div>
            {/* Employees tracked */}
            <div className="bg-gray-100 rounded-xl shadow-md flex flex-col items-center py-8">
              <span className="text-3xl text-red-500 mb-2">👥</span>
              <div className="text-2xl font-bold text-gray-800 mb-1">10,000+</div>
              <div className="text-xs text-gray-500">Employees tracked</div>
            </div>
            {/* Client satisfaction */}
            <div className="bg-gray-100 rounded-xl shadow-md flex flex-col items-center py-8">
              <span className="text-3xl text-red-500 mb-2">😊</span>
              <div className="text-2xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-xs text-gray-500">Client satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bringing Tradition to Every Workplace Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">Bringing Tradition to Every Workplace</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We deliver only 2 times a day, Morning & Evening. We serve a wide range of industries with fresh, authentic beverages — brewed the Madurai way. Wherever there are teams that need energy and warmth, Cup Time delivers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="flex justify-center items-center self-center">
  <img src="/images/girl parnter.png" alt="Cup Time Delivery" className="max-w-lg w-full h-auto rounded-2xl shadow-xl" />
</div>
            {/* Right: Features */}
            <div className="flex flex-col justify-center h-full self-center">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 mt-1">💻</span>
                <div>
                  <div className="font-bold text-gray-900">IT & Corporate Offices</div>
                  <div className="text-sm text-gray-600">Supporting high-performing teams with time-slotted, hot beverage delivery — straight to desks.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 mt-1">🏪</span>
                <div>
                  <div className="font-bold text-gray-900">Retail Shops & Marketplaces</div>
                  <div className="text-sm text-gray-600">Helping retailers stay refreshed during busy hours with on-the-go beverages.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 mt-1">🎓</span>
                <div>
                  <div className="font-bold text-gray-900">Colleges & Schools</div>
                  <div className="text-sm text-gray-600">Trusted by educators and students alike — for those much-needed refreshment breaks.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 mt-1">🏥</span>
                <div>
                  <div className="font-bold text-gray-900">Hospitals</div>
                  <div className="text-sm text-gray-600">Supplying healthy, comforting drinks for caregivers, patients, and healthcare staff 24/7.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-400 mt-1">🏭</span>
                <div>
                  <div className="font-bold text-gray-900">Manufacturing Units</div>
                  <div className="text-sm text-gray-600">Fueling factory floors with strong filter coffee and traditional drinks that keep productivity flowing.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center bg-red-600 rounded-xl px-6 py-4 relative overflow-hidden">
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-0">Want to Partner or Franchisee with Us?</h3>
            <div className="flex gap-2">
              <button className="bg-gray-800 text-white font-semibold px-4 py-2 rounded shadow hover:bg-gray-700 transition">Join as Franchisee</button>
              <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition">Order for Your Business</button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
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
                <span className="text-white text-2xl font-bold">PK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Priya Kumar</h3>
              <p className="text-amber-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600 text-sm">Expert in supply chain management and quality control, ensuring consistency across all outlets.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">AM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Arjun Menon</h3>
              <p className="text-amber-600 font-medium mb-2">Head of Technology</p>
              <p className="text-gray-600 text-sm">Tech innovator focused on creating seamless digital experiences for our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loved by Thousands Section */}
      <section className="py-16 testimonials-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-textRevealStagger animate-modernGlow">Loved by Thousands Across Industries</h2>
            <p className="text-lg text-gray-600 animate-slideInScale stagger-2">We proudly collaborate with visionary investors and reputed companies who believe in bringing traditional flavors to modern workplaces.</p>
          </div>

          <div className="relative overflow-hidden perspective-3d">
            <div className="flex animate-scroll space-x-6">
              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialGlow animate-testimonialCardEntrance stagger-1">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-2">
                  Everyday me and my staffs boost up with cup time tea Thank you so much for your hygienic tea and perfect time delivery
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-3">
                  <div className="font-bold text-gray-900 text-sm">Hari Rajarathu</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialShimmer animate-testimonialCardEntrance stagger-2">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-3">
                  We purchase coffee and tea for our office. Prompt delivery and excellent taste every day. Highly recommended for your daily dose of coffee/tea.
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-4">
                  <div className="font-bold text-gray-900 text-sm">Swatsha Prasanna</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialPulse animate-testimonialCardEntrance stagger-3">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-4">
                  Sweetly savoury, rich and deep. Dark in aroma and crisp very syrupy mouthfeel. Notes of coffee blended with undertones of taste resonate in the finish.
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-5">
                  <div className="font-bold text-gray-900 text-sm">Dinesh kumar</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialBorderGlow animate-testimonialCardEntrance stagger-4">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-5">
                  Best Masala Tea and excellent Company and Fresh undertones of taste resonate in the finish.
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-6">
                  <div className="font-bold text-gray-900 text-sm">Dawood Farhaan</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialGlow animate-testimonialCardEntrance stagger-5">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-6">
                  Everyday me and my staffs boost up with cup time tea Thank you so much for your hygienic tea and perfect time delivery
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-7">
                  <div className="font-bold text-gray-900 text-sm">Hari Rajarathu</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 testimonial-card animate-testimonialFloat animate-testimonialShimmer animate-testimonialCardEntrance stagger-6">
                <div className="testimonial-quote text-red-400 text-4xl mb-4 animate-quoteFloat">"</div>
                <p className="testimonial-text text-gray-600 text-sm mb-4 italic animate-testimonialTextReveal stagger-7">
                  We purchase coffee and tea for our office. Prompt delivery and excellent taste every day. Highly recommended for your daily dose of coffee/tea.
                </p>
                <div className="flex items-center gap-2">
                  <div className="testimonial-stars flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <div className="testimonial-author mt-3 animate-testimonialTextReveal stagger-8">
                  <div className="font-bold text-gray-900 text-sm">Swatsha Prasanna</div>
                  <div className="text-gray-500 text-xs">Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-textRevealStagger">Reach Out to Cup Time</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg animate-slideInScale">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">How can we help you?</h3>
              
              {/* Radio Button Options */}
              <div className="flex flex-wrap gap-4 mb-6">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="inquiryType" 
                    value="price" 
                    checked={formData.inquiryType === 'price'}
                    onChange={handleInputChange}
                    className="mr-2 text-red-500" 
                  />
                  <span className="text-sm text-gray-700">Price</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="inquiryType" 
                    value="franchise" 
                    checked={formData.inquiryType === 'franchise'}
                    onChange={handleInputChange}
                    className="mr-2 text-red-500" 
                  />
                  <span className="text-sm text-gray-700">Franchise</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="inquiryType" 
                    value="services" 
                    checked={formData.inquiryType === 'services'}
                    onChange={handleInputChange}
                    className="mr-2 text-red-500" 
                  />
                  <span className="text-sm text-gray-700">Services we offer</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="inquiryType" 
                    value="callback" 
                    checked={formData.inquiryType === 'callback'}
                    onChange={handleInputChange}
                    className="mr-2 text-red-500" 
                  />
                  <span className="text-sm text-gray-700">Call Back</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="inquiryType" 
                    value="others" 
                    checked={formData.inquiryType === 'others'}
                    onChange={handleInputChange}
                    className="mr-2 text-red-500" 
                  />
                  <span className="text-sm text-gray-700">Others</span>
                </label>
              </div>

              {/* Status Messages */}
              {(submitStatus.isSuccess || submitStatus.isError) && (
                <div className={`p-4 rounded-lg mb-4 ${
                  submitStatus.isSuccess 
                    ? 'bg-green-100 border border-green-400 text-green-700' 
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={submitStatus.isSubmitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors magnetic-button ${
                    submitStatus.isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  {submitStatus.isSubmitting ? 'Sending...' : 'Contact Cuptime'}
                </button>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl p-4 shadow-lg animate-slideInScale stagger-2">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={contactInfo.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${contactInfo.businessName} Location`}
                  ></iframe>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-lg animate-slideInScale stagger-3">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-red-500 mr-2">📍</span>
                  Contact Us
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>Address:</strong><br />
                    {contactInfo.address.line1}<br />
                    {contactInfo.address.line2}<br />
                    {contactInfo.address.line3}
                    {contactInfo.address.pincode && <><br />{contactInfo.address.pincode}</>}
                  </p>
                  <p>
                    <strong>For Franchise Enquiry:</strong><br />
                    <a href={`mailto:${contactInfo.emails.franchise}`} className="text-red-500 hover:text-red-600">
                      {contactInfo.emails.franchise}
                    </a>
                  </p>
                  <p>
                    <strong>For order and other Enquiry:</strong><br />
                    <a href={`mailto:${contactInfo.emails.general}`} className="text-red-500 hover:text-red-600">
                      {contactInfo.emails.general}
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-red-500 hover:text-red-600">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Chat Widget */}
              <div className="bg-green-500 text-white rounded-2xl p-4 shadow-lg animate-slideInScale stagger-4 hover:bg-green-600 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold">We're Online!</h5>
                    <p className="text-sm opacity-90">How may I help you today?</p>
                  </div>
                  <div className="text-2xl">💬</div>
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
