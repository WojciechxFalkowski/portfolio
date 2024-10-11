<template>
  <div>
    <PageTitle
      :title="$t('services.title')"
      :description="$t('services.description')"
      headingTag="h2"
    />
    <ServicesList class="mt-8 lg:mt-16" />
  </div>
</template>

<script setup lang="ts"></script>
