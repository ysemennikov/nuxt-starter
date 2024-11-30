// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Boilerplate',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  dir: {
    pages: 'src/pages',
    layouts: 'src/layouts',
    app: 'src/app',
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  tailwindcss: {
    cssPath: false,
  },
  primevue: {
    components: {
      prefix: 'P',
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, primevue-custom, tailwind-utilities',
          },
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
