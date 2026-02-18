import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2.5px]">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 origin-left"
        style={{ scaleX: progress / 100 }}
        transition={{ ease: 'linear', duration: 0.1 }}
      />
    </div>
  )
}

export default ScrollProgress
