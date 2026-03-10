// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  site: {
    url: 'https://jeanc-portfolio.local',
    name: 'Developer Portfolio',
    description: 'Modern and futuristic portfolio',
    defaultLocale: 'fr'
  },
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  }
})
