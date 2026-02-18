import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Sparkles, Home, Zap, Tag, Download as DlIcon, Star, MessageSquare } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Accueil',        href: '#home',     id: 'home',     icon: Home },
  { name: 'Fonctionnalités',href: '#features', id: 'features', icon: Zap },
  { name: 'Tarifs',         href: '#pricing',  id: 'pricing',  icon: Tag },
  { name: 'Télécharger',    href: '#download', id: 'download', icon: DlIcon },
  { name: 'Témoignages',    href: '#reviews',  id: 'reviews',  icon: MessageSquare },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  /* ── scroll + active section tracker ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Find which section is currently in view
      const sections = navLinks.map(l => l.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2 shadow-2xl'
          : 'py-3'
      }`}
    >
      {/* Glass background layer */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl border-b border-gray-200/60 dark:border-white/5'
          : 'bg-white/60 dark:bg-gray-950/60 backdrop-blur-md'
      }`} />

      {/* Subtle rainbow gradient border at bottom when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-60" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a href="#home" className="flex items-center space-x-2.5 group flex-shrink-0">
            <div className="relative">
              <img
                src="/img/logo.png"
                alt="NGOMA Digital"
                className="h-9 w-9 md:h-11 md:w-11 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-wide">
                NGOMA
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-400 dark:text-gray-500 font-semibold tracking-widest uppercase -mt-0.5">
                Digital Marketplace
              </span>
            </div>
          </a>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-primary text-white shadow-md shadow-purple-200 dark:shadow-purple-900/40'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                  <span className="hidden lg:inline">{link.name}</span>
                </a>
              )
            })}
          </div>

          {/* ── Right controls ── */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
              title={isDark ? 'Mode clair' : 'Mode sombre'}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex items-center gap-2 bg-gradient-primary text-white px-5 py-2.5 rounded-full font-semibold text-sm overflow-hidden group"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Télécharger</span>
            </motion.a>
          </div>

          {/* ── Mobile controls ── */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-indigo-500" />
              }
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-3 mb-2 p-3 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 shadow-xl">
                {navLinks.map((link, i) => {
                  const Icon = link.icon
                  const isActive = activeSection === link.id
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-primary text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {link.name}
                    </motion.a>
                  )
                })}

                <div className="mt-2 pt-2 border-t border-gray-100 dark:border-white/5">
                  <a
                    href="#download"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    Télécharger l'app
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
