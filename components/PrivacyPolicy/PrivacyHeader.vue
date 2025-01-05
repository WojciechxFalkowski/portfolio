<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const introduction = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          introduction: {
            title: string;
            lastUpdated: string;
            lastUpdatedDate: string;
            description: string;
            details: string;
          };
        };
      }
    )?.privacyPolicy.introduction || {}
  );
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">{{ introduction.title }}</h1>
    <p class="text-gray-600 mb-4">
      {{ introduction.lastUpdated }}: {{ introduction.lastUpdatedDate }}
    </p>
    <p class="text-gray-800 mb-4">{{ introduction.description }}</p>
    <p class="text-gray-800" v-html="introduction.details"></p>
  </div>
</template>
