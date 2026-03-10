<template>
  <article
    ref="card"
    class="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="cardStyle"
    v-motion-slide-visible-once-bottom
  >
    <!-- Glow spotlight following mouse -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 rounded-2xl"
      :style="spotlightStyle"
    />

    <!-- Image -->
    <div class="relative h-56 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

      <!-- Overlay badges on image top -->
      <div class="absolute top-4 right-4 flex gap-2">
        <a v-if="project.github" :href="project.github" target="_blank" @click.stop class="p-2 rounded-lg glass border border-white/10 text-slate-300 hover:text-accent hover:border-accent/40 transition-all hover:scale-110 relative z-20">
          <Github class="w-4 h-4" />
        </a>
        <a v-if="project.link" :href="project.link" target="_blank" @click.stop class="p-2 rounded-lg glass border border-white/10 text-slate-300 hover:text-accent-secondary hover:border-accent-secondary/40 transition-all hover:scale-110 relative z-20">
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 relative z-10">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
        {{ project.title }}
      </h3>
      <p class="text-sm text-slate-400 mb-5 line-clamp-2 leading-relaxed">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-400 border border-white/5 hover:border-accent/30 hover:text-accent transition-all"
        >
          {{ tech }}
        </span>
      </div>

      <NuxtLink
        v-if="project.slug"
        :to="'/projects/' + project.slug"
        class="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300"
      >
        Voir les détails
        <ArrowRight class="w-4 h-4" />
      </NuxtLink>
    </div>

    <!-- Bottom accent line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Github, ExternalLink, ArrowRight } from 'lucide-vue-next'

defineProps<{ project: Record<string, any> }>()

const card = ref<HTMLElement | null>(null)
const mousePosition = ref({ x: 0, y: 0 })
const isHovered = ref(false)

function onMouseMove(e: MouseEvent) {
  if (!card.value) return
  isHovered.value = true
  const rect = card.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  mousePosition.value = { x, y }
}

function onMouseLeave() {
  isHovered.value = false
  mousePosition.value = { x: 0, y: 0 }
}

const cardStyle = computed(() => {
  if (!isHovered.value || !card.value) return {}
  const rect = card.value?.getBoundingClientRect()
  const cx = rect ? rect.width / 2 : 0
  const cy = rect ? rect.height / 2 : 0
  const rotY = ((mousePosition.value.x - cx) / cx) * 6
  const rotX = -((mousePosition.value.y - cy) / cy) * 4
  return {
    transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`,
    transition: 'transform 0.1s ease-out'
  }
})

const spotlightStyle = computed(() => {
  if (!isHovered.value) return {}
  return {
    background: `radial-gradient(300px at ${mousePosition.value.x}px ${mousePosition.value.y}px, rgba(99,102,241,0.08), transparent 60%)`
  }
})
</script>
