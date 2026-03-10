<div align="center">

# 🚀 JCP Dev Portfolio

**Portfolio moderne et futuriste pour développeur Full Stack**  
Construit avec Nuxt 4 · TypeScript · TailwindCSS · VueUse Motion

[![Nuxt](https://img.shields.io/badge/Nuxt-4.3.1-00DC82?style=flat-square&logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Aperçu

Un portfolio développeur **moderne, futuriste et minimaliste** inspiré de Vercel, Linear, Apple et Raycast. Il intègre des animations avancées, des effets de parallaxe multi-couches, un curseur personnalisé et une palette de couleurs sombre avec accents neon.

**Design System**

- 🎨 Glassmorphism & neumorphisme léger
- 🌌 Fond sombre `#060912` avec accents Indigo `#6366f1` / Cyan `#22d3ee` / Violet `#a855f7`
- ✨ Effets lumineux (glow), gradients animés, Border Beam
- 📐 100 % responsive — mobile first

---

## 🛠️ Stack Technique

| Couche | Technologie |
|--------|-------------|
| Framework | [Nuxt 4](https://nuxt.com) |
| Langage | [TypeScript](https://www.typescriptlang.org) |
| Styling | [TailwindCSS 3](https://tailwindcss.com) |
| Animations | [@vueuse/motion](https://motion.vueuse.org) |
| Icônes | [Lucide Vue Next](https://lucide.dev) |
| Images | [@nuxt/image](https://image.nuxtjs.org) |
| SEO | [@nuxtjs/seo](https://nuxtseo.com) |
| Blog | [@nuxt/content](https://content.nuxt.com) |
| Dark Mode | [@nuxtjs/color-mode](https://color-mode.nuxtjs.org) |

---

## 📂 Structure du Projet

```
jcp/
├── app/                        # Répertoire source Nuxt 4
│   ├── app.vue                 # Point d'entrée Vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css        # TailwindCSS + utilitaires globaux
│   ├── components/
│   │   ├── AnimatedBackground.vue  # Canvas particules + orbes réactives
│   │   ├── ContactForm.vue         # Formulaire avec validation animée
│   │   ├── CustomCursor.vue        # Curseur double-anneau avec lerp
│   │   ├── Footer.vue
│   │   ├── HeroSection.vue         # Hero avec parallaxe multi-couches
│   │   ├── Navbar.vue              # Navbar sticky glassmorphism
│   │   ├── ProjectCard.vue         # Carte 3D tilt + spotlight
│   │   ├── TechCard.vue            # Badge technologie animé
│   │   └── ThemeToggle.vue         # Toggle dark/light
│   ├── composables/
│   │   ├── useMouse.ts             # Suivi souris avec lerp smoothing
│   │   └── useScrollParallax.ts    # Parallaxe au scroll lerp-smoothed
│   ├── layouts/
│   │   └── default.vue             # Layout principal (scroll bar, back-to-top)
│   ├── pages/
│   │   ├── index.vue               # Page d'accueil
│   │   ├── contact.vue             # Formulaire de contact
│   │   ├── blog/
│   │   │   └── index.vue           # Liste des articles (Nuxt Content)
│   │   └── projects/
│   │       ├── index.vue           # Liste des projets (avec filtres)
│   │       └── [slug].vue          # Détail d'un projet
│   └── utils/
│       └── index.ts                # Utilitaire `cn()` (clsx + tailwind-merge)
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** >= 20.x
- **npm** >= 10.x

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/jcp.git
cd jcp

# Installer les dépendances
npm install
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Production

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

### Génération statique

```bash
npm run generate
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — Hero, À propos, Technologies, Projets récents |
| `/projects` | Liste complète des projets avec filtres par technologie |
| `/projects/[slug]` | Détail complet d'un projet |
| `/blog` | Liste des articles techniques (Nuxt Content) |
| `/contact` | Formulaire de contact |

---

## 🎨 Fonctionnalités

### 🖱️ Interactions Souris
- **Curseur personnalisé** — double anneau avec lerp, curseur natif masqué
- **Parallaxe multi-couches hero** — 4 profondeurs indépendantes selon la position souris
- **Orbes réactives** — gradient du background suit la souris
- **Tilt 3D sur les cartes** — effet perspective en temps réel (`ProjectCard`)
- **Spotlight glow** — halo lumineux qui suit le curseur dans les cartes

### 🌀 Animations
- **Canvas particules** — réseau de points connectés (indigo, cyan, violet)
- **Anneaux orbitaux** — 3 cercles concentriques en rotation dans le Hero
- **Typewriter effect** — texte qui s'écrit et s'efface en boucle
- **Scroll reveal** — sections apparaissent progressivement au scroll (vueuse/motion)
- **Page transitions** — blur + fade entre les routes
- **Gradient animé** — bouton CTA avec couleurs arc-en-ciel en rotation

### 🔧 Composables Réutilisables

#### `useMouse(lerpFactor?)`
Fournit la position brute et lissée de la souris (normalisée de -1 à 1).

```ts
const { lerpX, lerpY } = useMouse(0.06)

// Utilisation dans un template
:style="{ transform: `translate(${lerpX * 20}px, ${lerpY * 15}px)` }"
```

#### `useScrollParallax(lerpFactor?)`
Fournit la position de scroll brute et lissée.

```ts
const { lerpScroll, scrollPercent } = useScrollParallax(0.1)
```

### 📊 Layout
- **Scroll progress bar** — barre colorée (indigo→cyan→violet) en haut de page
- **Back to top button** — apparaît après 400px de scroll, animation scale
- **Navbar sticky** — transparent → glass au scroll, menu mobile animé
- **Dark mode** — auto selon préférence système + toggle manuel

### ⚡ Performance
- Images optimisées via `@nuxt/image` (sharp, lazy-loading)
- Animations avec `will-change-transform` pour GPU compositing
- Particles animés en `requestAnimationFrame` avec cleanup `onBeforeUnmount`
- Lerp interpolation — animations 60fps sans jank

---

## 🎨 Personnalisation

### Modifier les informations personnelles

Modifiez directement dans les fichiers :

- **Nom / Titre / Bio** → `app/components/HeroSection.vue`
- **Technologies** → `app/pages/index.vue` (tableau `technologies`)
- **Projets** → `app/pages/index.vue` (tableau `projects`) et `app/pages/projects/index.vue`
- **Liens sociaux** → `app/components/Footer.vue`

### Modifier le Design System

Les couleurs principales sont définies dans `tailwind.config.ts` :

```ts
colors: {
  background: '#060912',   // Fond principal
  surface: '#0d1224',      // Fond des cartes
  accent: {
    DEFAULT: '#6366f1',    // Indigo — couleur principale
    secondary: '#22d3ee',  // Cyan — couleur secondaire
    tertiary: '#a855f7',   // Violet — couleur tertiaire
  }
}
```

### Ajouter un projet

Ajoutez une entrée dans le tableau `projects` de `app/pages/index.vue` et `app/pages/projects/index.vue` :

```ts
{
  title: 'Mon Projet',
  slug: 'mon-projet',
  description: 'Description du projet.',
  image: 'https://url-de-limage.com/preview.jpg',
  technologies: ['Nuxt 3', 'TailwindCSS'],
  github: 'https://github.com/user/repo',
  link: 'https://monprojet.com'
}
```

### Ajouter un article de blog

Créez un fichier Markdown dans `content/` :

```bash
content/blog/mon-article.md
```

```md
---
title: Mon Article
description: Description SEO
date: 2026-03-09
tags: [nuxt, vue, typescript]
---

Contenu de l'article...
```

---

## 🌐 SEO

Le SEO est géré par `@nuxtjs/seo`. Chaque page définit ses méta via :

```ts
useSeoMeta({
  title: 'Titre de la page',
  description: 'Description SEO'
})
```

La configuration globale est dans `nuxt.config.ts` :

```ts
site: {
  url: 'https://votre-domaine.com',
  name: 'Developer Portfolio',
  defaultLocale: 'fr'
}
```

---

## 📦 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production (Nitro server) |
| `npm run generate` | Génération statique (SSG) |
| `npm run preview` | Prévisualise le build de production |
| `npm run postinstall` | Prépare Nuxt (auto après `npm install`) |

---

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
# Build command
npm run generate

# Publish directory
.output/public
```

### Node.js Server

```bash
npm run build
node .output/server/index.mjs
```

---

## 📝 Licence

MIT © 2026 Jean Claude

---

<div align="center">

Fait avec ❤️ et beaucoup de ☕ · Propulsé par [Nuxt](https://nuxt.com)

</div>
