import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 300)
          return 100
        }
        return prev + 20 // Plus rapide
      })
    }, 100) // Intervalle plus court

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        {/* Logo avec animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/img/logo.png"
            alt="NGOMA Logo"
            className="w-24 h-24 mx-auto animate-pulse"
          />
        </motion.div>

        {/* Texte NGOMA */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-gradient mb-8"
        >
          NGOMA DIGITAL
        </motion.h1>

        {/* Barre de progression */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-600 mt-4"
          >
            Chargement... {progress}%
          </motion.p>
        </div>

        {/* Spinner animé */}
        <div className="mt-8 flex justify-center space-x-2">
          <motion.div
            className="w-3 h-3 bg-purple-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
          />
          <motion.div
            className="w-3 h-3 bg-pink-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
          />
          <motion.div
            className="w-3 h-3 bg-orange-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
