<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { messages, locale } = useI18n();

const contactUs = computed(() => {
  return (
    (
      messages.value[locale.value] as {
        privacyPolicy: {
          contactUs: {
            title: string;
            description: string;
            contactMethods: {
              email: {
                type: string;
                subValue: string;
                value: string;
                href: string;
              };
              website: {
                type: string;
                subValue: string;
                value: string;
                href: string;
              };
              phone: { type: string; subValue: string; value: string };
            };
          };
        };
      }
    )?.privacyPolicy.contactUs || {}
  );
});
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ contactUs.title }}</h2>
    <p class="text-gray-800 mb-4">{{ contactUs.description }}</p>
    <ul class="list-disc pl-6">
      <li v-if="contactUs.contactMethods.email" class="mb-2">
        {{ contactUs.contactMethods.email.subValue }}
        <a
          :href="contactUs.contactMethods.email.href"
          class="text-blue-600 underline"
        >
          {{ contactUs.contactMethods.email.value }}
        </a>
      </li>
      <li v-if="contactUs.contactMethods.website" class="mb-2">
        {{ contactUs.contactMethods.website.subValue }}
        <a
          :href="contactUs.contactMethods.website.href"
          class="text-blue-600 underline"
        >
          {{ contactUs.contactMethods.website.value }}
        </a>
      </li>
      <li v-if="contactUs.contactMethods.phone" class="mb-2">
        {{ contactUs.contactMethods.phone.subValue }}
        {{ contactUs.contactMethods.phone.value }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
