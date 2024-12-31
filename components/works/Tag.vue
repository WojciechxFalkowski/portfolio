<template>
  <NuxtLink
    v-if="link"
    :to="link"
    class="flex items-center px-2 rounded-md text-sm text-[#0F172A] hover:text-[#2DD4BF] transition-colors group"
  >
    <IconUrl class="w-[24px] h-[20px] text-orange-400" />
  </NuxtLink>

  <span
    v-else
    class="inline-flex items-center gap-4 px-2 border border-[#F1F1F1] rounded-md text-sm text-[#0F172A]"
  >
    <span v-if="icon" :class="icon" class="w-4 h-4"></span>
    <span>{{ title }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
