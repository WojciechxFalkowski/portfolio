<template>
  <button
    @click="changeColor"
    type="button"
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
    :aria-label="isSun ? 'Switch to dark mode' : 'Switch to light mode'"
  >
    <IconSun v-if="isSun" />
    <IconMoon v-else />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isSun = ref(true);

const changeColor = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
  changeToggleIcon();
};

const changeToggleIcon = () => {
  isSun.value = !isSun.value;
};

onMounted(() => {
  isSun.value = colorMode.preference === "light";
});
</script>
