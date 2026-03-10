<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tous mes Projets</h1>
      <p class="text-lg text-slate-500 max-w-2xl mx-auto">
        Découvrez mon portfolio complet. Utilisez les filtres pour trier par technologie.
      </p>
    </div>

    <!-- Filtres -->
    <div class="flex flex-wrap justify-center gap-4 mb-12" v-motion-fade-visible-once>
      <button 
        v-for="tech in allTechs" 
        :key="tech"
        @click="activeFilter = tech"
        class="px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="activeFilter === tech ? 'bg-accent text-white shadow-lg shadow-accent/25' : 'glass hover:bg-slate-200 dark:hover:bg-white/10 cursor-pointer text-slate-700 dark:text-slate-300'"
      >
        {{ tech }}
      </button>
    </div>

    <!-- Grille de projets -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        v-for="project in filteredProjects" 
        :key="project.slug" 
        :project="project" 
        v-motion-pop-visible-once
      />
    </div>

    <div v-if="filteredProjects.length === 0" class="text-center py-20 text-slate-500">
      Aucun projet ne correspond à ce filtre.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('Tous')

const allTechs = ['Tous', 'Vue 3', 'Nuxt 3', 'TailwindCSS', 'TypeScript', 'Node.js']

const projects = [
  {
    title: 'E-commerce Futuriste',
    slug: 'ecommerce-futuriste',
    description: 'Une plateforme e-commerce ultra rapide avec un design neumorphisme.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Nuxt 3', 'TailwindCSS'],
    github: 'https://github.com',
    link: 'https://example.com'
  },
  {
    title: 'SaaS Analytics Dashboard',
    slug: 'saas-dashboard',
    description: 'Dashboard en temps réel pour le suivi des métriques SaaS.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Vue 3', 'TypeScript'],
    github: 'https://github.com',
    link: 'https://example.com'
  },
  {
    title: 'API Gateway Management',
    slug: 'api-gateway',
    description: 'Interface de gestion pour API Gateway avec Node.js.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400',
    technologies: ['Node.js', 'Vue 3', 'TailwindCSS'],
    github: 'https://github.com'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.technologies.includes(activeFilter.value))
})

useSeoMeta({
  title: 'Projets - DevPortfolio',
  description: 'Liste de tous les projets du développeur'
})
</script>
