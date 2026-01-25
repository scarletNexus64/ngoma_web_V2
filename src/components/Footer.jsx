import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    produit: [
      { name: 'Fonctionnalités', href: '#features' },
      { name: 'Tarifs', href: '#pricing' },
      { name: 'Télécharger', href: '#download' },
      { name: 'Tutoriels', href: '#' }
    ],
    entreprise: [
      { name: 'À propos', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carrières', href: '#' },
      { name: 'Presse', href: '#' }
    ],
    support: [
      { name: 'Centre d\'aide', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Statut', href: '#' }
    ],
    legal: [
      { name: 'Confidentialité', href: '#' },
      { name: 'Conditions', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Licences', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/img/logo.png" alt="NGOMA Digital" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">NGOMA DIGITAL</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La marketplace qui révolutionne le commerce en ligne en Afrique.
              Connectez, vendez et achetez en toute confiance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:ngomamarket@gmail.com" className="hover:text-white transition-colors">
                  ngomamarket@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+237123456789" className="hover:text-white transition-colors">
                  +237 620 72 13 66
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Yaoundé, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.produit.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Restez informé</h3>
              <p className="text-gray-300">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                S'abonner
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {currentYear} <span className="text-white font-semibold">NGOMA DIGITAL SARL</span>. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 space-y-2 sm:space-y-0">
            <p>NGOMA DIGITAL SARL</p>
            <div className="flex space-x-4">
              <span>CM-NSI-O2-2025-B[2-O0594</span>
              <span>|</span>
              <span>NUI: MO72577895328B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
