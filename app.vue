<script setup lang="ts">
// const colorMode = useColorMode()

// const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color" }, //content: color
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: "%s - Wojciech Falkowski portfolio",
  ogImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
});

// const { trackVisibility } = useAnalytics();
// const sendIsVisibleFooter = async () => {
//   await trackVisibility("Footer");
// };
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="min-h-[calc(100vh-var(--header-height)-72px)]" />
  </NuxtLayout>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  background: linear-gradient(to bottom, #f5fcff 0%, #ffffff 100%);
}
</style>
