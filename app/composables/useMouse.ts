import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Tracks mouse position and returns:
 * - `x`, `y`: raw coords (px)
 * - `nx`, `ny`: normalized [-1, 1] relative to viewport center
 * - `lerpX`, `lerpY`: smoothed normalized values (use for parallax)
 */
export function useMouse(lerpFactor = 0.07) {
  const x = ref(0)
  const y = ref(0)
  const nx = ref(0)
  const ny = ref(0)
  const lerpX = ref(0)
  const lerpY = ref(0)

  let raf: number

  function onMove(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
    nx.value = (e.clientX / window.innerWidth) * 2 - 1
    ny.value = (e.clientY / window.innerHeight) * 2 - 1
  }

  function tick() {
    lerpX.value += (nx.value - lerpX.value) * lerpFactor
    lerpY.value += (ny.value - lerpY.value) * lerpFactor
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(raf)
  })

  return { x, y, nx, ny, lerpX, lerpY }
}
