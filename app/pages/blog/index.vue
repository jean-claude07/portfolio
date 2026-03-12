<template>
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Blog & Pensées</h1>
      <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
        Partages d'expériences sur le développement web, l'architecture logicielle et les nouvelles technologies.
      </p>
    </div>

    <!-- Filtres par catégorie -->
    <div class="flex flex-wrap justify-center gap-4 mb-12" v-motion-fade-visible-once>
      <button 
        v-for="cat in allCategories" 
        :key="cat"
        @click="activeFilter = cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition-all"
        :class="activeFilter === cat ? 'bg-accent text-white shadow-lg shadow-accent/25' : 'glass hover:bg-white/10 cursor-pointer text-slate-300'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grille d'articles -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      <BlogCard 
        v-for="post in filteredPosts" 
        :key="post.slug" 
        :post="post" 
      />
    </div>

    <div v-if="filteredPosts.length === 0" class="text-center py-20 text-slate-500">
      Aucun article ne correspond à cette catégorie.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blogPosts } from '~/data/portfolio'

const activeFilter = ref('Tous')

const allCategories = computed(() => {
  const cats = new Set(['Tous'])
  blogPosts.forEach(p => cats.add(p.category))
  return Array.from(cats)
})

const filteredPosts = computed(() => {
  if (activeFilter.value === 'Tous') return blogPosts
  return blogPosts.filter(p => p.category === activeFilter.value)
})

useSeoMeta({
  title: 'Blog - Jean Claude Dev',
  description: 'Articles sur le développement web et l\'architecture moderne.'
})
</script>
