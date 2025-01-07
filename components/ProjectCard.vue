<template>
  <div
    class="relative bg-white shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col justify-between h-full"
  >
    <div
      v-if="badge"
      class="absolute top-3 left-3 bg-[#23A5A4] text-white rounded-full px-3 py-1 text-sm font-semibold"
    >
      {{ badge }}
    </div>

    <img :src="imageSrc" :alt="alt" class="w-full h-auto object-cover" />

    <div class="p-4 flex-grow">
      <h3 class="text-lg font-semibold text-gray-800">{{ title }}</h3>
      <p class="text-gray-600 mt-2">{{ description }}</p>
    </div>

    <div class="p-4 mt-auto flex items-center text-sm">
      <a
        :href="`https://${link}`"
        target="_blank"
        class="hover:text-[#23A5A4] transition-all font-medium break-all flex items-center"
      >
        <IconLink class="w-5 h-5 mr-2" />

        {{ link }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    description: String,
    imageSrc: String,
    alt: String,
    link: String,
    badge: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
