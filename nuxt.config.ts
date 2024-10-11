// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/sanity',
  ],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
  i18n: {
    locales: ['en', 'pl'], // used in URL path prefix
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  colorMode: {
    classSuffix: ''
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue']
    },
  ],
})