import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './app/**/*.{js,vue,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        background: '#060912',
        surface: '#0d1224',
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          secondary: '#22d3ee',
          tertiary: '#a855f7',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite alternate',
        'gradient-x': 'gradientX 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 3s linear infinite',
        'flicker': 'flicker 5s linear infinite',
        'text-shimmer': 'textShimmer 4s ease-in-out infinite',
        'border-beam': 'borderBeam 5s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        textShimmer: {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
        scanline: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        flicker: {
          '0%, 97%, 100%': { opacity: '1' },
          '98%': { opacity: '0.8' },
          '99%': { opacity: '1' },
          '99.5%': { opacity: '0.6' },
        },
        borderBeam: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    }
  },
  plugins: []
}
