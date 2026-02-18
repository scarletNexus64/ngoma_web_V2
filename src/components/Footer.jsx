import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

// TikTok icon component (custom SVG)
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

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
    { icon: Facebook, href: 'https://www.facebook.com/share/16FEEX2fuN/?mibextid=wwXIfr', color: 'hover:text-blue-600' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@ngoma_marke?_t=ZM-90x5gLb9ueK&_r=1', color: 'hover:text-pink-500' },
    { icon: Instagram, href: 'https://www.instagram.com/ngoma_market?igsh=MW5sdzl5ZmZlejVnNg==', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://youtube.com/@ngomamarket?si=Ye8gXErNuznMIelN', color: 'hover:text-red-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/groups/15689045', color: 'hover:text-blue-700' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Top row: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/img/logo.png" alt="NGOMA Digital" className="h-9 w-9 sm:h-10 sm:w-10" />
              <span className="text-xl sm:text-2xl font-bold text-white">NGOMA DIGITAL</span>
            </div>
            <p className="text-gray-400 mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">
              La marketplace qui révolutionne le commerce en ligne en Afrique.
              Connectez, vendez et achetez en toute confiance.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:ngomamarket@gmail.com" className="hover:text-white transition-colors text-sm sm:text-base break-all">
                  ngomamarket@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+237620721366" className="hover:text-white transition-colors text-sm sm:text-base">
                  +237 620 72 13 66
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">Yaoundé, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Links columns - 2x2 on mobile, 4 cols on md */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:contents lg:col-span-4">
            {/* Produit */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Produit</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.produit.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm sm:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Entreprise</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.entreprise.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm sm:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm sm:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Légal</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm sm:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 sm:p-8 mb-10 md:mb-12"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Restez informé</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités et offres.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <button className="bg-gradient-primary text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm sm:text-base">
                S'abonner
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Social Icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm sm:text-base">
                © {currentYear} <span className="text-white font-semibold">NGOMA DIGITAL SARL</span>. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-0">
            <p>NGOMA DIGITAL SARL</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-3 gap-y-1">
              <span>CM-NSI-O2-2025-B[2-O0594</span>
              <span className="hidden sm:inline">|</span>
              <span>NUI: MO72577895328B</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
