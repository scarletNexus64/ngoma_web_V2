# NGOMA DIGITAL - Site Web Vitrine

Site web vitrine moderne et professionnel pour NGOMA DIGITAL SARL, présentant la marketplace NGOMA avec un design épuré, des animations fluides et des fonctionnalités interactives.

## ✨ Nouvelles Fonctionnalités

- 🎨 **Design Moderne Amélioré** - Interface épurée avec l'image hero bien visible
- ⏳ **Page de Chargement** - Loader animé avec barre de progression
- 🍪 **Gestion des Cookies** - Bannière de consentement conforme RGPD
- 🤖 **Chatbot Intelligent** - Assistant virtuel avec Q&A prédéfinies
- 🎭 **Animations Avancées** - Blob animations, transitions fluides
- 📱 **Design Ultra-Responsive** - Optimisé pour tous les écrans

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool rapide et performant
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations fluides
- **Lucide React** - Icônes modernes et élégantes

## 🎨 Palette de Couleurs

Basée sur le logo NGOMA :
- **Primary (Violet)** : `#8B5CF6`
- **Secondary (Rose)** : `#EC4899`
- **Accent (Orange)** : `#F97316`

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🏗️ Structure du Projet

```
Ngoma-web-v2/
├── img/                    # Images (logo, hero)
├── src/
│   ├── components/         # Composants React
│   │   ├── Navbar.jsx     # Barre de navigation moderne
│   │   ├── Hero.jsx       # Section héro avec design amélioré
│   │   ├── Features.jsx   # Fonctionnalités de NGOMA
│   │   ├── Pricing.jsx    # Forfaits et certifications
│   │   ├── Download.jsx   # Section téléchargement
│   │   ├── Footer.jsx     # Pied de page
│   │   ├── Loader.jsx     # 🆕 Page de chargement animée
│   │   ├── CookieConsent.jsx  # 🆕 Bannière de cookies
│   │   └── Chatbot.jsx    # 🆕 Assistant virtuel
│   ├── App.jsx            # Composant principal
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── index.html             # HTML principal
├── tailwind.config.js     # Configuration Tailwind
├── vite.config.js         # Configuration Vite
└── package.json           # Dépendances
```

## ✨ Fonctionnalités du Site

### 🆕 Page de Chargement (Loader)
- Animation du logo avec effet pulse
- Barre de progression animée
- Spinner multicolore (violet, rose, orange)
- Transition fluide vers le contenu

### 🆕 Bannière de Cookies (CookieConsent)
- Affichage automatique après 2 secondes
- 3 options : Tout accepter, Essentiels uniquement, Personnaliser
- Panneau de paramètres détaillé pour chaque type de cookie
- Stockage local des préférences
- Design moderne avec animations

### 🆕 Chatbot Intelligent
- Icône animée en bas à droite
- Interface de chat moderne et responsive
- Questions rapides prédéfinies
- Réponses automatiques intelligentes sur :
  - Téléchargement de l'app
  - Tarifs et forfaits
  - Système de certification
  - Contact vendeurs
  - Fonctionnalités
  - Mode freemium
  - Informations de contact
- Animation de "typing" pour simuler l'écriture
- Suggestions contextuelles après chaque réponse

### Section Hero (Design Amélioré)
- Image hero bien visible avec effets blob animés
- Design en split-screen moderne
- Badges et pills informatifs
- Cartes flottantes avec statistiques
- Animations fluides et progressives
- Boutons CTA avec icônes animées

### Section Fonctionnalités
- 6 fonctionnalités principales de NGOMA
- Recherche par image
- Carte interactive
- Contact direct (WhatsApp, téléphone)
- Système de commentaires multi-formats
- Certifications
- Boost & Sponsoring

### Section Tarifs
Deux catégories avec onglets :

**Forfaits de Stockage :**
- Storage S : 300 FCFA / 300 Mo
- Storage M : 700 FCFA / 700 Mo
- Storage L : 1000 FCFA / 1 Go

**Certifications :**
- ECO : 10 000 FCFA (étoile bleue, 2 emplacements)
- CLASSIQUE : 20 000 FCFA (étoile verte, 3 emplacements)
- VIP : 50 000 FCFA (étoile jaune, 4 emplacements)

**Boost Premium :**
- 2 000 FCFA pour 7 jours de sponsoring

### Section Téléchargement
- Liens vers App Store et Google Play
- Mockup de téléphone animé
- Statistiques de l'application

### Footer
- Informations de contact
- Liens utiles (Produit, Entreprise, Support, Légal)
- Newsletter
- Réseaux sociaux
- Copyright et mentions légales

## 🎭 Animations

Le site utilise Framer Motion pour des animations fluides :
- Fade in / Slide up pour les sections
- Hover effects sur les cartes
- Animations de scroll
- Transitions fluides entre les états

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` pour changer les couleurs de la marque.

### Modifier le contenu
Chaque composant dans `src/components/` peut être édité indépendamment.

### Ajouter des sections
Créez un nouveau composant dans `src/components/` et importez-le dans `App.jsx`.

## 📞 Contact

**NGOMA DIGITAL SARL**
- Email : contact@ngomadigital.com
- Téléphone : +237 123 456 789
- Localisation : Douala, Cameroun

## 📄 Licence

© 2026 NGOMA DIGITAL SARL. Tous droits réservés.

---

Fait avec ❤️ en Afrique
