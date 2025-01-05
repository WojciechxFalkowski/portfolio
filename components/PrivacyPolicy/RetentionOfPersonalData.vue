<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const retentionOfPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          retentionOfPersonalData: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.retentionOfPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ retentionOfPersonalData.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ retentionOfPersonalData.content }}
    </p>
  </div>
</template>

<style scoped></style>
