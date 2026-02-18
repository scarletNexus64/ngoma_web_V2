import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Cookie, X, Shield, Settings } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const CookieConsent = () => {
  const { isDark } = useTheme()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ngoma-cookie-consent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('ngoma-cookie-consent', 'all')
    setShowBanner(false)
  }

  const handleAcceptEssential = () => {
    localStorage.setItem('ngoma-cookie-consent', 'essential')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('ngoma-cookie-consent', 'rejected')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {!showSettings ? (
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Cookies & Confidentialité
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nous respectons votre vie privée
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleReject}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site,
                  analyser le trafic et personnaliser le contenu. En cliquant sur "Tout accepter",
                  vous consentez à l'utilisation de tous les cookies.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Tout accepter
                  </button>
                  <button
                    onClick={handleAcceptEssential}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    Essentiels uniquement
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center space-x-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Personnaliser</span>
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>
                    Vos données sont protégées et sécurisées
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Paramètres des cookies
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookies essentiels</h4>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-1 rounded">
                        Toujours actif
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Cookie className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookies analytiques</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nous aident à comprendre comment vous utilisez notre site.
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <Cookie className="w-5 h-5 text-pink-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookies marketing</h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Permettent de vous proposer des publicités pertinentes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Sauvegarder les préférences
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300"
                  >
                    Retour
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
