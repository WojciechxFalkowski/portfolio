<template>
  <div>
    <PageTitle
      :title="$t('contact.title')"
      :description="$t('contact.subtitle')"
      headingTag="h2"
    />

    <GenericForm
      class="mt-16"
      :fields="formConfiguration.fields"
      :initialValues="[]"
      :submitButton="{
        ...formConfiguration.submitButton,
        isLoading: isUpdatingPageConfiguration,
      }"
      :onSubmit="onSubmit"
      :formClass="formConfiguration.formClass"
    />
  </div>
</template>

<script setup lang="ts">
import { formConfiguration } from "./formConfiguration";

const isUpdatingPageConfiguration = ref(false);

const onSubmit = async (formData: any) => {
  try {
  } catch (error) {
  } finally {
  }
};
</script>
