<template>
  <div class="flex flex-col gap-4">
    <img :src="icon" alt="icon" class="w-10 h-10 m-auto" />

    <h3 :class="titleClass">{{ title }}</h3>

    <p :class="descriptionClass">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String as PropType<string>,
    required: true,
    default: () => "",
  },
  title: {
    type: String as PropType<string>,
    required: true,
    default: () => "",
  },
  description: {
    type: String as PropType<string>,
    required: true,
    default: () => "",
  },
  titleClass: {
    type: String as PropType<string>,
    required: false,
    default: () => "text-[#2DD4BF] text-lg",
  },
  descriptionClass: {
    type: String as PropType<string>,
    required: false,
    default: () => "text-[#0F172A] text-base",
  },
});
</script>

<style></style>
