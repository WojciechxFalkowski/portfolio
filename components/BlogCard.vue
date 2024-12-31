<template>
  <article class="relative group flex flex-col w-full gap-y-6">
    <div
      class="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none"
    >
      <img
        :src="image"
        :alt="alt"
        class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"
      />
    </div>
    <div class="flex flex-col justify-between flex-1">
      <div class="flex-1">
        <a
          :href="url"
          class="focus:outline-none"
          :aria-label="title"
          tabindex="-1"
        >
          <span class="absolute inset-0" aria-hidden="true"></span>
        </a>
        <div class="mb-3">
          <span
            class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25"
          >
            {{ category }}
          </span>
        </div>
        <h2
          class="text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"
        >
          {{ title }}
        </h2>
        <div
          class="text-base text-gray-500 dark:text-gray-400 mt-1 line-clamp-2"
        >
          {{ description }}
        </div>
      </div>
      <div class="relative flex items-center gap-x-3 mt-4">
        <div class="inline-flex flex-row-reverse justify-end">
          <span
            class="inline-flex items-center justify-center flex-shrink-0 rounded-full h-6 w-6 text-xs ring-white dark:ring-gray-900 -me-1.5 first:me-0 relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform"
          >
            <img
              :src="author.avatar"
              :alt="author.name"
              class="rounded-full h-6 w-6 text-xs"
            />
            <a
              :href="author.twitter"
              rel="noopener noreferrer"
              target="_blank"
              class="focus:outline-none"
              tabindex="-1"
            >
              <span class="absolute inset-0" aria-hidden="true"></span>
            </a>
          </span>
        </div>
        <time
          v-if="date"
          :datetime="date"
          class="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none"
        >
          {{ formattedDate }}
        </time>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  category: String,
  description: String,
  date: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
    default: () => ({
      name: "",
      avatar: "",
      twitter: "",
    }),
  },
  image: String,
  alt: String,
  url: String,
});

const formattedDate = computed(() => {
  if (props.date) {
    return new Date(props.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else {
    return "Date not available";
  }
});
</script>
