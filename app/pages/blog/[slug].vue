<template>
  <div v-if="post" class="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
    <!-- Back button -->
    <NuxtLink 
      to="/blog" 
      class="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-12 group"
    >
      <ArrowLeft class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      Retour au blog
    </NuxtLink>

    <article v-motion-fade-visible-once>
      <!-- Post Meta -->
      <div class="flex items-center gap-4 mb-8">
        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-accent text-white">
          {{ post.category }}
        </span>
        <div class="flex items-center gap-3 text-sm font-mono text-slate-500">
          <span class="flex items-center gap-1.5"><Calendar class="w-4 h-4" /> {{ post.date }}</span>
          <span class="w-1 h-1 rounded-full bg-slate-700" />
          <span class="flex items-center gap-1.5"><Clock class="w-4 h-4" /> {{ post.readingTime }}</span>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter">
        {{ post.title }}
      </h1>

      <!-- Cover Image -->
      <div class="aspect-video rounded-3xl overflow-hidden glass border border-white/5 mb-12 shadow-2xl shadow-black/40">
        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
      </div>

      <!-- Content Placeholder (since it's mock data) -->
      <div class="prose prose-invert prose-slate prose-lg max-w-none">
        <p class="text-xl text-slate-300 leading-relaxed font-medium mb-8">
          {{ post.excerpt }}
        </p>
        
        <div class="space-y-6 text-slate-400 leading-relaxed">
          <div v-html="post.content"></div>
        </div>
      </div>
    </article>

    <!-- Footer of the post -->
    <br/>
    <div class="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
      <div class="flex items-center mt-20 gap-4" style="margin-top: 20px;">
        <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Jean&backgroundColor=transparent" class="w-12 h-12 rounded-full glass border border-white/10" alt="Jean Claude" />
        <div>
          <p class="text-sm font-bold text-white">Jean Claude</p>
          <p class="text-xs text-slate-500">Full Stack Developer</p>
        </div>
      </div>
      <div class="flex gap-4">
        <a href="#" class="p-3 rounded-full glass border border-white/10 text-slate-400 hover:text-accent transition-all">
          <Share2 class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-white mb-4">Article non trouvé</h2>
      <NuxtLink to="/blog" class="text-accent hover:underline">Retour au blog</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { blogPosts } from '~/data/portfolio'

const route = useRoute()
const post = computed(() => blogPosts.find(p => p.slug === route.params.slug))

useSeoMeta({
  title: () => post.value ? `${post.value.title} - Blog` : 'Article non trouvé',
  description: () => post.value?.excerpt
})
</script>
