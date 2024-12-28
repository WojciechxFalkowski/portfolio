<script setup lang="ts">
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const toggleHamburgerMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
function handleScroll() {
  if (window.innerWidth > 1024) {
    isScrolled.value = window.scrollY > 0;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="backdrop-blur-xl bg-[#f5fcff] border-b border-gray-200 dark:border-gray-800 -mb-px sticky w-full top-0 z-50 mx-auto duration-300"
    :class="[isScrolled ? 'scrolled' : '']"
  >
    <ContainerWrapper
      class="flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <RouterLink
          to="/"
          class="flex-shrink-0 font-bold text-xl text-[#0F172A] dark:text-white flex items-end gap-1.5"
          aria-label="Wojciech Falkowski logo"
        >
          <IconLogo class="w-8 h-8" />
        </RouterLink>
      </div>

      <NavigationLinks class="items-center lg:gap-x-8 hidden lg:flex" />

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <!-- <ColorModeButton></ColorModeButton> -->
        <LanguageSwitcher class="hidden lg:block" />

        <!-- <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <span
            class="iconify i-heroicons:bars-3-20-solid flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          ></span>
        </button> -->
        <button class="lg:hidden" @click="toggleHamburgerMenu">
          <IconHamburgerMenu :isOpen="isMenuOpen" />
        </button>
      </div>
    </ContainerWrapper>
  </header>
</template>

<style>
.scrolled {
  width: 600px;
  /* margin: 0 auto; */
  top: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  padding: unset;
  background: unset;
  padding-top: 8px;
  padding-bottom: 8px;
}
/* .scrolled div {
  padding: 0 8px;
} */
</style>
