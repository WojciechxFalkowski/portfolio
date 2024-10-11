<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <img :src="icon" alt="icon" class="w-10 h-10 mx-auto" />

    <h3 :class="titleClass">{{ $t(title) }}</h3>

    <p :class="descriptionClass">{{ $t(description) }}</p>
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
