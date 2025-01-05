<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const useOfPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          useOfPersonalData: {
            title: string;
            introduction: string;
            purposes: Array<{ name: string; description: string }>;
            sharingTitle: string;
            sharingSituations: Array<{ name: string; description: string }>;
          };
        };
      }
    )?.privacyPolicy.useOfPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ useOfPersonalData.title }}</h2>
    <p class="text-gray-800 mb-4">{{ useOfPersonalData.introduction }}</p>

    <ul class="list-disc pl-6 mb-6">
      <li
        v-for="(purpose, index) in useOfPersonalData.purposes"
        :key="index"
        class="mb-4"
      >
        <p class="text-gray-800">
          <strong>{{ purpose.name }}: </strong>
          <span>{{ purpose.description }}</span>
        </p>
      </li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">
      {{ useOfPersonalData.sharingTitle }}
    </h3>
    <ul class="list-disc pl-6 mb-6">
      <li
        v-for="(situation, index) in useOfPersonalData.sharingSituations"
        :key="index"
        class="mb-4"
      >
        <p class="text-gray-800">
          <strong>{{ situation.name }}:</strong>
          <span>{{ situation.description }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
