<template>
  <div
    class="lg:w-1/3 flex flex-col gap-4 p-8 justify-center lg:py-12 rounded-lg bg-white text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div
      class="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-teal-100"
    >
      <img :src="icon" alt="Icon" loading="lazy" class="w-6 h-6" />
    </div>

    <h3 class="text-gray-800 font-semibold">
      {{ $t(title) }}
    </h3>

    <p class="text-sm text-gray-600 leading-relaxed">
      {{ $t(description) }}
    </p>
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
