<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const trackingTechnologiesAndCookies = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          trackingTechnologiesAndCookies: {
            title: string;
            introduction: string;
            technologies: Array<{ name: string; description: string }>;
            cookieTypesIntroduction: string;
            cookiesPurposeIntroduction: string;
            cookiePurposes: Array<{
              name: string;
              typeLabel: string;
              type: string;
              administeredBy: string;
              administeredByValue: string;
              purposeLabel: string;
              purpose: string;
            }>;
            footerText: string;
          };
        };
      }
    )?.privacyPolicy.trackingTechnologiesAndCookies || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">
      {{ trackingTechnologiesAndCookies.title }}
    </h2>
    <p class="text-gray-800 mb-4">
      {{ trackingTechnologiesAndCookies.introduction }}
    </p>

    <ul class="list-disc pl-6 mb-6">
      <li
        v-for="(
          technology, index
        ) in trackingTechnologiesAndCookies.technologies"
        :key="index"
        class="mb-4"
      >
        <p class="text-gray-800">
          <strong>{{ technology.name }}:</strong
          ><span>{{ technology.description }}</span>
        </p>
      </li>
    </ul>

    <p class="text-gray-800 mb-4">
      {{ trackingTechnologiesAndCookies.cookieTypesIntroduction }}
    </p>

    <p class="mb-3">
      {{ trackingTechnologiesAndCookies.cookiesPurposeIntroduction }}:
    </p>

    <ul class="list-disc pl-6 mb-6">
      <li
        v-for="(cookie, index) in trackingTechnologiesAndCookies.cookiePurposes"
        :key="index"
        class="mb-6"
      >
        <strong class="mb-2 block">{{ cookie.name }}</strong>
        <p class="text-gray-800 mb-2">
          <span>{{ cookie.typeLabel }}:</span> {{ cookie.type }}
        </p>
        <p class="text-gray-800 mb-2">
          <span>{{ cookie.administeredBy }}:</span>
          {{ cookie.administeredByValue }}
        </p>
        <p class="text-gray-800">
          <span>{{ cookie.purposeLabel }}:</span> {{ cookie.purpose }}
        </p>
      </li>
    </ul>

    <p class="text-gray-800">{{ trackingTechnologiesAndCookies.footerText }}</p>
  </div>
</template>

<style scoped></style>
