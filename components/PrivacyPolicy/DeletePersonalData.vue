<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const deleteYourPersonalData = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          deleteYourPersonalData: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.deleteYourPersonalData || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ deleteYourPersonalData.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ deleteYourPersonalData.content }}
    </p>
  </div>
</template>

<style scoped></style>
