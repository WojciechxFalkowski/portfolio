<script setup lang="ts">
import type { Service } from "~/types/service";

const { data: services } = await useFetch<Service[]>("/api/services");
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
