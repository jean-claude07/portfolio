<template>
  <article v-if="project" class="max-w-4xl mx-auto py-16 px-4">
    <div class="mb-8">
      <NuxtLink to="/projects" class="inline-flex items-center text-slate-500 hover:text-accent mb-8 transition-colors">
        <ArrowLeft class="w-4 h-4 mr-2" /> Retour aux projets
      </NuxtLink>
      
      <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">{{ project.title }}</h1>
      
      <div class="flex flex-wrap gap-3 mb-8">
        <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 text-sm font-medium rounded-md bg-accent/10 text-accent border border-accent/20">
          {{ tech }}
        </span>
      </div>
    </div>

    <NuxtImg 
      :src="project.image" 
      :alt="project.title"
      class="w-full rounded-2xl shadow-2xl mb-12 border border-slate-200 dark:border-white/10"
    />

    <div class="prose prose-slate dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">À propos de ce projet</h2>
      <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
        {{ project.description }}
      </p>

      <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Problèmes résolus</h3>
      <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-12">
        <li>Optimisation des performances avec Nuxt Image et du lazy loading.</li>
        <li>Mise en place d'une architecture modulaire et scalable.</li>
        <li>Implémentation du mode sombre de manière fluide avec TailwindCSS.</li>
      </ul>
    </div>

    <div class="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
      <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity">
        <Github class="w-5 h-5" /> Code Source
      </a>
      <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25">
        <ExternalLink class="w-5 h-5" /> Voir la démo
      </a>
    </div>
  </article>
</template>

<script setup>
import { ArrowLeft, Github, ExternalLink } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { projects } from '~/data/portfolio'

const route = useRoute()

// utiliser le fichier portfolio.ts pour récupérer les données

const project = projects.find(p => p.slug === route.params.slug)

if (project) {
  useSeoMeta({
    title: `${project.title} - DevPortfolio`,
    description: project.description
  })
}
</script>
