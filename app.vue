<script setup lang="ts">
// const colorMode = useColorMode()

// const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

const route = useRoute();

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

// Use default meta tags for the app
useMetaTags();
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
