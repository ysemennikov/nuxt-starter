// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  alias: {
    '@': '~/src',
  },

  dir: {
    assets: 'src/assets',
    layouts: 'src/layouts',
    pages: 'src/pages',
  },

  app: {
    head: {
      title: 'Nuxt Boilerplate',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/src/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  tailwindcss: {
    cssPath: false,
  },
  primevue: {
    // [bug] autoImport logic is inverted
    // @see https://github.com/primefaces/primevue/issues/6187
    // @todo: remove when fixed
    // updated: setting "autoImport: false" has error after update nuxt to 3.14.1592 version
    // updated: if using prefix in components, created components.d.ts file of root directory
    // autoImport: false,
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
