<template>
  <div class="max-w-3xl mx-auto py-16 px-4">
    <div class="text-center mb-16" v-motion-fade-visible-once>
      <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Contactez-moi</h1>
      <p class="text-lg text-slate-500 dark:text-slate-400">
        Vous avez un projet en tête ou vous souhaitez simplement dire bonjour ? 
        N'hésitez pas à m'envoyer un message via le formulaire ci-dessous.
      </p>
    </div>
    
    <ContactForm />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact - DevPortfolio',
  description: 'Contacter le développeur'
})
</script>
