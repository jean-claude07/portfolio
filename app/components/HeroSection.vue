<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

    <!-- Parallax layer 1 (slowest, deep background) -->
    <div
      class="absolute inset-0 pointer-events-none will-change-transform"
      :style="{ transform: `translate(${lerpX * -18}px, ${lerpY * -12}px)` }"
    >
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[80px]" />
      <div class="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-secondary/5 blur-[80px]" />
    </div>

    <!-- Parallax layer 2 (orbital rings) -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none will-change-transform"
      :style="{
        transform: `translate(calc(-50% + ${lerpX * 8}px), calc(-50% + ${lerpY * 6}px))`
      }"
    >
      <div class="absolute inset-0 rounded-full border border-white/[0.04] animate-spin-slow" />
      <div class="absolute inset-[50px] rounded-full border border-accent/[0.07] animate-[spin_18s_linear_infinite_reverse]" />
      <div class="absolute inset-[120px] rounded-full border border-accent-secondary/[0.06] animate-spin-slow [animation-delay:-5s]" />

      <!-- Dots on orbits -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/60 animate-spin-slow origin-[50%_350px]" />
      <div class="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-accent-secondary/60 animate-[spin_18s_linear_infinite_reverse] origin-[50%_300px]" />
    </div>

    <!-- Parallax layer 3 (content, foreground — slightly counter-moves) -->
    <div
      class="relative z-10 max-w-5xl mx-auto space-y-8 will-change-transform"
      :style="{ transform: `translate(${lerpX * 6}px, ${lerpY * 4}px)` }"
    >
      <!-- Status badge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 text-sm font-medium text-slate-300 border-beam"
      >
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary" />
        </span>
        Disponible pour des projets freelance
      </div>

      <!-- Avatar — parallaxes the most (closest "layer") -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 700, type: 'spring', stiffness: 100 } }"
        class="relative w-36 h-36 mx-auto will-change-transform"
        :style="{ transform: `translate(${lerpX * 14}px, ${lerpY * 10}px)` }"
      >
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary animate-glow-pulse blur-xl opacity-60" />
        <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary opacity-30 animate-spin-slow" />
        <img
          src="https://api.dicebear.com/9.x/notionists/svg?seed=Jean&backgroundColor=transparent"
          alt="Jean Claude"
          class="relative w-36 h-36 rounded-full object-cover border-2 border-white/10 bg-surface z-10"
        />
      </div>

      <!-- Heading -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
      >
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-3 text-white">
          Jean Claude
        </h1>
        <div class="text-2xl md:text-4xl font-bold mt-4">
          <span class="text-gradient animate-text-shimmer bg-[length:200%_auto]">Full Stack Developer</span>
        </div>
      </div>

      <!-- Typewriter -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 500 } }"
        class="max-w-2xl mx-auto"
      >
        <p class="text-lg md:text-xl text-slate-400 leading-relaxed font-mono h-8">
          <span class="text-accent-secondary">&gt;</span>
          {{ displayedText }}<span class="animate-pulse text-accent-secondary font-bold">|</span>
        </p>
      </div>

      <!-- Tech badges -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
        class="flex flex-wrap items-center justify-center gap-2"
      >
        <span v-for="badge in badges" :key="badge" class="px-3 py-1 text-xs font-medium rounded-full glass border border-white/5 text-slate-400">
          {{ badge }}
        </span>
      </div>

      <!-- CTA Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 700 } }"
        class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
      >
        <NuxtLink to="/projects" class="group relative w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white overflow-hidden isolate">
          <span class="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-[length:200%_auto] animate-gradient-x" />
          <span class="absolute inset-[1px] rounded-full bg-background group-hover:bg-transparent transition-colors duration-300" />
          <span class="relative z-10 text-gradient group-hover:text-white transition-all duration-300">
            Voir mes projets →
          </span>
        </NuxtLink>
        <NuxtLink to="/contact" class="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/10 font-semibold text-slate-300 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-0.5">
          Me contacter
        </NuxtLink>
      </div>

      <!-- Scroll indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1200 } }"
        class="pt-8"
      >
        <div class="flex flex-col items-center gap-2 text-slate-600">
          <span class="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div class="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
        </div>
      </div>
    </div>

    <!-- Parallax decorative floating elements -->
    <div
      class="absolute top-[15%] right-[8%] w-24 h-24 pointer-events-none will-change-transform opacity-30"
      :style="{ transform: `translate(${lerpX * -22}px, ${lerpY * -16}px)` }"
    >
      <div class="w-full h-full rounded-2xl border border-accent/20 rotate-12 animate-float" />
    </div>
    <div
      class="absolute bottom-[20%] left-[6%] w-16 h-16 pointer-events-none will-change-transform opacity-20"
      :style="{ transform: `translate(${lerpX * 20}px, ${lerpY * 14}px)` }"
    >
      <div class="w-full h-full rounded-xl border border-accent-secondary/30 -rotate-6 animate-float-slow" />
    </div>
    <div
      class="absolute top-[40%] left-[10%] w-3 h-3 pointer-events-none will-change-transform"
      :style="{ transform: `translate(${lerpX * -30}px, ${lerpY * 20}px)` }"
    >
      <div class="w-3 h-3 rounded-full bg-accent/60 animate-pulse glow-accent-sm" />
    </div>
    <div
      class="absolute top-[25%] right-[20%] w-2 h-2 pointer-events-none will-change-transform"
      :style="{ transform: `translate(${lerpX * 25}px, ${lerpY * -18}px)` }"
    >
      <div class="w-2 h-2 rounded-full bg-accent-secondary/60 animate-pulse" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMouse } from '~/composables/useMouse'

const { lerpX, lerpY } = useMouse(0.06)

const badges = ['Nuxt 3', 'Vue 3', 'TypeScript', 'Node.js', 'TailwindCSS', 'Docker', 'PostgreSQL', 'GraphQL']

const texts = [
  "Building modern, scalable web experiences.",
  "Crafting pixel-perfect interfaces with Vue.",
  "Designing systems that scale to millions.",
  "Turning ideas into impactful products.",
]

const displayedText = ref('')
let charIndex = 0
let textIndex = 0
let isDeleting = false
let timeout: ReturnType<typeof setTimeout>

function typewriter() {
  const current = texts[textIndex]
  if (!isDeleting) {
    displayedText.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) {
      isDeleting = true
      timeout = setTimeout(typewriter, 2500)
      return
    }
  } else {
    displayedText.value = current.slice(0, --charIndex)
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }
  }
  timeout = setTimeout(typewriter, isDeleting ? 28 : 52)
}

onMounted(() => { timeout = setTimeout(typewriter, 800) })
onBeforeUnmount(() => clearTimeout(timeout))
</script>
