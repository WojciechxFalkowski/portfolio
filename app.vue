<script setup lang="ts">
// const colorMode = useColorMode()

// const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

const route = useRoute();

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

// Use default meta tags for the app
useMetaTags();

// Add global structured data with translations
useStructuredData({
  type: "Person",
  data: {},
  translations: {
    pl: {
      name: "Wojciech Falkowski",
      jobTitle: "Frontend Developer",
      description:
        "Profesjonalny programista specjalizujący się w nowoczesnych technologiach internetowych.",
    },
    en: {
      name: "Wojciech Falkowski",
      jobTitle: "Web Developer",
      description:
        "Professional web developer specializing in modern web technologies.",
    },
  },
});

useStructuredData({
  type: "WebSite",
  data: {},
  translations: {
    pl: {
      name: "Wojciech Falkowski - Portfolio",
      description:
        "Profesjonalna strona portfolio Wojciecha Falkowskiego, programisty specjalizującego się w nowoczesnych technologiach internetowych.",
    },
    en: {
      name: "Wojciech Falkowski - Portfolio",
      description:
        "Professional portfolio website of Wojciech Falkowski, a web developer specializing in modern web technologies.",
    },
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="min-h-[calc(100vh-var(--header-height)-72px)]" />
  </NuxtLayout>
</template>

<style lang="scss">
@font-face {
  font-family: Inter;
  src: url(~/public/InterFont.ttf);
  font-display: swap;
}

html {
  scroll-behavior: smooth;
  font-family: "Inter", sans-serif;
}

// body {
//   background: linear-gradient(to bottom, #f5fcff 0%, #ffffff 100%);
// }
</style>
