<template>
  <div class="max-w-4xl mx-auto py-16 px-4">
    <div class="text-center mb-16" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Blog</h1>
      <p class="text-lg text-slate-500 max-w-2xl mx-auto">
        Articles sur le développement frontend, l'architecture et les performances web.
      </p>
    </div>
    
    <div class="text-center p-12 glass rounded-2xl border border-slate-200 dark:border-white/10 mt-12" v-motion-slide-visible-once-bottom>
      <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
        <PenTool class="w-8 h-8" />
      </div>
      <h3 class="text-2xl font-bold mb-4">À venir prochainement</h3>
      <p class="text-slate-500">Je prépare actuellement mes premiers articles de blog.</p>
    </div>
  </div>
</template>

<script setup>
import { PenTool } from 'lucide-vue-next'

useSeoMeta({
  title: 'Blog - DevPortfolio',
  description: 'Articles et pensées sur le web'
})
</script>
