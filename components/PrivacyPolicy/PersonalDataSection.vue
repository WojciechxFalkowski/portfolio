<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const collectingAndUsingPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          collectingAndUsingPersonalData: {
            title: string;
            subtitle: string;
            personalData: {
              title: string;
              description: string;
              list: string[];
            };
            usageData: {
              title: string;
              description: string;
            };
          };
        };
      }
    )?.privacyPolicy.collectingAndUsingPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">
      {{ collectingAndUsingPersonalData.title }}
    </h2>
    <h3 class="text-xl font-semibold mb-3">
      {{ collectingAndUsingPersonalData.subtitle }}
    </h3>

    <div class="mb-6">
      <h4 class="text-lg font-semibold mb-2">
        {{ collectingAndUsingPersonalData.personalData.title }}
      </h4>
      <p class="text-gray-800 whitespace-pre-line mb-2">
        {{ collectingAndUsingPersonalData.personalData.description }}
      </p>
      <ul class="list-disc pl-6">
        <li
          v-for="(item, index) in collectingAndUsingPersonalData.personalData
            .list"
          :key="index"
          class="text-gray-800"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <h4 class="text-lg font-semibold">
        {{ collectingAndUsingPersonalData.usageData.title }}
      </h4>
      <p class="text-gray-800 whitespace-pre-line">
        {{ collectingAndUsingPersonalData.usageData.description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
