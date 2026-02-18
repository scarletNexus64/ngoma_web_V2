import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CookieConsent from './components/CookieConsent'
import Chatbot from './components/Chatbot'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Global UI extras */}
          <ScrollProgress />
          <Navbar />

          {/* Page sections */}
          <Hero />
          <Features />
          <Pricing />
          <Download />
          <Reviews />
          <Footer />

          {/* Floating widgets */}
          <CookieConsent />
          <Chatbot />
          <ScrollToTop />
        </div>
      )}
    </>
  )
}

export default App
