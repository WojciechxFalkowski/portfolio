<script setup lang="ts">
// const colorMode = useColorMode()

// const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

const route = useRoute();

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Wojciech Falkowski`
      : "Web Developer Wojciech Falkowski";
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color" },
    // {
    //   name: "google-site-verification",
    //   content: "",
    // },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site_name",
      content: "https://wojciechfalkowski.pl",
    },
    {
      name: "og:site_name",
      content: "https://wojciechfalkowski.pl",
    },
    {
      property: "lang",
      content: currentLanguage.value,
    },
    {
      name: "og:url",
      content: route.fullPath,
    },
    {
      property: "og:url",
      content: route.fullPath,
    },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: currentLanguage.value,
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
