import { Terminal, Database, Layout, Server, Cpu, Globe, Boxes } from 'lucide-vue-next'

export interface NavLink {
    name: string
    path: string
}

export interface Stat {
    value: string
    label: string
}

export interface Skill {
    name: string
    percent: number
}

export interface Technology {
    name: string
    icon: any
    level: string
    color: string
}

export interface Project {
    title: string
    slug: string
    description: string
    image: string
    technologies: string[]
    github?: string
    link?: string
}

export interface BlogPost {
    title: string
    slug: string
    excerpt: string
    date: string
    readingTime: string
    category: string
    image: string
    content: string
}

export const navLinks: NavLink[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
]

export const heroBadges = [
    'Nuxt 3', 'Vue 3', 'TypeScript', 'Node.js', 'TailwindCSS', 'Docker', 'PostgreSQL',
    'GraphQL', 'ReactJS', 'Git', 'Wordpress', 'Prestashop', 'PHP', 'Ruby on Rails',
    'CMS Headless', 'Laravel', 'SEO', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JQuery', 'Mysql'
]

export const heroTexts = [
    "Building modern, scalable web experiences.",
    "Crafting pixel-perfect interfaces with Vue.",
    "Designing systems that scale to millions.",
    "Turning ideas into impactful products.",
]

export const stats: Stat[] = [
    { value: '5+', label: "Années d'expérience" },
    { value: '30+', label: 'Projets livrés' },
    { value: '99%', label: 'Satisfaction client' }
]

export const skills: Skill[] = [
    { name: 'Vue 3 / Nuxt', percent: 95 },
    { name: 'TypeScript', percent: 90 },
    { name: 'Node.js / API', percent: 85 },
    { name: 'Database Design', percent: 80 },
    { name: 'DevOps / Docker', percent: 70 },
    { name: 'React JS', percent: 70 },
    { name: 'Ruby on Rails', percent: 70 },
    { name: 'Wordpress', percent: 90 },
    { name: 'PHP', percent: 70 },
    { name: 'Laravel', percent: 60 },
    { name: 'Prestashop', percent: 85 },
]

export const technologies: Technology[] = [
    { name: 'Vue 3', icon: Layout, level: 'Expert', color: 'text-emerald-400' },
    { name: 'Nuxt 3', icon: Globe, level: 'Expert', color: 'text-accent' },
    { name: 'TypeScript', icon: Terminal, level: 'Avancé', color: 'text-blue-400' },
    { name: 'Node.js', icon: Server, level: 'Avancé', color: 'text-green-400' },
    { name: 'PostgreSQL', icon: Database, level: 'Intermédiaire', color: 'text-sky-400' },
    { name: 'TailwindCSS', icon: Layout, level: 'Expert', color: 'text-cyan-400' },
    { name: 'Docker', icon: Cpu, level: 'Intermédiaire', color: 'text-blue-500' },
    { name: 'GraphQL', icon: Boxes, level: 'Intermédiaire', color: 'text-pink-400' },
    { name: 'Laravel', icon: Layout, level: 'Intermédiaire', color: 'text-pink-400' },
    { name: 'Prestashop', icon: Globe, level: 'Avancé', color: 'text-pink-500' },
    { name: 'Wordpress', icon: Layout, level: 'Expert', color: 'text-blue-500' },
    { name: 'PHP', icon: Server, level: 'Avancé', color: 'text-indigo-400' },
    { name: 'Ruby on Rails', icon: Terminal, level: 'Avancé', color: 'text-red-500' },
    { name: 'React JS', icon: Cpu, level: 'Intermédiaire', color: 'text-cyan-400' },
    { name: 'SEO', icon: Globe, level: 'Avancé', color: 'text-emerald-400' },
    { name: 'CMS Headless', icon: Boxes, level: 'Avancé', color: 'text-indigo-400' },
    { name: 'UI / UX', icon: Layout, level: 'Avancé', color: 'text-pink-400' },
    { name: 'Github / GitLab', icon: Terminal, level: 'Avancé', color: 'text-indigo-400' },
]

export const projects: Project[] = [
    {
        title: 'E-varotra.mg',
        slug: 'e-varotra-mg',
        description: 'e-varotra.mg est une marketplace e-commerce multivendeur développée pour le marché malagasy. La plateforme permet aux commerçants, entrepreneurs et vendeurs indépendants de créer facilement leur boutique en ligne, gérer leurs produits et vendre à travers tout Madagascar. Le projet vise à démocratiser la vente en ligne en proposant une solution simple, moderne et adaptée aux réalités du e-commerce local.\n\nL’objectif du projet est de créer un écosystème e-commerce local performant, capable d’aider les commerçants malgaches à développer leur présence digitale et atteindre davantage de clients en ligne.\n\nCe projet démontre mes compétences en développement Full Stack, en architecture de plateformes web complexes, ainsi qu’en création de solutions digitales adaptées à un marché spécifique.',
        image: '/images/e-varotra.webp',
        technologies: [
            'CSS',
            'HTML',
            'JavaScript',
            'PHP',
            'WordPress',
            'WooCommerce',
            'Mysql',
            'API MVola',
        ],
        github: '#',
        link: 'https://e-varotra.mg'
    },
    {
        title: 'Mon CV Architect',
        slug: 'mon-cv',
        description: 'Application Web moderne pour la création de CV sur mesure pour chaque domaine dans le tech. L\'objectif est de permettre aux utilisateurs de créer un CV professionnel et personnalisé en fonction de leur domaine d\'expertise. Ce projet démontre mes compétences en développement Full Stack, en architecture de plateformes web complexes, ainsi qu\'en création de solutions digitales adaptées à un marché spécifique. Exemple de CV qu\'on peux créer : Finance, RH, CM, Graphiste, Développeur, Chef de projet, etc.',
        image: '/images/cv1.webp',
        technologies: ['ReactJS', 'TailwindCSS', 'NodeJS', 'PostgreSQL', 'D3.js'],
        github: 'https://github.com/jean-claude07/Mon-CV',
        link: '#'
    },
    {
        title: 'Trouvetout.mg',
        slug: 'trouvetout-mg',
        description: 'Trouvetout.mg est une plateforme de petites annonces généralistes conçue pour offrir une alternative moderne et rapide aux groupes de vente sur les réseaux sociaux. L\'objectif technique était de créer un écosystème où la recherche est instantanée et où le dépôt d\'annonce est simplifié à l\'extrême pour l\'utilisateur malgache. Le site gère des milliers d\'annonces classées par catégories (immobilier, véhicules, emploi, services) avec une architecture pensée pour la montée en charge et la visibilité maximale sur les moteurs de recherche.',
        image: '/images/trouvetout.webp',
        technologies: ['PHP', 'Laravel', 'MySQL', 'TailwindCSS', 'CSS', 'HTML', 'JavaScript', 'JQuery', 'Bootstrap'],
        github: '#',
        link: 'https://trouvetout.mg'
    },
    {
        title: 'MVola API Gateway for WooCommerce',
        slug: 'mvola-api-gateway-for-woocommerce',
        description: 'MVola API Gateway for WooCommerce est une extension pour WooCommerce qui permet d\'intégrer le paiement par MVola dans une boutique en ligne. Le projet vise à offrir une solution simple, moderne et adaptée aux réalités du e-commerce local.',
        image: '/images/mvola.webp',
        technologies: ['PHP', 'WooCommerce', 'API MVola', 'CSS', 'HTML', 'JavaScript', 'JQuery', 'Bootstrap', 'Wordpress'],
        github: '#',
        link: '#'
    },
    {
        title: 'Agence : Dizitalizeo.com',
        slug: 'dizitalizeo-com',
        description: 'Dizitalizeo.com est une agence de développement web et de marketing digital qui offre des services de création de sites web, de développement d\'applications mobiles, de référencement naturel et de publicité en ligne. Le projet vise à offrir une solution simple, moderne et adaptée aux réalités du commerce local.',
        image: '/images/dizitalizeo.webp',
        technologies: ['PHP', 'WooCommerce', 'API MVola', 'CSS', 'HTML', 'JavaScript', 'JQuery', 'Bootstrap', 'Wordpress'],
        github: '#',
        link: 'https://dizitalizeo.com'
    },
    {
        title: 'Open Source : Git-Smart CLI',
        slug: 'git-smart-cli',
        description: 'Git-Smart CLI est un outil en ligne de commande qui permet de gérer les dépôts Git de manière plus intelligente. Le projet vise à offrir une solution simple, moderne et adaptée aux réalités du développement.',
        image: '/images/CLI-git.webp',
        technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer.js', 'Simple-Git', 'Chalk', 'ESLint'],
        github: 'https://github.com/jean-claude07/Git-Smart-CLI',
        link: '#'
    },
    {
        title: 'HackVoyage.com',
        slug: 'hack-voyage',
        description: 'HackVoyage est une plateforme média dédiée au voyage moderne, responsable et insolite. Le site propose des guides complets, des conseils de sécurité et des articles sur la gastronomie éthique.\n\nL\'objectif technique était de concevoir un blog haute performance avec une expérience de lecture immersive, tout en optimisant le référencement naturel (SEO) sur des thématiques compétitives. Le projet intègre une gestion avancée des catégories (écologie, gastronomie, conseils pratiques) et un design épuré favorisant le temps de rétention utilisateur.',
        image: '/images/hackvoyage.webp',
        technologies: [
            'PHP',
            'WordPress',
            'CSS',
            'HTML',
            'JavaScript',
            'SEO',
            'UI/UX Design'
        ],
        github: '#',
        link: 'https://hackvoyage.com'
    },
    {
        title: 'Loukdina.com',
        slug: 'loukdina',
        description: 'Loukdina est une boutique e-commerce spécialisée dans les cosmétiques naturels et les soins capillaires artisanaux. Le site propose une expérience sensorielle haut de gamme pour la vente de produits bio (savons noirs, huiles précieuses, masques capillaires).\n\nL’objectif technique était de construire une plateforme de vente fluide et rassurante, intégrant des leviers marketing avancés : système de cashback, gestion des offres promotionnelles dynamiques, et avis clients détaillés. J’ai mis en place une architecture optimisée pour la vente à l’international, garantissant un paiement 100% sécurisé et une navigation mobile ultra-rapide.',
        image: '/images/loukDina.webp',
        technologies: [
            'PHP',
            'WordPress',
            'WooCommerce',
            'CSS',
            'HTML',
            'JavaScript',
            'SEO',
            'Marketing Automation'
        ],
        github: '#',
        link: 'https://loukdina.com'
    },
    {
        title: 'Romina-SEO Portfolio',
        slug: 'romina-seo',
        description: 'Conception et développement du portfolio professionnel pour Romina, Content & SEO Manager. L’objectif était de créer une vitrine digitale élégante et minimaliste, capable de refléter son expertise en stratégie de contenu et optimisation technique.\n\nLe site met en avant des indicateurs de performance (KPIs) via des compteurs animés et une présentation structurée des compétences (Ahrefs, Google Analytics, Semrush). J\'ai intégré un système de témoignages clients dynamique et un blog optimisé pour renforcer son autorité sur le marché du freelance. L’architecture est entièrement responsive, avec un focus sur la conversion directe via des appels à l\'action (CTA) stratégiques.',
        image: '/images/romina.webp',
        technologies: [
            'PHP',
            'WordPress',
            'TailwindCSS',
            'JavaScript',
            'SEO',
            'UI/UX Design',
            'Digital Management'
        ],
        github: '#',
        link: 'https://www.romina-seo.mg'
    },
]

export const blogPosts: BlogPost[] = [
    {
        title: 'Les bonnes pratiques pour sécuriser son API Node.js',
        slug: 'securiser-api-nodejs',
        excerpt: 'Authentification, validation, rate limiting et autres mesures essentielles pour protéger vos API contre les attaques courantes.',
        date: '15 Mars 2024',
        readingTime: '7 min de lecture',
        category: 'Sécurité',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>Les bonnes pratiques pour sécuriser son API Node.js</h2>
      <p>La sécurité d'une API est cruciale, surtout lorsqu'elle manipule des données sensibles. Voici un tour d'horizon des mesures indispensables à implémenter dès la conception.</p>
      
      <h3>1. Authentification et autorisation robustes</h3>
      <p>Utilisez des standards comme JWT (JSON Web Tokens) avec une expiration courte, ou OAuth2 pour les connexions tierces. Stockez les mots de passe avec bcrypt (salt + hash) et évitez à tout prix de les garder en clair. Mettez en place un système de rôles pour restreindre l'accès aux endpoints sensibles.</p>
      
      <h3>2. Validation des entrées</h3>
      <p>Ne faites jamais confiance aux données entrantes. Utilisez une bibliothèque comme Joi ou express-validator pour valider le format, le type et la longueur des paramètres. Cela prévient les injections SQL (si vous utilisez des requêtes paramétrées) et les attaques XSS.</p>
      
      <h3>3. Rate limiting et protection DDoS</h3>
      <p>Limitez le nombre de requêtes par IP avec des outils comme express-rate-limit. Cela évite les abus (brute-force, déni de service). Complétez avec un WAF (Web Application Firewall) si l'API est exposée publiquement.</p>
      
      <h3>4. Headers de sécurité</h3>
      <p>Utilisez le middleware Helmet pour Node.js afin de configurer des headers HTTP sécurisés (CSP, X-Frame-Options, HSTS, etc.). Cela réduit la surface d'attaque côté navigateur.</p>
      
      <h3>5. Gestion des erreurs</h3>
      <p>Ne divulguez jamais de détails techniques dans les messages d'erreur (pile d'exécution, version de base de données). Renvoyez des messages génériques et loggez les erreurs côté serveur avec Winston ou Morgan.</p>
      
      <h3>6. Chiffrement des communications</h3>
      <p>Toujours en HTTPS avec TLS 1.3. Redirigez automatiquement le trafic HTTP vers HTTPS. Utilisez des certificats valides (Let's Encrypt).</p>
      
      <h3>7. Mise à jour des dépendances</h3>
      <p>Analysez régulièrement vos dépendances avec \`npm audit\` ou des outils comme Snyk. Les failles dans les bibliothèques tierces sont une porte d'entrée courante.</p>
      
      <p>En appliquant ces bonnes pratiques, vous réduirez considérablement les risques de compromission de votre API. La sécurité est un processus continu : restez informé des nouvelles menaces et adaptez votre code en conséquence.</p>
    `
    },
    {
        title: 'React vs Vue : lequel choisir pour votre prochain projet ?',
        slug: 'react-vs-vue-comparatif',
        excerpt: 'Analyse des forces et faiblesses de React et Vue pour vous aider à faire le bon choix selon vos besoins et votre équipe.',
        date: '10 Mars 2024',
        readingTime: '9 min de lecture',
        category: 'Développement',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>React vs Vue : lequel choisir pour votre prochain projet ?</h2>
      <p>Le choix entre React et Vue est souvent subjectif, mais certains critères objectifs peuvent guider votre décision. Voici une comparaison point par point.</p>
      
      <h3>Philosophie et courbe d'apprentissage</h3>
      <p>Vue est réputé pour sa douceur d'apprentissage : sa syntaxe intuitive et sa documentation claire permettent aux débutants de démarrer rapidement. React, quant à lui, nécessite de maîtriser JSX, les hooks et parfois des concepts plus avancés comme le Context API ou Redux. Cependant, une fois ces concepts assimilés, React offre une grande flexibilité.</p>
      
      <h3>Performance</h3>
      <p>Les deux frameworks excellent en termes de performances grâce à leur DOM virtuel. Vue 3 avec le Composition API et React 18 avec les concurrent features offrent des optimisations similaires. Le choix dépendra plutôt de l'écosystème et des besoins spécifiques.</p>
      
      <h3>Écosystème et communauté</h3>
      <p>React, porté par Meta, bénéficie d'une communauté massive, d'une multitude de bibliothèques tierces et d'une forte demande sur le marché de l'emploi. Vue, soutenu par des contributeurs indépendants et des entreprises comme Alibaba ou GitLab, a un écosystème plus restreint mais très solide (Vue Router, Pinia, VueUse).</p>
      
      <h3>Cas d'usage</h3>
      <p><strong>React</strong> : idéal pour de très grandes applications, des équipes expérimentées, ou quand on a besoin d'intégrer des bibliothèques spécifiques (React Native pour mobile).<br>
      <strong>Vue</strong> : parfait pour des projets de taille moyenne, des prototypes rapides, ou des équipes qui souhaitent une courbe d'apprentissage douce. Vue est aussi excellent pour ajouter de l'interactivité à des pages existantes (approche progressive).</p>
      
      <h3>Conclusion</h3>
      <p>Il n'y a pas de gagnant absolu. Si vous débutez en full stack, Vue peut vous permettre d'être opérationnel plus vite. Si vous visez des postes en entreprise ou des projets complexes, React est un choix sûr. L'important est de maîtriser les concepts fondamentaux communs (composants, état, cycle de vie) qui vous serviront quel que soit l'outil.</p>
    `
    },
    {
        title: 'Déployer une application full stack avec Docker et Nginx',
        slug: 'deploiement-docker-nginx',
        excerpt: 'Tutoriel complet pour containeriser votre application et la mettre en production avec un reverse proxy Nginx.',
        date: '05 Mars 2024',
        readingTime: '10 min de lecture',
        category: 'DevOps',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>Déployer une application full stack avec Docker et Nginx</h2>
      <p>Docker simplifie le déploiement en encapsulant votre application dans des conteneurs reproductibles. Associé à Nginx comme reverse proxy, vous obtenez une architecture robuste et scalable.</p>
      
      <h3>1. Containeriser le backend et le frontend</h3>
      <p>Créez un \`Dockerfile\` pour votre API Node.js et un autre pour votre frontend (React/Vue). Utilisez des images légères (alpine) et multi-stages pour réduire la taille. Exemple pour Node :</p>
      <pre><code>FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json .
EXPOSE 3000
CMD ["node", "dist/main.js"]</code></pre>
      
      <h3>2. Orchestration avec Docker Compose</h3>
      <p>Créez un fichier \`docker-compose.yml\` pour lier vos services (backend, frontend, base de données, Nginx). Définissez les réseaux et les volumes pour la persistance des données.</p>
      
      <h3>3. Configuration de Nginx</h3>
      <p>Nginx servira les fichiers statiques du frontend et agira comme reverse proxy vers l'API. Exemple de configuration :</p>
      <pre><code>server {
    listen 80;
    server_name example.com;
    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://backend:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}</code></pre>
      
      <h3>4. Déploiement sur un VPS</h3>
      <p>Transférez vos fichiers sur le serveur, installez Docker et Docker Compose, puis lancez \`docker-compose up -d\`. Pensez à configurer un firewall et à utiliser un certificat SSL avec Certbot (ou intégrer Traefik pour l'automatisation).</p>
      
      <h3>5. Mise à jour continue</h3>
      <p>Utilisez des scripts CI/CD (GitHub Actions, GitLab CI) pour builder et redéployer automatiquement à chaque push. La combinaison Docker + Nginx vous garantit un déploiement fiable et facile à maintenir.</p>
    `
    },
    {
        title: 'Introduction à GraphQL : pourquoi remplacer REST ?',
        slug: 'introduction-graphql',
        excerpt: 'Découvrez les principes de GraphQL et comment il simplifie la communication entre client et serveur en évitant le sur-fetching.',
        date: '28 Fév 2024',
        readingTime: '6 min de lecture',
        category: 'API',
        image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>Introduction à GraphQL : pourquoi remplacer REST ?</h2>
      <p>GraphQL, développé par Facebook, est une alternative à REST qui répond à certaines limitations des APIs traditionnelles. Découvrez ses avantages et ses cas d'usage.</p>
      
      <h3>Problèmes courants avec REST</h3>
      <p><strong>Sur-fetching</strong> : le serveur renvoie plus de données que nécessaire (ex: récupérer tous les champs d'un utilisateur alors qu'on n'a besoin que du nom).<br>
      <strong>Sous-fetching</strong> : pour obtenir toutes les données voulues, il faut multiplier les appels (ex: d'abord les posts, puis les commentaires de chaque post).<br>
      <strong>Versioning</strong> : l'ajout de champs peut nécessiter de nouvelles versions d'API.</p>
      
      <h3>Fonctionnement de GraphQL</h3>
      <p>GraphQL expose un seul endpoint (généralement \`/graphql\`) et permet au client de spécifier exactement les données dont il a besoin via une requête typée. Exemple :</p>
      <pre><code>query {
  user(id: "123") {
    name
    posts {
      title
      comments {
        content
      }
    }
  }
}</code></pre>
      <p>Le serveur résout cette requête en exécutant des résolveurs pour chaque champ, ce qui évite les appels redondants et réduit la charge réseau.</p>
      
      <h3>Avantages clés</h3>
      <p><strong>Efficacité</strong> : les clients récupèrent juste ce dont ils ont besoin, idéal pour les applications mobiles (bande passante limitée).<br>
      <strong>Auto-documentation</strong> : grâce au système de types (schéma), l'API est auto-documentée et peut être explorée avec des outils comme GraphiQL.<br>
      <strong>Évolution sans version</strong> : on peut ajouter des champs sans casser les clients existants, car ils ne demandent que ce dont ils ont besoin.</p>
      
      <h3>Inconvénients</h3>
      <p><strong>Complexité côté serveur</strong> : il faut implémenter des résolveurs et gérer la résolution N+1 (avec DataLoader).<br>
      <strong>Mise en cache</strong> : plus complexe qu'avec REST car les requêtes sont dynamiques. Des solutions comme Apollo Client offrent un cache normalisé.<br>
      <strong>Sécurité</strong> : il faut protéger contre les requêtes trop profondes ou volumineuses (limitation de la profondeur, analyse de coût).</p>
      
      <h3>Quand l'adopter ?</h3>
      <p>GraphQL est particulièrement adapté aux applications avec des besoins de données complexes et variables, comme les dashboards, les applications mobiles ou les micro-frontends. Pour des APIs simples, REST reste tout à fait pertinent.</p>
    `
    },
    {
        title: 'Améliorez la performance de votre site avec le lazy loading',
        slug: 'lazy-loading-performance',
        excerpt: 'Techniques simples pour implémenter le chargement paresseux des images et composants, et réduire le temps de chargement initial.',
        date: '20 Fév 2024',
        readingTime: '5 min de lecture',
        category: 'Performance',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>Améliorez la performance de votre site avec le lazy loading</h2>
      <p>Le lazy loading (chargement paresseux) est une technique qui consiste à différer le chargement des ressources non critiques jusqu'au moment où elles sont réellement nécessaires. Cela améliore le temps de chargement initial et l'expérience utilisateur.</p>
      
      <h3>Lazy loading des images</h3>
      <p>L'attribut HTML \`loading="lazy"\` est désupporté par tous les navigateurs modernes. Il suffit de l'ajouter aux balises \`&lt;img&gt;\` pour que le navigateur ne charge l'image que lorsqu'elle s'apprête à entrer dans le viewport. Pour un contrôle plus fin, utilisez l'API Intersection Observer en JavaScript.</p>
      <pre><code>&lt;img src="image.jpg" loading="lazy" alt="description"&gt;</code></pre>
      
      <h3>Lazy loading des composants dans React/Vue</h3>
      <p>Les frameworks modernes permettent de découper le code en chunks chargés à la demande. En React, utilisez \`React.lazy\` et \`Suspense\` :</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Chargement...&lt;/div&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
      <p>En Vue, la fonction \`defineAsyncComponent\` fait de même :</p>
      <pre><code>const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'));</code></pre>
      
      <h3>Lazy loading des routes</h3>
      <p>Dans les applications monopages, le code de chaque route peut être chargé uniquement lors de la navigation. C'est une pratique courante avec Vue Router ou React Router, en combinant avec le découpage dynamique.</p>
      
      <h3>Autres ressources</h3>
      <p><strong>Polices web</strong> : utilisez \`font-display: swap\` pour éviter le blocage du rendu.<br>
      <strong>Iframes</strong> : ajoutez \`loading="lazy"\` aux iframes (également supporté).<br>
      <strong>Scripts tiers</strong> : chargez-les avec \`async\` ou \`defer\`, ou via des techniques de chargement différé (ex : chargement au scroll).</p>
      
      <h3>Mesure d'impact</h3>
      <p>Utilisez Lighthouse ou WebPageTest pour évaluer l'amélioration du Largest Contentful Paint (LCP) et du Total Blocking Time (TBT). Le lazy loading, bien implémenté, peut réduire significativement ces métriques.</p>
    `
    },
    {
        title: 'Tester son application avec Jest et Cypress : guide pratique',
        slug: 'tests-jest-cypress',
        excerpt: 'Mettez en place une stratégie de tests efficace : tests unitaires avec Jest, tests end-to-end avec Cypress et intégration continue.',
        date: '15 Fév 2024',
        readingTime: '8 min de lecture',
        category: 'Tests',
        image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=600&h=350',
        content: `
      <h2>Tester son application avec Jest et Cypress : guide pratique</h2>
      <p>Les tests sont indispensables pour garantir la fiabilité et la maintenabilité d'une application. Voici comment combiner tests unitaires (Jest) et tests end-to-end (Cypress).</p>
      
      <h3>Tests unitaires avec Jest</h3>
      <p>Jest est un framework de test JavaScript complet, avec un excellent support pour les assertions, les mocks et la couverture de code. Pour une application React/Vue, installez les bibliothèques complémentaires (React Testing Library, Vue Test Utils). Exemple de test d'un composant React :</p>
      <pre><code>import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('le compteur s\\'incrémente', async () => {
  render(&lt;Counter /&gt;);
  const button = screen.getByRole('button', { name: /incrémenter/i });
  await userEvent.click(button);
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});</code></pre>
      <p>Jest peut aussi tester des fonctions pures (utilitaires, API calls mockés). Lancez les tests avec \`npm test\` et intégrez-les dans votre pipeline CI.</p>
      
      <h3>Tests end-to-end avec Cypress</h3>
      <p>Cypress permet de tester l'application dans un vrai navigateur, en simulant des parcours utilisateur complets. Il est idéal pour valider les scénarios critiques (inscription, paiement, etc.). Exemple de test E2E :</p>
      <pre><code>describe('Parcours d\\'achat', () => {
  it('ajoute un produit au panier et passe commande', () => {
    cy.visit('/');
    cy.contains('Ajouter au panier').click();
    cy.get('.cart-count').should('contain', '1');
    cy.contains('Valider la commande').click();
    cy.url().should('include', '/checkout');
  });
});</code></pre>
      <p>Cypress offre un time-travel, des captures d'écran et des vidéos en cas d'échec, facilitant le débogage.</p>
      
      <h3>Intégration continue</h3>
      <p>Exécutez les tests Jest et Cypress dans votre CI (GitHub Actions, GitLab CI). Pour Cypress, vous pouvez utiliser leur service Dashboard ou simplement exécuter les tests en headless. Une stratégie complète combine :<br>
      - Tests unitaires rapides à chaque commit.<br>
      - Tests E2E sur les branches principales ou avant déploiement.</p>
      
      <h3>Conclusion</h3>
      <p>Jest et Cypress couvrent un large spectre de tests, des petites unités aux parcours utilisateur. Leur mise en place demande un investissement initial, mais elle vous sauvera de nombreuses régressions et facilitera les évolutions futures.</p>
    `
    }
]
