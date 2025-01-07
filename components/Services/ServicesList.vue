<script setup lang="ts">
interface Services {
  icon: string;
  title: string;
  description: string;
}

const { messages, locale } = useI18n();

const services = computed<Services[]>(
  () =>
    ((
      messages.value[locale.value] as {
        services: {
          offerings: Services[];
        };
      }
    )?.services.offerings as Services[]) || []
);
</script>

<template>
  <div class="flex flex-col gap-4 lg:flex-row lg:gap-16">
    <SingleService
      v-for="service in services"
      :key="service.title"
      :icon="service.icon"
      :title="service.title"
      :description="service.description"
    />
  </div>
</template>
