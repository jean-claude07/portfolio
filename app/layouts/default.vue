<template>
  <div class="min-h-screen bg-background text-slate-100">
    <!-- Custom mouse cursor -->
    <CustomCursor />

    <!-- Scroll progress bar -->
    <div class="scroll-progress" :style="{ width: scrollPercent + '%' }" />

    <AnimatedBackground />

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-1 pt-20">
        <slot />
      </main>
      <Footer />
    </div>

    <!-- Back to top button -->
    <Transition name="scale-fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 p-3 rounded-full glass border border-white/10 text-slate-300 hover:text-accent hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp class="w-5 h-5" />
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const scrollPercent = ref(0)
const showBackToTop = ref(false)

function onScroll() {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollPercent.value = height > 0 ? (winScroll / height) * 100 : 0
  showBackToTop.value = winScroll > 400
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scale-fade-enter-active, .scale-fade-leave-active { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.scale-fade-enter-from, .scale-fade-leave-to { opacity: 0; transform: scale(0.8) translateY(8px); }
</style>
