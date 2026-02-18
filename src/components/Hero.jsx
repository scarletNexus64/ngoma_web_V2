import { motion } from 'framer-motion'
import { Smartphone, TrendingUp, Shield, Star, Zap, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 dark:from-gray-900 dark:via-purple-950/20 dark:to-pink-950/10">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/10 to-orange-100/10 dark:from-transparent dark:via-purple-900/10 dark:to-orange-900/10"></div>

      {/* Modern Split Design */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5"
            >
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs sm:text-sm font-semibold text-purple-900 dark:text-purple-200">
                Marketplace N°1 en Afrique
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Bienvenue sur{' '}
              <span className="text-gradient block mt-1 sm:mt-2">NGOMA</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              La marketplace qui révolutionne le commerce en ligne en Afrique
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Recherche par image</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-pink-50 dark:bg-pink-900/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 dark:text-pink-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Géolocalisation</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 bg-orange-50 dark:bg-orange-900/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Contact direct</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#download"
                className="group bg-gradient-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center flex items-center justify-center space-x-2"
              >
                <span>Télécharger l'app</span>
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#features"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-primary hover:text-primary hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 text-center"
              >
                Découvrir plus
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div>
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-0.5 sm:mb-1">10K+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Utilisateurs actifs</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-0.5 sm:mb-1">5K+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Vendeurs</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-0.5 sm:mb-1">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Produits</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image with Modern Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-4 lg:mt-0"
          >
            {/* Simplified Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-48 sm:w-64 h-48 sm:h-64 bg-purple-200 dark:bg-purple-700/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-pink-200 dark:bg-pink-700/20 rounded-full filter blur-3xl opacity-50"></div>

            {/* Hero Image */}
            <div className="relative z-10">
              <img
                src="/img/hero.png"
                alt="NGOMA Digital"
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl dark:shadow-purple-900/50"
              />

              {/* Floating Feature Cards - only on large screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">+300%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Croissance mensuelle</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">100% Sécurisé</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Paiements protégés</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:h-3 bg-gradient-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
