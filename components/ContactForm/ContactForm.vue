<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import TitleWithSubtitle from "@/components/TitleWithSubtitle.vue";
import { formConfiguration } from "./formConfiguration";
interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

interface Messages {
  [key: string]: {
    contactForm: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      button: string;
    };
    contactInfo: ContactInfo[];
  };
}

const { messages, locale } = useI18n();

const isSendingEmailMessage = ref(false);
const { sendEmail } = useEmailConfiguration();

const onSubmit = async (formData: EmailFields) => {
  try {
    isSendingEmailMessage.value = true;
    await sendEmail(formData);
  } catch (error) {
    console.log(error);
  } finally {
    isSendingEmailMessage.value = false;
  }
};

const contactInfo = computed<ContactInfo[]>(
  () => (messages.value[locale.value]?.contactInfo as ContactInfo[]) || []
);

const contactFormLabels = computed(() => {
  return (
    (messages.value[locale.value]?.contactForm as {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      message: string;
      button: string;
    }) || {}
  );
});
</script>

<template>
  <section id="contact" class="py-8 lg:py-32 bg-[#FBFBFB]">
    <ContainerWrapper>
      <TitleWithSubtitle
        :title="contactFormLabels.title"
        :subtitle="contactFormLabels.subtitle"
        headingTag="h2"
      />

      <div class="pt-8 grid gap-8 lg:gap-32 lg:grid-cols-2">
        <GenericForm
          :fields="formConfiguration.fields"
          :initialValues="[]"
          :submitButton="{
            ...formConfiguration.submitButton,
            isLoading: isSendingEmailMessage,
          }"
          :onSubmit="onSubmit"
          :formClass="formConfiguration.formClass"
        />

        <div class="space-y-6">
          <div
            v-for="info in contactInfo"
            :key="info.type"
            class="flex items-center gap-4"
          >
            <div
              class="w-12 h-12 flex items-center justify-center bg-[#2DD4BF] bg-opacity-25 rounded-lg"
            >
              <img :src="info.icon" :alt="info.type" class="w-6 h-6" />
            </div>
            <div>
              <p class="text-[#0F172A] font-medium">{{ info.type }}</p>
              <div v-if="['Telefon', 'Phone'].includes(info.type)">
                <a :href="`tel:${info.value}`" class="text-[#0F172A]">
                  {{ info.value }}
                </a>
              </div>
              <div v-else-if="['E-Mail', 'E-Mail'].includes(info.type)">
                <a :href="`mailto:${info.value}`" class="text-[#0F172A]">
                  {{ info.value }}
                </a>
              </div>
              <div v-else>
                <p class="text-[#656D72]">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  </section>
</template>
