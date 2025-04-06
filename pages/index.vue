<template>
  <div>
    <ContainerWrapper>
      <Header class="mt-8 lg:mt-0" />
    </ContainerWrapper>

    <AnimateContainer>
      <LazySectionServices hydrate-on-visible />
    </AnimateContainer>

    <AnimateContainer>
      <ContainerWrapper>
        <LazyFeaturedPortfolios hydrate-on-visible />
      </ContainerWrapper>
    </AnimateContainer>

    <AnimateContainer>
      <LazyWorkExperience hydrate-on-visible />
    </AnimateContainer>

    <!-- <AnimateContainer>
      <Testimonials />
    </AnimateContainer> -->

    <AnimateContainer>
      <ContainerWrapper>
        <LazyEducationAndSkillsSection hydrate-on-visible />
      </ContainerWrapper>
    </AnimateContainer>

    <AnimateContainer>
      <LazyContactForm hydrate-on-visible />
    </AnimateContainer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useMetaTags({
  title: t("meta.title"),
  description: t("meta.description"),
  keywords: [
    "web development",
    "portfolio",
    "frontend development",
    "backend development",
    "fullstack developer",
    "vue.js",
    "nuxt.js",
    "typescript",
    "web design",
    "software development",
  ],
});

// Add breadcrumb navigation
useStructuredData({ type: "BreadcrumbList", data: {} });
</script>
