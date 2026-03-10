<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    aria-label="Toggle Theme"
  >
    <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-300" />
    <Moon v-else class="w-5 h-5 text-slate-800" />
  </button>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode()
function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
