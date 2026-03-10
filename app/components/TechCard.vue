<template>
  <article
    class="relative group rounded-2xl p-6 glass border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 cursor-default overflow-hidden"
    v-motion-pop-visible-once
    style="--duration: 400ms;"
  >
    <!-- Background glow on hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

    <div class="relative z-10 flex flex-col items-center gap-4 text-center">
      <div class="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-accent/20">
        <slot name="icon" />
      </div>

      <div>
        <h4 class="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">{{ name }}</h4>
        <p v-if="level" class="text-xs text-slate-500 mt-0.5">{{ level }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ name: string; level?: string }>()
</script>
