<template>
  <div
    class="flex border border-b-0 border-gray-200 dark:border-gray-700 relative not-prose p-4 border-t-0 bg-white dark:bg-gray-900"
  >
    <div class="flex flex-col items-center justify-center py-8 min-h-0 w-full">
      <p class="text-base font-semibold text-primary">{{ status }}</p>
      <h1
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
      >
        {{ name }}
      </h1>
      <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
        {{ message }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button
          type="button"
          class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center"
        >
          <span>Go back home</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  status: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>
