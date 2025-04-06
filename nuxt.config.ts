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
    "@vueuse/nuxt",
  ],
  i18n: {
    locales: ['en', 'pl'], // used in URL path prefix
    strategy: 'prefix_except_default',
    defaultLocale: 'pl',
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
  runtimeConfig: {
    public: {
      //https://stackoverflow.com/questions/72041740/how-to-set-global-api-baseurl-used-in-usefetch-in-nuxt-3
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  },
})