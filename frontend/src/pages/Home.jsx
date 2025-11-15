import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDirection, setSlideDirection] = useState('forward')

  // Detect mobile once on mount and on resize
  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768)
      }
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Mouse-based parallax only on non-mobile to avoid jank on phones
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  useEffect(() => {
    document.title = 'With You Coffee – Traditional taste, modern coffee delivery'
  }, [])

  // Enhanced auto-slide effect with 3D transitions
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((prev) => (prev === 0 ? 1 : 0), 'forward')
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleSlideChange = (newSlide, direction = 'forward') => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setSlideDirection(direction)
    
    setTimeout(() => {
      if (typeof newSlide === 'function') {
        setCurrentSlide(newSlide)
      } else {
        setCurrentSlide(newSlide)
      }
      
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main>
        {/* Modern 21st.dev Inspired Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 perspective-3d">
          {/* Modern Gradient Mesh Background */}
          <div className="absolute inset-0 gradient-mesh opacity-20 md:animate-gradientMesh"></div>
          
          {/* Animated Grid Pattern - simplify on mobile */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '50px 50px',
              animation: 'float 20s ease-in-out infinite'
            }}
          ></div>

          {/* Modern Liquid Morphing Orbs - disabled on mobile for performance */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-3xl animate-liquidMorph animate-modernGlow"
                style={{
                  top: '10%',
                  left: '5%',
                  transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
                  animationDelay: '0s'
                }}
              ></div>
              <div
                className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl animate-liquidMorph"
                style={{
                  bottom: '5%',
                  right: '5%',
                  transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
                  animationDelay: '8s'
                }}
              ></div>
              <div
                className="absolute w-[500px] h-[500px] bg-gradient-to-r from-amber-500/35 to-orange-500/35 blur-3xl animate-liquidMorph animate-modernGlow"
                style={{
                  top: '40%',
                  left: '60%',
                  transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
                  animationDelay: '15s'
                }}
              ></div>
            </div>
          )}

          {/* Modern Geometric Floating Elements - heavy decorative animations only on tablet+ */}
          {!isMobile && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-container">
              {/* 3D Geometric Shapes */}
              <div className="absolute top-20 left-[10%] w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl animate-geometricFloat card-tilt" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-40 right-[15%] w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full animate-geometricFloat" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rotate-45 animate-geometricFloat card-tilt" style={{ animationDelay: '4s' }}></div>

              {/* Floating Coffee Elements with Modern Style */}
              <div className="absolute top-1/4 right-[20%] w-14 h-14 bg-gradient-to-br from-amber-500/40 to-orange-500/40 rounded-2xl flex items-center justify-center text-2xl animate-floatingCard" style={{ animationDelay: '1s' }}>☕</div>
              <div className="absolute bottom-1/4 right-[35%] w-12 h-12 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full flex items-center justify-center text-xl animate-floatingCard" style={{ animationDelay: '3s' }}>🍵</div>
              <div className="absolute top-1/3 left-[25%] w-10 h-10 bg-gradient-to-br from-pink-500/40 to-rose-500/40 rounded-lg flex items-center justify-center text-lg animate-geometricFloat" style={{ animationDelay: '5s' }}>🧋</div>

              {/* Modern Orbiting Elements */}
              <div className="absolute top-1/3 left-1/4">
                <div className="animate-orbit">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-modernGlow"></div>
                </div>
              </div>
              <div className="absolute top-1/2 right-1/3">
                <div className="animate-orbitReverse">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-modernGlow"></div>
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/2">
                <div className="animate-orbit" style={{ animationDuration: '30s' }}>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 animate-modernGlow"></div>
                </div>
              </div>

              {/* Modern Particle System */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-white/30 to-purple-300/30 animate-modernGlow"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `geometricFloat ${12 + Math.random() * 8}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 10}s`
                  }}
                ></div>
              ))}
            </div>
          )}

          {/* Modern Hero Content Container */}
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full perspective-3d">
            {/* Slide 1 - Modern Coffee Experience */}
            <div 
              className={`transform-gpu ${
                currentSlide === 0 
                  ? (isTransitioning ? 'animate-modernSlideIn' : 'opacity-100 translate-x-0')
                  : (isTransitioning && slideDirection === 'forward' ? 'animate-modernSlideOut' : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none')
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                <div className="text-left space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-amber-500/20 magnetic">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-amber-200 text-sm font-medium">Now delivering to 50+ offices</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight transform-gpu">
                    <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent animate-textStagger hover-3d" style={{animationDelay: '0.2s'}}>
                      Future of
                    </span>
                    <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent mt-2 animate-textStagger hover-3d" style={{animationDelay: '0.4s'}}>
                      Coffee Delivery
                    </span>
                    <span className="block bg-gradient-to-r from-amber-200 via-orange-200 to-amber-300 bg-clip-text text-transparent mt-2 animate-textStagger hover-3d" style={{animationDelay: '0.6s'}}>
                      Starts Here.
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl leading-relaxed animate-textStagger" style={{animationDelay: '0.8s'}}>
                    Experience the perfect fusion of artisanal coffee craftsmanship and cutting-edge technology. Every cup tells a story of innovation, quality, and passion.
                  </p>

                  <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-textStagger relative z-50 pointer-events-auto" style={{animationDelay: '1s'}}>
                    <Link 
                      to="/products" 
                      className="modern-button group"
                    >
                      <span>Start Your Journey</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <a
                      href="https://www.youtube.com/watch?v=RcnZOcAwu0Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 modern-glass border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 magnetic card-tilt transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Watch Demo</span>
                    </a>
                  </div>
                </div>

                <div className="relative h-[600px] flex items-center justify-center overflow-visible">
                  {/* Modern 3D Coffee Visualization */}
                  <div className="relative w-full h-full animate-floatingCard">
                    {/* Modern Gradient Wave Background */}
                    <div className="absolute bottom-0 right-0 w-[70%] h-[75%] bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 rounded-tl-[300px] shadow-2xl animate-liquidMorph card-tilt" style={{animationDelay: '3s'}}></div>
                    
                    {/* Modern Coffee Cup with 3D Effects */}
                    <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[350px] animate-floatingCard" style={{animationDelay: '1s'}}>
                      {/* Shadow under cup */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-black/20 rounded-full blur-3xl"></div>
                      
                      {/* Modern Gradient Cup */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[280px] card-tilt">
                        {/* Cup body - modern gradient finish */}
                        <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 rounded-b-[140px] shadow-2xl overflow-hidden animate-modernGlow">
                          {/* Top rim with modern gradient */}
                          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-purple-500 to-pink-600 animate-modernGlow"></div>
                          
                          {/* Modern handle design */}
                          <div className="absolute left-[-40px] top-[80px] w-24 h-28">
                            {/* Handle outer curve with gradient */}
                            <div className="absolute inset-0 border-[18px] border-purple-700 rounded-tl-full rounded-bl-full animate-modernGlow"></div>
                            {/* Handle accent */}
                            <div className="absolute top-0 left-0 w-12 h-16 border-t-[18px] border-l-[18px] border-pink-700 rounded-tl-full transform -rotate-12"></div>
                          </div>
                          
                          {/* Liquid filling animation */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900 via-orange-800 to-orange-700 rounded-b-[140px] animate-fillCup">
                            {/* Liquid surface glow */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-br from-orange-500/40 via-orange-600/30 to-transparent"></div>
                            
                            {/* Light reflection on liquid */}
                            <div className="absolute top-4 right-12 w-16 h-8 bg-orange-400/20 rounded-full blur-sm"></div>
                          </div>
                          
                          {/* Cup highlight/shine */}
                          <div className="absolute top-[20%] right-[15%] w-20 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-md"></div>
                        </div>
                      </div>
                      
                      {/* Pouring Straw/Stream from top */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-x-8 w-[200px] h-[280px] z-20">
                        {/* Striped straw tilted */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-[-18deg] w-10 h-[180px] origin-top">
                          {/* Straw body with stripes */}
                          <div className="relative w-full h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-500 rounded-full shadow-lg overflow-hidden">
                            {/* Yellow stripes */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-yellow-300"></div>
                            <div className="absolute top-12 left-0 right-0 h-8 bg-yellow-300"></div>
                            <div className="absolute top-24 left-0 right-0 h-8 bg-yellow-300"></div>
                            
                            {/* Straw top cap */}
                            <div className="absolute -top-2 left-0 right-0 h-6 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-full"></div>
                          </div>
                          
                          {/* Pouring liquid stream */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-[120px] overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-b from-orange-400 via-orange-600 to-orange-800 animate-pour shadow-lg" style={{transformOrigin: 'top'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Steam wisps */}
                      <div className="absolute top-[40%] left-[35%] w-3 h-32 bg-gradient-to-t from-gray-400/40 to-transparent rounded-full blur-md animate-steam"></div>
                      <div className="absolute top-[35%] left-[45%] w-3 h-36 bg-gradient-to-t from-gray-400/30 to-transparent rounded-full blur-md animate-steam" style={{animationDelay: '0.7s'}}></div>
                      <div className="absolute top-[38%] left-[55%] w-3 h-32 bg-gradient-to-t from-gray-400/40 to-transparent rounded-full blur-md animate-steam" style={{animationDelay: '1.4s'}}></div>
                      
                      {/* Glow around cup */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[340px] h-[300px] bg-gradient-to-t from-orange-600/15 to-transparent rounded-b-[140px] blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Modern Tech Experience */}
            <div 
              className={`transform-gpu ${
                currentSlide === 1 
                  ? (isTransitioning ? 'animate-modernSlideIn' : 'opacity-100 translate-x-0')
                  : (isTransitioning && slideDirection === 'forward' ? 'animate-modernSlideOut' : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none')
              }`}
            >
              <div className="relative min-h-[600px] w-full">
                {/* Enhanced Red Wave Backgrounds with 3D Effects */}
                <div className="absolute top-0 left-0 w-[60%] h-[50%] bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-br-[300px] shadow-2xl hover-3d animate-morphingBlob" style={{animationDelay: '2s'}}></div>
                
                <div className="absolute bottom-0 right-0 w-[65%] h-[55%] bg-gradient-to-tl from-red-600 via-red-700 to-red-800 rounded-tl-[300px] shadow-2xl hover-3d animate-morphingBlob" style={{animationDelay: '7s'}}></div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] px-6">
                  {/* Left Content with Enhanced Animations */}
                  <div className="text-left space-y-8 pl-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-textReveal hover-3d transform-gpu">
                      Tech in Every Step, Taste in Every Sip
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                      Cup Time blends technology with tradition to serve you the perfect cup—every time. Experience the future of workplace tea and coffee, crafted with care and delivered with precision.
                    </p>

                    <div className="flex gap-4 pt-4">
                      <Link 
                        to="/products" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 magnetic hover-3d transition-all duration-300 group"
                      >
                        <span>Start Your Journey</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <a 
                        href="https://www.youtube.com/watch?v=RcnZOcAwu0Q" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 glass-effect border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 magnetic hover-3d transition-all duration-300 group"
                      >
                        <span>Watch Demo</span>
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right - Mobile Phones (decorative, no pointer events) */}
                  <div className="relative h-[420px] md:h-[460px] lg:h-[500px] flex items-center justify-center overflow-visible pointer-events-none">
                    {/* Mobile Phones with realistic styling */}
                    <div className="relative flex items-center justify-center gap-3 md:gap-4 z-10 max-w-full">
                    {/* Phone 1 - Left with 3D Effects */}
                    <div className="relative w-40 h-80 md:w-48 md:h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] border-[5px] md:border-[6px] border-slate-700 shadow-2xl transform -rotate-6 md:rotate-[-8deg] hover:rotate-[-4deg] animate-float hover-3d magnetic transition-transform duration-500" style={{animationDelay: '0s'}}>
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                      
                      {/* Screen */}
                      <div className="p-3 pt-8 h-full flex flex-col bg-gradient-to-br from-slate-700 to-slate-800 rounded-[2rem] overflow-hidden">
                        {/* Status bar */}
                        <div className="flex justify-between text-[8px] text-white/60 mb-3 px-2">
                          <span>9:41</span>
                          <span>●●●●</span>
                        </div>
                        
                        {/* My Orders Card */}
                        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-3 mb-3 backdrop-blur-sm border border-amber-500/30">
                          <div className="text-xs text-amber-200 mb-2 font-bold flex justify-between items-center">
                            <span>My Orders</span>
                            <span className="text-[8px] text-amber-100/80">Order #WY2034</span>
                          </div>
                          <div className="space-y-2">
                            {/* Order items */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-[8px] text-white border border-white/20 space-y-1">
                              {/* Filter Coffee */}
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1">
                                  <div className="w-5 h-5 rounded-md overflow-hidden bg-white/10 flex items-center justify-center">
                                    <img
                                      src="/images/products/coffee_fmzzco.png"
                                      alt="Filter Coffee"
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span>Filter Coffee x1</span>
                                </div>
                                <span className="text-amber-300 font-semibold">₹40</span>
                              </div>

                              {/* Strawberry Thick Shake */}
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1">
                                  <div className="w-5 h-5 rounded-md overflow-hidden bg-white/10 flex items-center justify-center">
                                    <img
                                      src="/images/products/berry-milk_xalvrn.png"
                                      alt="Strawberry Thick Shake"
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span>Strawberry Thick Shake x1</span>
                                </div>
                                <span className="text-amber-300 font-semibold">₹80</span>
                              </div>

                              {/* Tea */}
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1">
                                  <div className="w-5 h-5 rounded-md overflow-hidden bg-white/10 flex items-center justify-center">
                                    <img
                                      src="/images/products/tea_mfgnbt.png"
                                      alt="Tea"
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span>Tea x1</span>
                                </div>
                                <span className="text-amber-300 font-semibold">₹20</span>
                              </div>

                              {/* Total */}
                              <div className="flex items-center justify-between pt-1 mt-1 border-t border-white/10">
                                <span className="text-[8px] text-white/70">Total</span>
                                <span className="text-[9px] font-bold text-amber-200">₹140</span>
                              </div>
                            </div>

                            {/* Status */}
                            <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-2 text-[8px] text-green-200 border border-green-500/30 flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <span className="text-green-400">✓</span>
                                <span>On the way • ETA 15 mins</span>
                              </div>
                              <span className="text-green-300/80">Live tracking</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Map placeholder */}
                        <div className="bg-white/5 rounded-2xl flex-1 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                          <div className="text-white/30 text-xs">🗺️ Live Tracking</div>
                        </div>
                      </div>
                    </div>

                    {/* Phone 2 - Center (Main) with Enhanced 3D */}
                    <div className="relative w-44 h-[360px] md:w-52 md:h-[420px] bg-gradient-to-br from-white to-gray-100 rounded-[2.5rem] border-[5px] md:border-[6px] border-gray-300 shadow-2xl z-10 animate-float hover-3d magnetic animate-glowPulse transition-transform duration-500" style={{animationDelay: '1s'}}>
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
                      
                      {/* Screen */}
                      <div className="p-4 pt-10 h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-[2rem]">
                        {/* Logo with 3D Animation */}
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center mb-4 shadow-lg hover:rotate-12 hover-3d magnetic animate-cardFlip3D transition-transform duration-300">
                          <img
                            src="/images/browser title.gif"
                            alt="With You Coffee logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* App Name */}
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-black text-gray-900">With You Coffee</h3>
                          <p className="text-[10px] text-gray-500">Traditional taste, modern delivery</p>
                        </div>
                        
                        {/* QR Code */}
                        <div className="w-32 h-32 bg-white rounded-xl mb-3 p-2 shadow-inner flex items-center justify-center overflow-hidden">
                          <img
                            src="/images/qr scan.png"
                            alt="With You Coffee app QR code"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        {/* Download text */}
                        <div className="text-center">
                          <div className="text-xs text-orange-600 font-bold mb-1">Scan to download</div>
                          <div className="flex gap-2 text-[8px] text-gray-400">
                            <span>iOS</span>
                            <span>•</span>
                            <span>Android</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone 3 - Right with 3D Effects */}
                    <div className="relative w-40 h-80 md:w-48 md:h-96 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2.5rem] border-[5px] md:border-[6px] border-amber-200 shadow-2xl transform rotate-6 md:rotate-[8deg] hover:rotate-[4deg] animate-float hover-3d magnetic transition-transform duration-500" style={{animationDelay: '2s'}}>
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                      
                      {/* Screen */}
                      <div className="p-3 pt-8 h-full flex flex-col bg-gradient-to-br from-orange-50 to-amber-50 rounded-[2rem] overflow-hidden">
                        {/* Header */}
                        <div className="text-[10px] text-amber-800 font-bold mb-3 px-2">Good Morning Chennai ☀️</div>
                        
                        {/* Featured Product */}
                        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-3 mb-3 shadow-md border border-amber-200">
                          <div className="bg-white rounded-lg p-2 mb-2 shadow-sm">
                            <div className="w-full h-12 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg mb-1 flex items-center justify-center overflow-hidden">
                              <img
                                src="/images/products/coffee_fmzzco.png"
                                alt="Filter Coffee"
                                className="h-full object-contain"
                              />
                            </div>
                            <div className="text-[8px] text-gray-700 font-bold">Filter Coffee</div>
                            <div className="text-[7px] text-gray-500">Traditional South Indian coffee</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-amber-800">₹40</span>
                            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[8px] px-3 py-1 rounded-full font-bold">
                              Order
                            </button>
                          </div>
                        </div>
                        
                        {/* Product List */}
                        <div className="space-y-2">
                          <div className="bg-white rounded-xl p-2 flex items-center gap-2 shadow-sm border border-amber-100">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-lg flex items-center justify-center overflow-hidden">
                              <img
                                src="/images/products/tea_mfgnbt.png"
                                alt="Hot Tea"
                                className="h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="text-[8px] text-gray-700 font-bold">Hot Tea</div>
                              <div className="text-[7px] text-gray-500">Comforting milk tea</div>
                            </div>
                            <div className="text-[8px] font-bold text-amber-600">₹40</div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-2 flex items-center gap-2 shadow-sm border border-amber-100">
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg flex items-center justify-center overflow-hidden">
                              <img
                                src="/images/products/rose-milk_igf7hf.png"
                                alt="Rose Milk"
                                className="h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="text-[8px] text-gray-700 font-bold">Rose Milk</div>
                              <div className="text-[7px] text-gray-500">Chilled rose-flavoured milk</div>
                            </div>
                            <div className="text-[8px] font-bold text-amber-600">₹40</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Enhanced Slide Indicators with 3D Effects */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              <button
                onClick={() => handleSlideChange(0, currentSlide > 0 ? 'backward' : 'forward')}
                className={`relative overflow-hidden rounded-full transition-all duration-500 hover-3d magnetic ${
                  currentSlide === 0 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-12 h-3 animate-glowPulse' 
                    : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                }`}
                disabled={isTransitioning}
              >
                {currentSlide === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                )}
              </button>
              <button
                onClick={() => handleSlideChange(1, currentSlide < 1 ? 'forward' : 'backward')}
                className={`relative overflow-hidden rounded-full transition-all duration-500 hover-3d magnetic ${
                  currentSlide === 1 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-12 h-3 animate-glowPulse' 
                    : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                }`}
                disabled={isTransitioning}
              >
                {currentSlide === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Our Signature Beverages Section */}
        <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-slate-900 animate-backgroundShift" style={{backgroundSize: '400% 400%'}}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Brand Ambassador Promo */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative w-64 h-72 md:w-80 md:h-80 rounded-[2.25rem] overflow-hidden border border-amber-400/40 shadow-[0_0_60px_rgba(251,191,36,0.35)] bg-black/60">
                  <img
                    src="/images/Dhoni.gif"
                    alt="With You Coffee brand ambassador"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Brand Ambassador Spotlight</p>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                  Every winning morning<br className="hidden md:block" /> starts with a winning cup.
                </h3>
                <p className="text-base md:text-lg text-gray-300 max-w-xl">
                  Just like a champion stays calm under pressure, our brews stay perfectly balanced from the first sip before
                  sunrise to the last cup after a long day at work.
                </p>
                <p className="text-sm text-gray-400 max-w-xl">
                  With You Coffee brings stadium-level energy to your office pantry: bold filter coffee, comforting hot tea,
                  chilled rose milk and thick shakes that keep your team focused right through the innings.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 animate-textRevealStagger">
                Our Signature Beverages
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-textRevealStagger stagger-2">
                Handcrafted with love, using traditional techniques and ingredients passed down through generations.
              </p>
            </div>

            {/* Products Grid - 4x2 Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                {name: 'Hot Tea', image: '/images/products/tea_mfgnbt.png'},
                {name: 'Filter Coffee', image: '/images/products/coffee_fmzzco.png'},
                {name: 'Regional Snacks', image: '/images/products/regionalSnacks_rh5vxe.png'},
                {name: 'Rose Milk', image: '/images/products/rose-milk_igf7hf.png'},
                {name: 'Sugar Juice', image: '/images/products/sugar-juice_d18lvy.png'},
                {name: 'Karupatti Sukku Coffee', image: '/images/products/sukku-kappi_s2b4j1.png'},
                {name: 'Strawberry Thick Shake', image: '/images/products/berry-milk_xalvrn.png'},
                {name: 'Palm Fruit Thick Shake', image: '/images/products/pana-milk_jcc2sy.png'}
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative bg-gray-800/50 rounded-2xl p-4 backdrop-blur-sm border border-gray-700/50 product-card-hover animate-cardFlipIn animate-floatUpDown stagger-${i + 1}`}
                  style={{
                    animationDelay: `${i * 0.15}s, ${i * 0.5 + 2}s`
                  }}
                >
                  {/* Product Image */}
                  <div className="relative h-32 mb-4 flex items-center justify-center bg-gray-700/30 rounded-xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain p-2 product-image transition-all duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50" style={{display: 'none'}}>
                      ☕
                    </div>
                  </div>

                  {/* Product Name */}
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-sm group-hover:text-amber-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center animate-textRevealStagger stagger-8">
              <a 
                href="/products" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl magnetic-button animate-glowPulseBlue group"
              >
                View All Products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Franchise CTA Section */}
        <section id="franchise" className="relative py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-floatSlow"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-floatSlow" style={{animationDelay: '2s'}}></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <span className="text-white text-sm font-semibold">🚀 OPPORTUNITY</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Start Your Entrepreneurial Journey
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join our franchise network with low investment, full support and a proven playbook. Build your business with India's fastest-growing beverage brand.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-white mb-2">50+</div>
                  <div className="text-white/80 font-medium">Active Franchises</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-white mb-2">₹5L</div>
                  <div className="text-white/80 font-medium">Starting Investment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-white mb-2">6mo</div>
                  <div className="text-white/80 font-medium">ROI Timeline</div>
                </div>
              </div>

              <div className="pt-8">
                <Link 
                  to="/franchise" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-amber-600 font-black text-lg rounded-2xl hover:bg-gray-50 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
                >
                  Become a Franchisee
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
