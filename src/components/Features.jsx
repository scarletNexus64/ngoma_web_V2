import { motion } from 'framer-motion'
import {
  Camera,
  Map,
  MessageCircle,
  Phone,
  Mic,
  Image as ImageIcon,
  Star,
  TrendingUp,
  Facebook,
  Share2
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: 'Recherche par Image',
      description: 'Trouvez des produits simplement en prenant une photo. Notre technologie de reconnaissance d\'image révolutionnaire vous aide à découvrir exactement ce que vous cherchez.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Map,
      title: 'Carte Interactive',
      description: 'Localisez les vendeurs autour de vous sur une carte interactive. Trouvez les boutiques les plus proches et planifiez vos achats facilement.',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: Phone,
      title: 'Contact Direct',
      description: 'Contactez les vendeurs directement via WhatsApp ou par téléphone. Communication instantanée pour des transactions rapides et sécurisées.',
      gradient: 'from-orange-500 to-purple-500'
    },
    {
      icon: MessageCircle,
      title: 'Commentaires Multi-formats',
      description: 'Partagez votre expérience via texte, messages vocaux ou images. Aidez la communauté avec vos avis détaillés.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Système de Certification',
      description: 'Gagnez la confiance de vos clients avec nos certifications ECO, Classique ou VIP. Plus de visibilité et de crédibilité pour votre boutique.',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Boost & Sponsoring',
      description: 'Boostez vos produits et augmentez votre visibilité. Sponsorisez sur NGOMA, Facebook et Pinterest directement depuis l\'application.',
      gradient: 'from-orange-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="features" className="py-14 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-gradient">Fonctionnalités</span> <span className="dark:text-white">Innovantes</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez tout ce que NGOMA peut faire pour vous. Une expérience de commerce unique et moderne.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 transform hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features Section - Freemium Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 md:mt-20 bg-gradient-primary p-6 sm:p-8 md:p-10 lg:p-16 rounded-2xl md:rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                Mode Gratuit
              </h3>
              <p className="text-base md:text-xl mb-4 md:mb-6 text-white/90">
                Commencez gratuitement avec jusqu'à <span className="font-bold">6 produits</span> !
              </p>
              <p className="text-sm md:text-lg text-white/80 leading-relaxed">
                Testez notre plateforme sans engagement. Publiez vos premiers produits et découvrez toutes nos fonctionnalités avant de passer à un forfait premium.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl border border-white/20 text-center">
                <Mic className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white mx-auto mb-2 md:mb-3" />
                <p className="text-white font-semibold text-sm md:text-base">Commentaires Vocaux</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl border border-white/20 text-center">
                <ImageIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white mx-auto mb-2 md:mb-3" />
                <p className="text-white font-semibold text-sm md:text-base">Avis en Images</p>
              </div>
              <div className="relative bg-white/5 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl border border-white/20 text-center opacity-70">
                <Facebook className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white/60 mx-auto mb-2 md:mb-3" />
                <p className="text-white/70 font-semibold text-sm md:text-base">Sponsoring Facebook</p>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
              <div className="relative bg-white/5 backdrop-blur-lg p-4 sm:p-5 md:p-6 rounded-xl border border-white/20 text-center opacity-70">
                <Share2 className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white/60 mx-auto mb-2 md:mb-3" />
                <p className="text-white/70 font-semibold text-sm md:text-base">Sponsoring Pinterest</p>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
