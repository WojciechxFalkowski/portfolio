<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const title = computed(() => t("privacyPolicy.interpretationAndDefinitions.title"));
const subtitle = computed(() => t("privacyPolicy.interpretationAndDefinitions.subtitle"));
const content = computed(() => t("privacyPolicy.interpretationAndDefinitions.content"));
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <h3 class="text-xl font-semibold mb-2">{{ subtitle }}</h3>
    <p class="text-gray-800">{{ content }}</p>
  </div>
</template>

<style scoped></style>
