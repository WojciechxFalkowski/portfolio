<script setup lang="ts">
import { navigationLinks } from "~/components/NavigationLinks/config";
const navigation = inject<Ref<any[]>>("navigation", ref(navigationLinks));
</script>

<template>
  <header
    class="bg-white/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
  >
    <ContainerWrapper
      class="flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <a
          href="/"
          class="flex-shrink-0 font-bold text-xl text-[#0F172A] dark:text-white flex items-end gap-1.5"
          aria-label="Wojciech Falkowski logo"
        >
          <IconLogo class="w-8" />
        </a>
      </div>

      <NavigationLinks class="items-center gap-x-8 hidden lg:flex"/>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ColorModeButton></ColorModeButton>

        <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <span
            class="iconify i-heroicons:bars-3-20-solid flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </ContainerWrapper>
  </header>
</template>
