<template>
  <footer class="relative mt-24 border-t border-white/5 bg-surface/50 backdrop-blur-xl">
    <!-- Top accent line -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
              <span class="font-black text-white text-xs">JC</span>
            </div>
            <span class="font-bold text-white">Jean<span class="text-accent">.</span>dev</span>
          </div>
          <p class="text-xs text-slate-500">Full Stack Developer · Disponible pour missions</p>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg glass border border-white/5 text-slate-500 hover:text-accent hover:border-accent/30 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-accent/20">
            <Github class="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg glass border border-white/5 text-slate-500 hover:text-accent-secondary hover:border-accent-secondary/30 transition-all duration-300 hover:scale-110">
            <Linkedin class="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg glass border border-white/5 text-slate-500 hover:text-accent-tertiary hover:border-accent-tertiary/30 transition-all duration-300 hover:scale-110">
            <Twitter class="w-4 h-4" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600 font-mono">
        &copy; {{ new Date().getFullYear() }} Jean Claude · Crafted with Nuxt 3 & ❤️
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin, Twitter } from 'lucide-vue-next'
</script>
