<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const disclosureOfPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          disclosureOfPersonalData: {
            title: string;
            sections: Array<{
              subtitle: string;
              subcontent: string;
              content: string | string[];
            }>;
          };
        };
      }
    )?.privacyPolicy.disclosureOfPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">
      {{ disclosureOfPersonalData.title }}
    </h2>
    <div
      v-for="(section, index) in disclosureOfPersonalData.sections"
      :key="index"
      class="mb-6"
    >
      <h3 class="text-xl font-semibold mb-2">{{ section.subtitle }}</h3>

      <p v-if="section.subcontent" class="text-gray-800 whitespace-pre-line">
        {{ section.subcontent }}
      </p>
      <p
        v-if="typeof section.content === 'string'"
        class="text-gray-800 whitespace-pre-line"
      >
        {{ section.content }}
      </p>
      <ul v-else class="list-disc pl-6 text-gray-800">
        <li v-for="(item, subIndex) in section.content" :key="subIndex">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
