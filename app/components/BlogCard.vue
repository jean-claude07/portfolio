<template>
  <article
    class="group relative flex flex-col h-full rounded-2xl overflow-hidden glass border border-white/5 hover:border-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
    v-motion-slide-visible-once-bottom
  >
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
      
      <!-- Category badge -->
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-accent text-white shadow-lg shadow-accent/20">
          {{ post.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-3 mb-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
        <div class="flex items-center gap-1">
          <Calendar class="w-3 h-3" />
          {{ post.date }}
        </div>
        <div class="w-1 h-1 rounded-full bg-slate-700" />
        <div class="flex items-center gap-1">
          <Clock class="w-3 h-3" />
          {{ post.readingTime }}
        </div>
      </div>

      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-tight">
        {{ post.title }}
      </h3>
      
      <p class="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">
        {{ post.excerpt }}
      </p>

      <div class="mt-auto">
        <NuxtLink
          :to="'/blog/' + post.slug"
          class="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-accent transition-all duration-300 group/link"
        >
          Lire l'article
          <ArrowRight class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </NuxtLink>
      </div>
    </div>

    <!-- Hover highlight line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </article>
</template>

<script setup lang="ts">
import { Calendar, Clock, ArrowRight } from 'lucide-vue-next'
import type { BlogPost } from '~/data/portfolio'

defineProps<{
  post: BlogPost
}>()
</script>
