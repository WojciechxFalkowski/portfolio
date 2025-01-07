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

useHead({
  title: t("meta.title"),
  meta: [
    {
      name: "description",
      content: t("meta.description"),
    },
    {
      property: "og:title",
      content: t("meta.ogTitle"),
    },
    {
      property: "og:description",
      content: t("meta.ogDescription"),
    },
  ],
});
</script>
