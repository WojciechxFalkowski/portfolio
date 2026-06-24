<template>
  <NuxtLink
    v-if="link && !suppressLink"
    :to="link"
    :aria-label="$t('common.openLink') + ' ' + title"
    class="flex items-center px-2 rounded-md text-sm text-[#0F172A] hover:text-[#23A5A4] transition-colors group cursor-pointer"
  >
    <IconUrl class="w-[24px] h-[20px] text-orange-400" />
  </NuxtLink>

  <span
    v-else-if="link && suppressLink"
    class="flex items-center px-2 rounded-md text-sm text-[#0F172A] group"
    aria-hidden="true"
  >
    <IconUrl class="w-[24px] h-[20px] text-orange-400" />
  </span>

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
  suppressLink: {
    type: Boolean,
    default: false,
  },
});
</script>
