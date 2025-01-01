<template>
  <div>
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <component
        :is="headingTag"
        class="text-[#0F172A] font-bold order-1"
        :class="titleClass"
      >
        {{ title }}
      </component>

      <Subtitle :subtitle="subtitle" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  title: {
    type: String as PropType<string | number | undefined>,
    required: true,
    default: () => "",
  },

  subtitle: {
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
    default: () => "text-3xl sm:text-3xl lg:text-4xl",
  },

  descriptionClass: {
    type: String as PropType<string>,
    required: false,
    default: () => "text-sm sm:text-base lg:text-2xl",
  },
});
</script>
