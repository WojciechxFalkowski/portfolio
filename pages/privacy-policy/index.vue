<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useMetaTags } from "@/composables/useMetaTags";
import { useStructuredData } from "@/composables/useStructuredData";

const { t } = useI18n();

useMetaTags({
  title: "Privacy Policy - Wojciech Falkowski",
  description:
    "Privacy policy for wojciechfalkowski.pl. Learn how we collect, use, and protect your personal information.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "website privacy",
    "data security",
  ],
});

// Add breadcrumb navigation with translations
useStructuredData({
  type: "BreadcrumbList",
  data: {
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://wojciechfalkowski.pl",
          name: "Home",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://wojciechfalkowski.pl/privacy-policy",
          name: "Privacy Policy",
        },
      },
    ],
  },
  translations: {
    pl: {
      home: "Strona główna",
      breadcrumb_privacy_policy: "Polityka prywatności",
    },
    en: {
      home: "Home",
      breadcrumb_privacy_policy: "Privacy Policy",
    },
  },
});
</script>

<template>
  <ContainerWrapper class="my-8">
    <PrivacyHeader class="my-8" />
    <InterpretationSection class="my-8" />
    <Definitions class="my-8" />
    <PersonalDataSection class="my-8" />
    <CookiesSection class="my-8" />
    <UseOfPersonalDataSection class="my-8" />
    <RetentionOfPersonalData class="my-8" />
    <TransferOfPersonalData class="my-8" />
    <DeletePersonalData class="my-8" />
    <DisclosureOfPersonalData class="my-8" />
    <SecurityOfPersonalData class="my-8" />
    <ChildrensPrivacy class="my-8" />
    <LinksToOtherWebsites class="my-8" />
    <ChangesToPrivacyPolicy class="my-8" />
    <ContactUs class="my-8" />
  </ContainerWrapper>
</template>

<style></style>
