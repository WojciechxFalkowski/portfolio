<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const changesToPrivacyPolicy = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          changesToPrivacyPolicy: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.changesToPrivacyPolicy || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ changesToPrivacyPolicy.title }}</h2>

    <p class="text-gray-800 whitespace-pre-line">
      {{ changesToPrivacyPolicy.content }}
    </p>
  </div>
</template>

<style scoped></style>
