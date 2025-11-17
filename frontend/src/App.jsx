import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderTracking from './pages/OrderTracking'
import TrackOrder from './pages/TrackOrder'
import Franchise from './pages/Franchise'
import About from './pages/About'
import Mobile from './pages/Mobile'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import SalesReport from './pages/SalesReport'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import Events from './pages/Events'
import Technology from './pages/Technology'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Delivery from './pages/Delivery'
import Refund from './pages/Refund'
import TimeSlottedDeliveries from './pages/TimeSlottedDeliveries'
import InsulatedPackaging from './pages/InsulatedPackaging'
import SubscriptionPlans from './pages/SubscriptionPlans'
import BulkOrders from './pages/BulkOrders'
import CorporateGifting from './pages/CorporateGifting'
import Media from './pages/Media'
import LoadingScreen from './components/LoadingScreen'
import WhatsAppFloat from './components/WhatsAppFloat'

function ScrollToTop({ children }) {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return children
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollToTop>
        <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order/:id" element={<OrderTracking />} />
      <Route path="/track" element={<TrackOrder />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/about" element={<About />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/sales" element={<SalesReport />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/events" element={<Events />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/time-slotted-deliveries" element={<TimeSlottedDeliveries />} />
      <Route path="/insulated-packaging" element={<InsulatedPackaging />} />
      <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="/bulk-orders" element={<BulkOrders />} />
      <Route path="/corporate-gifting" element={<CorporateGifting />} />
      <Route path="/media" element={<Media />} />
      </Routes>
        <WhatsAppFloat />
      </ScrollToTop>
    </>
  )
}
