<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const securityOfPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          securityOfPersonalData: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.securityOfPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ securityOfPersonalData.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ securityOfPersonalData.content }}
    </p>
  </div>
</template>

<style scoped></style>
