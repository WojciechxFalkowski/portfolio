<script setup lang="ts">
import type { Service } from "~/types/service";

const { data: services } = await useFetch<Service[]>("/api/services");
</script>

<template>
  <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-16 text-center">
    <SingleService
      v-for="service in services"
      :key="service.title"
      :icon="service.icon"
      :title="service.title"
      :description="service.description"
    />
  </div>
</template>
