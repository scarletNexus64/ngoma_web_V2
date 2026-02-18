import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Aminata Diallo',
    role: 'Vendeuse — Dakar, Sénégal',
    avatar: 'AD',
    avatarGradient: 'from-purple-500 to-pink-500',
    rating: 5,
    text: 'NGOMA a complètement transformé mon activité ! Je vends mes robes traditionnelles à des clients dans tout le pays. La recherche par image est incroyable, mes clientes trouvent exactement ce qu\'elles cherchent en un clic. Mon chiffre d\'affaires a doublé en seulement 3 mois !',
    tag: 'Vendeuse certifiée VIP'
  },
  {
    id: 2,
    name: 'Jean-Baptiste Mvondo',
    role: 'Acheteur — Yaoundé, Cameroun',
    avatar: 'JM',
    avatarGradient: 'from-pink-500 to-orange-500',
    rating: 5,
    text: 'Enfin une appli qui comprend nos besoins ! J\'ai trouvé des pièces détachées introuvables ailleurs grâce à la photo que j\'ai prise. Le vendeur était à 2 km de chez moi — je n\'aurais jamais pu le trouver sans la carte interactive. C\'est révolutionnaire !',
    tag: 'Utilisateur régulier'
  },
  {
    id: 3,
    name: 'Fatoumata Koné',
    role: 'Gérante de boutique — Abidjan, Côte d\'Ivoire',
    avatar: 'FK',
    avatarGradient: 'from-orange-500 to-purple-500',
    rating: 5,
    text: 'J\'avais peur au début mais l\'application est super simple à utiliser. En moins d\'une heure, j\'avais mis tous mes produits en ligne. La certification CLASSIQUE m\'a donné une visibilité que je n\'aurais jamais eu seule. Mes commandes viennent maintenant de partout !',
    tag: 'Vendeuse certifiée CLASSIQUE'
  },
  {
    id: 4,
    name: 'Kofi Asante',
    role: 'Entrepreneur — Accra, Ghana',
    avatar: 'KA',
    avatarGradient: 'from-purple-600 to-blue-500',
    rating: 5,
    text: 'Le système de boost est vraiment efficace. J\'ai sponsorisé mon produit pendant 7 jours et les vues ont explosé. Les statistiques détaillées m\'ont permis de comprendre exactement qui s\'intéresse à mes produits. NGOMA c\'est l\'avenir du commerce africain !',
    tag: 'Vendeur ECO'
  },
  {
    id: 5,
    name: 'Mariama Bah',
    role: 'Artisane — Conakry, Guinée',
    avatar: 'MB',
    avatarGradient: 'from-green-500 to-teal-500',
    rating: 5,
    text: 'Je fabrique des bijoux traditionnels et NGOMA m\'a ouvert des portes que je n\'imaginais pas. Les commentaires vocaux de mes clients me touchent vraiment — c\'est comme avoir une boutique physique en ligne. Le support est toujours disponible et très réactif !',
    tag: 'Artisane certifiée'
  },
  {
    id: 6,
    name: 'Emmanuel Tchangani',
    role: 'Acheteur — Lomé, Togo',
    avatar: 'ET',
    avatarGradient: 'from-pink-600 to-red-500',
    rating: 5,
    text: 'J\'utilise NGOMA tous les jours pour mes achats. Contacter les vendeurs via WhatsApp directement depuis l\'app est super pratique. L\'interface est belle et fluide, même sur mon téléphone entrée de gamme. Bravo à toute l\'équipe pour ce travail exceptionnel !',
    tag: 'Acheteur fidèle'
  }
]

const StarRating = ({ rating }) => (
  <div className="flex space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ))}
  </div>
)

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 })
  }

  // Show 1 card on mobile, 3 on lg+
  const getVisibleReviews = () => {
    return [
      reviews[activeIndex % reviews.length],
      reviews[(activeIndex + 1) % reviews.length],
      reviews[(activeIndex + 2) % reviews.length],
    ]
  }

  const review = reviews[activeIndex]

  return (
    <section id="reviews" className="py-14 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs sm:text-sm font-semibold text-yellow-800 dark:text-yellow-300">
              +10 000 utilisateurs satisfaits
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 dark:text-white">
            Ce que disent nos <span className="text-gradient">utilisateurs</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des milliers de vendeurs et acheteurs font confiance à NGOMA chaque jour à travers l'Afrique.
          </p>
        </motion.div>

        {/* ─── Desktop: 3-column grid ─── */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {getVisibleReviews().map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-purple-200 dark:text-purple-800 mb-4 flex-shrink-0" />

              {/* Stars */}
              <StarRating rating={r.rating} />

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-4 text-sm flex-1">
                "{r.text}"
              </p>

              {/* Tag */}
              <span className="inline-block text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full mb-4 self-start">
                {r.tag}
              </span>

              {/* Author */}
              <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className={`w-10 h-10 bg-gradient-to-br ${r.avatarGradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{r.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">{r.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Mobile/Tablet: Carousel ─── */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={review.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                {/* Quote icon */}
                <Quote className="w-7 h-7 text-purple-200 dark:text-purple-800 mb-3" />

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Text */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-4 text-sm sm:text-base">
                  "{review.text}"
                </p>

                {/* Tag */}
                <span className="inline-block text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full mb-4">
                  {review.tag}
                </span>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${review.avatarGradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{review.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{review.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Desktop dots navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 bg-gradient-primary rounded-2xl p-6 sm:p-8 text-center text-white"
        >
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 fill-yellow-300" />
            ))}
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Note moyenne de 4.8 / 5</p>
          <p className="text-white/80 text-sm sm:text-base">
            Basée sur plus de <strong>plusieurs avis vérifiés</strong> sur App Store et Google Play
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
