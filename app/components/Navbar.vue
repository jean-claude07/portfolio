<template>
  <header
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="scrolled ? 'py-3 bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20' : 'py-5 bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center glow-accent-sm">
          <span class="font-black text-white text-sm">JC</span>
        </div>
        <span class="font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
          Jean<span class="text-accent">.</span>Claude
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-slate-400 hover:text-white group"
          active-class="text-white"
        >
          <span class="relative z-10">{{ link.name }}</span>
          <span class="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-4/5 transition-all duration-300" />
        </NuxtLink>
      </nav>

      <!-- Right Side -->
      <div class="flex items-center gap-3">
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
        <a
          href="https://github.com/jean-claude07"
          target="_blank"
          class="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/8 text-sm font-medium text-slate-300 hover:text-white hover:border-accent/30 transition-all duration-300"
        >
          <Github class="w-4 h-4" />
          GitHub
        </a>
        <!-- Mobile menu button -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden p-2 rounded-lg glass border border-white/8 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <Menu v-if="!menuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="dropdown">
      <div v-if="menuOpen" class="md:hidden mt-2 mx-4 rounded-xl glass-strong border border-white/8 p-4 space-y-1">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          @click="menuOpen = false"
          class="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          active-class="text-white bg-white/5"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Github } from 'lucide-vue-next'
import { navLinks } from '~/data/portfolio'

const scrolled = ref(false)
const menuOpen = ref(false)

const links = navLinks

const handleScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
