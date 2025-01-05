<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const linksToOtherWebsites = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          linksToOtherWebsites: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.linksToOtherWebsites || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ linksToOtherWebsites.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ linksToOtherWebsites.content }}
    </p>
  </div>
</template>

<style scoped></style>
