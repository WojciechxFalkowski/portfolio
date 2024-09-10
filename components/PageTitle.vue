<template>
  <component :is="headingTag" class="text-[#0F172A]" :class="titleClass">
    {{ title }}
  </component>

  <p class="mt-8 text-[#0F172A]" v-if="description" :class="descriptionClass">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  title: {
    type: String as PropType<string | number | undefined>,
    required: true,
    default: () => "",
  },

  description: {
    type: String as PropType<string | number | undefined>,
    required: false,
    default: () => "",
  },

  headingTag: {
    type: String as PropType<string>,
    required: false,
    default: () => "h1",
  },

  titleClass: {
    type: String as PropType<string>,
    required: false,
    default: () => "text-4xl text-center font-bold",
  },

  descriptionClass: {
    type: String as PropType<string>,
    required: false,
    default: () => "text-2xl text-center",
  },
});
</script>
