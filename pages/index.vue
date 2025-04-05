<template>
  <div>
    <ContainerWrapper>
      <Header class="mt-8 lg:mt-0" />
    </ContainerWrapper>

    <AnimateContainer>
      <SectionServices />
    </AnimateContainer>

    <AnimateContainer>
      <ContainerWrapper>
        <FeaturedPortfolios />
      </ContainerWrapper>
    </AnimateContainer>

    <AnimateContainer>
      <WorkExperience />
    </AnimateContainer>

    <!-- <AnimateContainer>
      <Testimonials />
    </AnimateContainer> -->

    <AnimateContainer>
      <ContainerWrapper>
        <EducationAndSkillsSection />
      </ContainerWrapper>
    </AnimateContainer>

    <AnimateContainer>
      <ContactForm />
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
</script>
