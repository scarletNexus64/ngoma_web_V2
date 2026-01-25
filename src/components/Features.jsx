import React from 'react'
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
    <section id="features" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Fonctionnalités</span> <span className="dark:text-white">Innovantes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez tout ce que NGOMA peut faire pour vous. Une expérience de commerce unique et moderne.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-primary p-10 md:p-16 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Mode Freemium
              </h3>
              <p className="text-xl mb-6 text-white/90">
                Commencez gratuitement avec jusqu'à <span className="font-bold">6 produits</span> !
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Testez notre plateforme sans engagement. Publiez vos premiers produits et découvrez toutes nos fonctionnalités avant de passer à un forfait premium.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center">
                <Mic className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Commentaires Vocaux</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center">
                <ImageIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Avis en Images</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center">
                <Facebook className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Sponsoring Facebook</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-center">
                <Share2 className="w-10 h-10 text-white mx-auto mb-3" />
                <p className="text-white font-semibold">Partage Pinterest</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
