import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (scrolled / total) * 100 : 0

      setProgress(pct)
      setVisible(scrolled > 400)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SVG circle params
  const size = 44
  const strokeW = 3
  const r = (size - strokeW) / 2
  const circ = 2 * Math.PI * r
  const dash = circ - (progress / 100) * circ

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 sm:bottom-24 sm:right-6 z-40 group"
          title="Retour en haut"
        >
          {/* Progress ring */}
          <svg
            width={size}
            height={size}
            className="absolute inset-0 -rotate-90"
          >
            {/* Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              strokeWidth={strokeW}
              className="stroke-gray-200 dark:stroke-gray-700"
            />
            {/* Progress */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              strokeWidth={strokeW}
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dash}
              className="stroke-purple-500"
              style={{ transition: 'stroke-dashoffset 0.2s ease' }}
            />
          </svg>

          {/* Button core */}
          <div className="relative w-11 h-11 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
