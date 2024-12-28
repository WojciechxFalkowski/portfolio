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
    class="backdrop-blur-xl border-b border-gray-200 -mb-px sticky w-full top-0 z-50 mx-auto duration-300"
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
