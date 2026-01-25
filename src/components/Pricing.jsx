import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, HardDrive, TrendingUp } from 'lucide-react'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('storage')

  const storagePlans = [
    {
      name: 'Storage L',
      price: '300',
      storage: '300 Mo',
      description: 'Parfait pour débuter',
      icon: HardDrive,
      gradient: 'from-purple-400 to-purple-600',
      features: [
        '300 Mo de stockage',
        'Jusqu\'à 30 produits',
        'Support standard',
        'Analytics de base'
      ]
    },
    {
      name: 'Storage M',
      price: '700',
      storage: '700 Mo',
      description: 'Pour les boutiques en croissance',
      icon: HardDrive,
      gradient: 'from-pink-400 to-pink-600',
      popular: true,
      features: [
        '700 Mo de stockage',
        'Jusqu\'à 70 produits',
        'Support prioritaire',
        'Analytics avancés',
        'Badge "Vendeur Actif"'
      ]
    },
    {
      name: 'Storage S',
      price: '1000',
      storage: '1 Go',
      description: 'Pour les grandes boutiques',
      icon: HardDrive,
      gradient: 'from-orange-400 to-orange-600',
      features: [
        '1 Go de stockage',
        'Produits illimités',
        'Support VIP 24/7',
        'Analytics complets',
        'Badge "Top Vendeur"',
        'Promotion gratuite mensuelle'
      ]
    }
  ]

  const certifications = [
    {
      name: 'ECO',
      price: '10 000',
      description: 'Certification de démarrage',
      icon: Star,
      starColor: 'text-blue-400',
      gradient: 'from-blue-400 to-blue-600',
      features: [
        'Étoile bleue de certification',
        '2 emplacements boutique',
        '1 coupon de boost gratuit',
        'Badge de confiance',
        'Priorité dans les recherches'
      ]
    },
    {
      name: 'CLASSIQUE',
      price: '20 000',
      description: 'Pour les professionnels',
      icon: Zap,
      starColor: 'text-green-400',
      gradient: 'from-green-400 to-green-600',
      popular: true,
      features: [
        'Étoile verte de certification',
        '3 emplacements boutique',
        '2 coupons de boost gratuits',
        'Badge Premium',
        'Support prioritaire',
        'Analytics détaillés',
        'Mise en avant hebdomadaire'
      ]
    },
    {
      name: 'VIP',
      price: '50 000',
      description: 'Le prestige ultime',
      icon: Crown,
      starColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-yellow-600',
      features: [
        'Étoile jaune de certification',
        '4 emplacements boutique',
        '3 coupons de boost gratuits',
        'Badge VIP exclusif',
        'Support VIP dédié 24/7',
        'Analytics en temps réel',
        'Promotion quotidienne',
        'Accès aux nouvelles fonctionnalités'
      ]
    }
  ]

  const sponsoring = {
    name: 'Boost Premium',
    price: '2 000',
    duration: '7 jours',
    description: 'Sponsorisez vos produits',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Promotion pendant 7 jours',
      'Affichage en tête de liste',
      'Visibilité multipliée par 10',
      'Badge "Sponsorisé"',
      'Partage sur Facebook',
      'Partage sur Pinterest',
      'Statistiques détaillées'
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="pricing" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Nos <span className="text-gradient">Forfaits</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins et développez votre activité
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setActiveTab('storage')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'storage'
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Stockage
            </button>
            <button
              onClick={() => setActiveTab('certification')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'certification'
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Storage Plans */}
        {activeTab === 'storage' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {storagePlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular ? 'border-pink-500' : 'border-gray-100 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-secondary text-white px-6 py-1 rounded-full text-sm font-semibold">
                        Populaire
                      </span>
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400"> FCFA</span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.storage}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    Choisir ce forfait
                  </button> */}
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Certifications */}
        {activeTab === 'certification' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    cert.popular ? 'border-green-500' : 'border-gray-100 dark:border-gray-700'
                  }`}
                >
                  {cert.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                        Recommandé
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Star className={`w-12 h-12 ${cert.starColor} fill-current`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{cert.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{cert.price}</span>
                    <span className="text-gray-600 dark:text-gray-400"> FCFA</span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Certification annuelle</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {cert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
{/* 
                  <button className={`w-full bg-gradient-to-r ${cert.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                    Se certifier
                  </button> */}
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Sponsoring Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-10 md:p-16 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">{sponsoring.name}</h3>
                  <p className="text-white/90">{sponsoring.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{sponsoring.price}</span>
                <span className="text-2xl"> FCFA</span>
                <div className="text-lg text-white/90 mt-2">Pour {sponsoring.duration}</div>
              </div>

              <p className="text-lg text-white/90 mb-8">
                Boostez votre produit et multipliez sa visibilité sur NGOMA, Facebook et Pinterest !
              </p>
{/* 
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Booster maintenant
              </button> */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sponsoring.features.map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20">
                  <Check className="w-6 h-6 text-white mb-2" />
                  <p className="text-white text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
