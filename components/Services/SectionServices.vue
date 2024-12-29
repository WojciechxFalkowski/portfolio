<template>
  <section id="services" class="bg-[#FBFBFB] py-8 lg:py-32">
    <ContainerWrapper>
      <TitleWithSubtitle
        :title="$t('services.title')"
        :subtitle="$t('services.description')"
        headingTag="h2"
      />

      <ServicesList class="mt-8 lg:mt-16" />
    </ContainerWrapper>
  </section>
</template>

<script setup lang="ts"></script>
