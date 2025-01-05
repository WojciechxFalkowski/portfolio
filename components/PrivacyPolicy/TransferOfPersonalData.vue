<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const transferOfPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          transferOfPersonalData: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.transferOfPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ transferOfPersonalData.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ transferOfPersonalData.content }}
    </p>
  </div>
</template>

<style scoped></style>
