import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Chatbot = () => {
  const { isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Bonjour! 👋 Je suis l\'assistant virtuel de NGOMA. Comment puis-je vous aider aujourd\'hui?',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const quickQuestions = [
    'Comment télécharger NGOMA?',
    'Quels sont les tarifs?',
    'Comment fonctionne la certification?',
    'Comment contacter un vendeur?',
  ]

  const responses = {
    'comment télécharger': {
      text: "Vous pouvez télécharger NGOMA sur App Store pour iOS et Google Play pour Android. L'application est 100% gratuite! 📱",
      suggestions: ['Quels sont les tarifs?', 'Quelles sont les fonctionnalités?'],
    },
    'tarif': {
      text: "Nous proposons plusieurs forfaits:\n\n💾 Stockage:\n- Storage S: 300 FCFA (300 Mo)\n- Storage M: 700 FCFA (700 Mo) - Le plus populaire!\n- Storage L: 1000 FCFA (1 Go)\n\n⭐ Certifications:\n- ECO: 10 000 FCFA (étoile bleue)\n- CLASSIQUE: 20 000 FCFA (étoile verte)\n- VIP: 50 000 FCFA (étoile jaune)\n\n🚀 Boost Premium: 2 000 FCFA pour 7 jours",
      suggestions: ['Comment se certifier?', 'Mode freemium disponible?'],
    },
    'certification': {
      text: "Le système de certification offre 3 niveaux:\n\n🔵 ECO (10k FCFA): 2 emplacements, 1 coupon boost\n🟢 CLASSIQUE (20k FCFA): 3 emplacements, 2 coupons boost\n🟡 VIP (50k FCFA): 4 emplacements, 3 coupons boost\n\nLes certifications augmentent votre crédibilité et votre visibilité!",
      suggestions: ['Comment booster un produit?', 'Contactez-nous'],
    },
    'contacter': {
      text: "Vous pouvez contacter les vendeurs de plusieurs façons:\n\n📱 Via WhatsApp directement depuis l'app\n☎️ Par téléphone\n💬 Via notre système de messagerie intégré (texte, vocal, images)\n\nC'est simple et rapide!",
      suggestions: ['Autres fonctionnalités?', 'Télécharger NGOMA'],
    },
    'fonctionnalité': {
      text: "NGOMA propose des fonctionnalités innovantes:\n\n📸 Recherche par image\n🗺️ Géolocalisation des vendeurs\n💬 Commentaires multi-formats (texte, vocal, images)\n📍 Jusqu'à 4 emplacements boutique\n🚀 Sponsoring sur NGOMA, Facebook et Pinterest\n⭐ Système de certification pour la confiance",
      suggestions: ['Comment ça marche?', 'Quels sont les tarifs?'],
    },
    'freemium': {
      text: "Oui! Le mode gratuit vous permet de:\n\n✅ Publier jusqu'à 6 produits gratuitement\n✅ Tester toutes les fonctionnalités de base\n✅ Découvrir la plateforme sans engagement\n\nC'est parfait pour débuter!",
      suggestions: ['Quels sont les tarifs?', 'Comment télécharger?'],
    },
    'contact': {
      text: "Contactez NGOMA DIGITAL:\n\n📧 Email: contact@ngomadigital.com\n📱 Téléphone: +237 123 456 789\n📍 Localisation: Douala, Cameroun\n\nNotre équipe vous répondra rapidement!",
      suggestions: ['Télécharger NGOMA', 'Autres questions?'],
    },
    default: {
      text: "Je suis désolé, je n'ai pas bien compris votre question. 🤔\n\nVoici ce que je peux vous expliquer:\n• Comment télécharger NGOMA\n• Les tarifs et forfaits\n• Le système de certification\n• Comment contacter les vendeurs\n• Les fonctionnalités de l'app",
      suggestions: ['Télécharger NGOMA', 'Voir les tarifs', 'Contactez-nous'],
    },
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (userMessage) => {
    const lowercaseMessage = userMessage.toLowerCase()

    if (lowercaseMessage.includes('télécharger') || lowercaseMessage.includes('download') || lowercaseMessage.includes('installer')) {
      return responses['comment télécharger']
    } else if (lowercaseMessage.includes('tarif') || lowercaseMessage.includes('prix') || lowercaseMessage.includes('coût') || lowercaseMessage.includes('forfait')) {
      return responses['tarif']
    } else if (lowercaseMessage.includes('certif') || lowercaseMessage.includes('étoile')) {
      return responses['certification']
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('vendeur') || lowercaseMessage.includes('whatsapp')) {
      return responses['contacter']
    } else if (lowercaseMessage.includes('fonctionnalité') || lowercaseMessage.includes('fonction') || lowercaseMessage.includes('feature')) {
      return responses['fonctionnalité']
    } else if (lowercaseMessage.includes('freemium') || lowercaseMessage.includes('gratuit') || lowercaseMessage.includes('free')) {
      return responses['freemium']
    } else if (lowercaseMessage.includes('email') || lowercaseMessage.includes('téléphone') || lowercaseMessage.includes('adresse')) {
      return responses['contact']
    } else {
      return responses['default']
    }
  }

  const handleSendMessage = (message) => {
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: 'user', text: message }])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(message)
      setMessages((prev) => [...prev, { type: 'bot', text: response.text, suggestions: response.suggestions }])
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickQuestion = (question) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col transition-colors duration-300"
          >
            {/* Header */}
            <div className="bg-gradient-primary p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Assistant NGOMA</h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-white/90">En ligne</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user' ? 'bg-gradient-primary' : 'bg-white dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-700'}`}>
                      {message.type === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className={`p-3 rounded-2xl ${message.type === 'user' ? 'bg-gradient-primary text-white rounded-tr-none' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none shadow-md'}`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      {message.suggestions && (
                        <div className="mt-2 space-y-1">
                          {message.suggestions.map((suggestion, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuickQuestion(suggestion)}
                              className="block w-full text-left text-xs bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-2 rounded-lg transition-colors border border-purple-200 dark:border-purple-700"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-tl-none shadow-md">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Questions fréquentes:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-white dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-2 rounded-lg transition-colors border border-purple-200 dark:border-purple-700 text-left"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="bg-gradient-primary text-white p-2 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
