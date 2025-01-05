<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const childrensPrivacy = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          childrensPrivacy: {
            title: string;
            content: string;
          };
        };
      }
    )?.privacyPolicy.childrensPrivacy || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">{{ childrensPrivacy.title }}</h2>
    <p class="text-gray-800 whitespace-pre-line">
      {{ childrensPrivacy.content }}
    </p>
  </div>
</template>

<style scoped></style>
