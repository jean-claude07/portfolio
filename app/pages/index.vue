<template>
  <div>
    <HeroSection />

    <!-- About section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
            <span class="text-xs font-mono tracking-widest text-accent uppercase">À propos</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Développeur passionné par
            <span class="text-gradient"> la qualité.</span>
          </h2>
          <p class="text-slate-400 leading-relaxed mb-8 text-lg">
            Je suis un développeur Full Stack avec plus de 5 ans d'expérience dans la création d'applications web performantes et scalables. Je me spécialise dans l'écosystème Vue / Nuxt et le développement backend Node.js.
          </p>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="glass rounded-xl p-4 border border-white/5 text-center">
              <div class="text-3xl font-black text-gradient mb-1">{{ stat.value }}</div>
              <div class="text-xs text-slate-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
          class="glass rounded-2xl border border-white/5 p-8 space-y-6"
        >
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-slate-300">{{ skill.name }}</span>
              <span class="text-sm font-mono text-accent">{{ skill.percent }}%</span>
            </div>
            <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-1000"
                :style="{ width: skill.percent + '%' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
          <span class="text-xs font-mono tracking-widest text-accent uppercase">Stack Technique</span>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">Technologies maîtrisées</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechCard v-for="tech in technologies" :key="tech.name" :name="tech.name" :level="tech.level">
          <template #icon>
            <component :is="tech.icon" :class="['w-7 h-7', tech.color]" />
          </template>
        </TechCard>
      </div>
    </section>

    <!-- Projects section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-end justify-between mb-16"
      >
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <span class="text-xs font-mono tracking-widest text-accent uppercase">Portfolio</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">Projets Récents</h2>
          <p class="text-slate-500 mt-3 max-w-xl">Une sélection de mes meilleurs travaux.</p>
        </div>
        <NuxtLink
          to="/projects"
          class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-white/8 text-sm font-medium text-slate-300 hover:text-accent hover:border-accent/30 transition-all"
        >
          Voir tout <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Terminal, Database, Layout, Server, Cpu, Globe, ArrowRight, Boxes } from 'lucide-vue-next'

useSeoMeta({
  title: 'Jean Claude · Full Stack Developer',
  description: 'Portfolio moderne — développeur Full Stack spécialisé en Vue, Nuxt et Node.js.'
})

const stats = [
  { value: '5+', label: "Années d'expérience" },
  { value: '30+', label: 'Projets livrés' },
  { value: '99%', label: 'Satisfaction client' }
]

const skills = [
  { name: 'Vue 3 / Nuxt', percent: 95 },
  { name: 'TypeScript', percent: 90 },
  { name: 'Node.js / API', percent: 85 },
  { name: 'Database Design', percent: 80 },
  { name: 'DevOps / Docker', percent: 70 },
]

const technologies = [
  { name: 'Vue 3', icon: Layout, level: 'Expert', color: 'text-emerald-400' },
  { name: 'Nuxt 3', icon: Globe, level: 'Expert', color: 'text-accent' },
  { name: 'TypeScript', icon: Terminal, level: 'Avancé', color: 'text-blue-400' },
  { name: 'Node.js', icon: Server, level: 'Avancé', color: 'text-green-400' },
  { name: 'PostgreSQL', icon: Database, level: 'Intermédiaire', color: 'text-sky-400' },
  { name: 'TailwindCSS', icon: Layout, level: 'Expert', color: 'text-cyan-400' },
  { name: 'Docker', icon: Cpu, level: 'Intermédiaire', color: 'text-blue-500' },
  { name: 'GraphQL', icon: Boxes, level: 'Intermédiaire', color: 'text-pink-400' },
]

const projects = [
  {
    title: 'E-commerce Futuriste',
    slug: 'ecommerce-futuriste',
    description: 'Plateforme e-commerce ultra-rapide avec UI neumorphisme, panier dynamique et checkout Stripe optimisé.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Nuxt 3', 'TailwindCSS', 'Stripe', 'Supabase'],
    github: 'https://github.com',
    link: 'https://example.com'
  },
  {
    title: 'SaaS Analytics Dashboard',
    slug: 'saas-dashboard',
    description: 'Dashboard temps réel pour SaaS — métriques en direct via WebSocket, graphiques D3.js et filtres avancés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Vue 3', 'TypeScript', 'GraphQL', 'D3.js'],
    github: 'https://github.com',
    link: 'https://example.com'
  },
  {
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'Générateur de contenu propulsé par OpenAI et Nuxt 3, avec historique persistant et export Markdown.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Nuxt 3', 'OpenAI API', 'Pinia', 'TailwindCSS'],
    github: 'https://github.com',
    link: 'https://example.com'
  }
]
</script>
