<script setup lang="ts">
const title = "Interpretation and Definitions";
const subtitle = "Interpretation";
const content = `
  The words of which the initial letter is capitalized have meanings defined under the following conditions. 
  The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
`;
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <h3 class="text-xl font-semibold mb-2">{{ subtitle }}</h3>
    <p class="text-gray-800">{{ content }}</p>
  </div>
</template>

<style scoped></style>
