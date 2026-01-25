import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CookieConsent from './components/CookieConsent'
import Chatbot from './components/Chatbot'

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
          <Navbar />
          <Hero />
          <Features />
          <Pricing />
          <Download />
          <Footer />
          <CookieConsent />
          <Chatbot />
        </div>
      )}
    </>
  )
}

export default App
