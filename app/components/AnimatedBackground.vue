<template>
  <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <!-- Canvas for particles -->
    <canvas ref="canvas" class="absolute inset-0 w-full h-full opacity-50" />

    <!-- Gradient orbs — react to mouse position -->
    <div class="absolute inset-0">
      <div
        class="absolute w-[70vh] h-[70vh] rounded-full opacity-40 blur-[130px] will-change-transform"
        :style="{
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
          left: '10%', top: '-10%',
          transform: `translate(${lerpX * 40}px, ${lerpY * 30}px)`
        }"
      />
      <div
        class="absolute w-[60vh] h-[60vh] rounded-full opacity-30 blur-[120px] will-change-transform"
        :style="{
          background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)',
          right: '5%', bottom: '0%',
          transform: `translate(${-lerpX * 30}px, ${-lerpY * 20}px)`
        }"
      />
      <div
        class="absolute w-[50vh] h-[50vh] rounded-full opacity-25 blur-[110px] will-change-transform"
        :style="{
          background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)',
          right: '-5%', top: '30%',
          transform: `translate(${-lerpX * 20}px, ${lerpY * 25}px)`
        }"
      />
    </div>

    <!-- Static grid overlay -->
    <div
      class="absolute inset-0 opacity-[0.035]"
      style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 64px 64px;"
    />

    <!-- Scanline sweep -->
    <div class="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-scanline opacity-20" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMouse } from '~/composables/useMouse'

const { lerpX, lerpY } = useMouse(0.04)

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId: number
let ctx: CanvasRenderingContext2D | null = null

interface Particle {
  x: number; y: number
  vx: number; vy: number
  radius: number; alpha: number
  color: string
}

const particles: Particle[] = []
const COLORS = ['#6366f1', '#22d3ee', '#a855f7', '#818cf8']

function resize() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

function init() {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  particles.length = 0
  const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000))
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    })
  }
}

function drawConnections() {
  if (!ctx || !canvas.value) return
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 120) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 120)})`
        ctx.lineWidth = 0.5
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

function animate() {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy
    if (p.x < 0 || p.x > canvas.value.width) p.vx *= -1
    if (p.y < 0 || p.y > canvas.value.height) p.vy *= -1
    ctx.beginPath()
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
    gradient.addColorStop(0, p.color + 'ff')
    gradient.addColorStop(1, p.color + '00')
    ctx.fillStyle = gradient
    ctx.globalAlpha = p.alpha
    ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1
  }
  drawConnections()
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', () => { resize(); init() })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>
