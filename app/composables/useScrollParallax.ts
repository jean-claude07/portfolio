import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Tracks scroll position and returns:
 * - `scrollY`: raw scroll in px
 * - `scrollPercent`: 0–100%
 * - `lerpScroll`: lerp-smoothed scrollY
 */
export function useScrollParallax(lerpFactor = 0.1) {
  const scrollY = ref(0)
  const scrollPercent = ref(0)
  const lerpScroll = ref(0)
  let raf: number

  function onScroll() {
    scrollY.value = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollPercent.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
  }

  function tick() {
    lerpScroll.value += (scrollY.value - lerpScroll.value) * lerpFactor
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    cancelAnimationFrame(raf)
  })

  return { scrollY, scrollPercent, lerpScroll }
}
