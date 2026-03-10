<template>
  <!-- Custom cursor -->
  <Transition name="cursor-fade">
    <div v-if="isVisible" class="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform" aria-hidden="true">
      <!-- Outer ring: slower, bigger, lags behind -->
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/60 transition-transform duration-300"
        :class="isClicking ? 'scale-75 border-accent' : 'scale-100'"
        :style="{ left: lerpX + 'px', top: lerpY + 'px' }"
      />
      <!-- Inner dot: fast, precise -->
      <div
        class="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-transform duration-75"
        :class="isClicking ? 'scale-150' : 'scale-100'"
        :style="{ left: rawX + 'px', top: rawY + 'px' }"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const rawX = ref(0)
const rawY = ref(0)
const lerpX = ref(0)
const lerpY = ref(0)
const isVisible = ref(false)
const isClicking = ref(false)
let raf: number

function onMove(e: MouseEvent) {
  rawX.value = e.clientX
  rawY.value = e.clientY
  if (!isVisible.value) {
    lerpX.value = e.clientX
    lerpY.value = e.clientY
    isVisible.value = true
  }
}

function onLeave() { isVisible.value = false }
function onEnter() { isVisible.value = true }
function onDown() { isClicking.value = true }
function onUp() { isClicking.value = false }

function tick() {
  lerpX.value += (rawX.value - lerpX.value) * 0.12
  lerpY.value += (rawY.value - lerpY.value) * 0.12
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  // Only show on desktop
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    raf = requestAnimationFrame(tick)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseleave', onLeave)
  document.removeEventListener('mouseenter', onEnter)
  window.removeEventListener('mousedown', onDown)
  window.removeEventListener('mouseup', onUp)
  cancelAnimationFrame(raf)
})
</script>

<style>
/* Hide native cursor on desktop */
@media (pointer: fine) {
  html { cursor: none !important; }
  a, button, [role=button], label, input, textarea, select { cursor: none !important; }
}
.cursor-fade-enter-active, .cursor-fade-leave-active { transition: opacity 0.3s; }
.cursor-fade-enter-from, .cursor-fade-leave-to { opacity: 0; }
</style>
