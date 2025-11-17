import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SubscriptionPlans() {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: ['5 deliveries/month', 'Standard packaging', 'Email support', 'Flexible cancellation']
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: '/month',
      features: ['15 deliveries/month', 'Premium packaging', 'Priority support', '10% discount', 'Flexible cancellation'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: ['Unlimited deliveries', 'Custom packaging', '24/7 support', 'Dedicated account manager', 'Flexible terms']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 gradient-mesh animate-gradientMesh opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger">
                Subscription
              </span>
              <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger" style={{animationDelay: '0.2s'}}>
                Plans
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 animate-textStagger" style={{animationDelay: '0.4s'}}>
              Choose the perfect plan for your office. Save up to 20% with our flexible subscription options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl scale-105'
                    : 'bg-gradient-to-br from-white via-white to-amber-50 border border-orange-100/80 shadow-lg hover:shadow-2xl hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-amber-100' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={plan.popular ? 'text-amber-200' : 'text-amber-500'}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-amber-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-2xl mb-2">📦</p>
              <p className="text-gray-600">Free Delivery</p>
            </div>
            <div>
              <p className="text-2xl mb-2">🔄</p>
              <p className="text-gray-600">Easy Cancellation</p>
            </div>
            <div>
              <p className="text-2xl mb-2">💬</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div>
              <p className="text-2xl mb-2">🎯</p>
              <p className="text-gray-600">Flexible Quantities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
