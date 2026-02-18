import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Apple, Download as DownloadIcon } from 'lucide-react'

const Download = () => {
  return (
    <section id="download" className="py-14 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 dark:text-white">
              Téléchargez <span className="text-gradient">NGOMA</span> dès maintenant
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Rejoignez des milliers d'utilisateurs qui font confiance à NGOMA pour leurs achats et ventes en ligne.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 dark:text-white">Application Mobile</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Disponible sur iOS et Android, 100% gratuite</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <DownloadIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 dark:text-white">Installation Rapide</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Téléchargement et installation en moins d'une minute</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 dark:text-white">Mises à jour régulières</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Nouvelles fonctionnalités ajoutées chaque mois</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://apps.apple.com/us/app/ngoma/id6751129797"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-black text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Télécharger sur</div>
                  <div className="text-base sm:text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.ngoma.ngoma"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-black text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Disponible sur</div>
                  <div className="text-base sm:text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-4 md:mt-0"
          >
            <div className="relative z-10 w-full">
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ maxWidth: 'min(300px, 80vw)' }}>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen */}
                    <div className="relative aspect-[9/19.5]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

                      {/* Screen Content */}
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src="/img/map.jpeg"
                          alt="Vendeurs sur la carte"
                          className="w-full h-full object-cover"
                          style={{ transform: 'translateY(-0.01%)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-xl opacity-80"
              ></motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl shadow-xl opacity-80"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-14 md:mt-20"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">10K+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Téléchargements</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">4.8</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">5K+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Vendeurs actifs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2">24/7</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Support client</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download
