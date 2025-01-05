<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const definitions = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          definitions: {
            title: string;
            introduction: string;
            terms: Array<{ term: string; description: string }>;
          };
        };
      }
    )?.privacyPolicy.definitions || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ definitions.title }}</h2>
    <p class="mb-6 text-gray-700">{{ definitions.introduction }}</p>
    <ul class="list-disc pl-6 space-y-4">
      <li v-for="(definition, index) in definitions.terms" :key="index">
        <p class="font-semibold text-gray-900 inline">{{ definition.term }}</p>
        <span class="text-gray-700 ms-1">{{ definition.description }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
