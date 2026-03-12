<template>
  <div>
    <HeroSection />

    <!-- About section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700 } }"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
            <span class="text-xs font-mono tracking-widest text-accent uppercase">À propos</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Développeur passionné par
            <span class="text-gradient"> la qualité.</span>
          </h2>
          <p class="text-slate-400 leading-relaxed mb-8 text-lg">
            Développeur Full Stack passionné, je possède plus de 5 ans d’expérience dans la conception et le développement d’applications web modernes. Au fil de mes projets, j’ai acquis une solide expertise dans la création de plateformes performantes, évolutives et centrées sur l’expérience utilisateur, capables de répondre aux exigences techniques et aux besoins métiers.
            <br/><br/>
            Je travaille principalement avec les technologies JavaScript et TypeScript, aussi bien côté frontend que backend, et je développe des architectures robustes en utilisant Node.js et Ruby on Rails. Mon approche privilégie des solutions maintenables, optimisées et scalables, permettant aux projets de grandir efficacement avec leurs utilisateurs.
          </p>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="glass rounded-xl p-4 border border-white/5 text-center">
              <div class="text-3xl font-black text-gradient mb-1">{{ stat.value }}</div>
              <div class="text-xs text-slate-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
          class="glass rounded-2xl border border-white/5 p-8 space-y-6"
        >
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-slate-300">{{ skill.name }}</span>
              <span class="text-sm font-mono text-accent">{{ skill.percent }}%</span>
            </div>
            <div class="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-1000"
                :style="{ width: skill.percent + '%' }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
          <span class="text-xs font-mono tracking-widest text-accent uppercase">Stack Technique</span>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">Technologies maîtrisées</h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechCard v-for="tech in technologies" :key="tech.name" :name="tech.name" :level="tech.level">
          <template #icon>
            <component :is="tech.icon" :class="['w-7 h-7', tech.color]" />
          </template>
        </TechCard>
      </div>
    </section>

    <!-- Projects section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-end justify-between mb-16"
      >
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <span class="text-xs font-mono tracking-widest text-accent uppercase">Portfolio</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">Projets Récents</h2>
          <p class="text-slate-500 mt-3 max-w-xl">Une sélection de mes meilleurs travaux.</p>
        </div>
        <NuxtLink
          to="/projects"
          class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-white/8 text-sm font-medium text-slate-300 hover:text-accent hover:border-accent/30 transition-all"
        >
          Voir tout <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in limitedProjects" :key="project.slug" :project="project" />
      </div>
    </section>

    <!-- Blog section -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex items-end justify-between mb-16"
      >
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="h-px w-16 bg-gradient-to-r from-transparent to-accent-secondary/50" />
            <span class="text-xs font-mono tracking-widest text-accent-secondary uppercase">Blog / Articles</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">Derniers Articles</h2>
          <p class="text-slate-500 mt-3 max-w-xl">Partages d'expériences, tutoriels et veille technologique.</p>
        </div>
        <NuxtLink
          to="/blog"
          class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-white/8 text-sm font-medium text-slate-300 hover:text-accent-secondary hover:border-accent-secondary/30 transition-all"
        >
          Tout lire <ArrowRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in limitedBlogPosts" :key="post.slug" :post="post" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { stats, skills, technologies, projects, blogPosts } from '~/data/portfolio'

const activeFilter = ref('Tous')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.technologies.includes(activeFilter.value))
})

const limitedProjects = computed(() => {
  return filteredProjects.value.slice(0, 3)
})

const limitedBlogPosts = computed(() => {
  return blogPosts.slice(0, 3)
})

useSeoMeta({
  title: 'Jean Claude · Full Stack Developer',
  description: 'Portfolio moderne — développeur Full Stack spécialisé CMS; JS et TS, NodeJS et Ruby on Rails.'
})
</script>
