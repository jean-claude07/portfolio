<template>
  <form @submit.prevent="submitForm" class="glass p-8 rounded-2xl border border-slate-200 dark:border-white/10 w-full max-w-2xl mx-auto transition-all" v-motion-slide-visible-once-bottom>
    <div class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom</label>
        <input v-model="form.name" type="text" id="name" required class="w-full px-4 py-3 rounded-lg flex bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all text-slate-900 dark:text-white" placeholder="John Doe" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
        <input v-model="form.email" type="email" id="email" required class="w-full px-4 py-3 rounded-lg flex bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all text-slate-900 dark:text-white" placeholder="john@example.com" />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
        <textarea v-model="form.message" id="message" rows="5" required class="w-full px-4 py-3 rounded-lg flex bg-white/50 dark:bg-slate-900/50 border border-slate-300 dark:border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/50 outline-none transition-all resize-none text-slate-900 dark:text-white" placeholder="Comment puis-je vous aider ?"></textarea>
      </div>
      
      <button type="submit" :disabled="status === 'loading'" class="w-full relative py-4 rounded-xl bg-accent text-white font-bold text-lg overflow-hidden group hover:opacity-90 transition-opacity">
        <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        <span v-if="status !== 'loading'">Envoyer le message</span>
        <span v-else class="flex items-center justify-center gap-2">
          <Loader2 class="w-5 h-5 animate-spin" /> Envoi en cours...
        </span>
      </button>

      <div v-if="status === 'success'" class="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-700 dark:text-green-300 text-center mt-4">
        Message envoyé avec succès !
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Loader2 } from 'lucide-vue-next'

const form = ref({ name: '', email: '', message: '' })
const status = ref('idle')

const submitForm = async () => {
  status.value = 'loading'
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  status.value = 'success'
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => { status.value = 'idle' }, 5000)
}
</script>
