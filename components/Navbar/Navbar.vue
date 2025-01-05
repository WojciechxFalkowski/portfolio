<script setup lang="ts">
import { navigationLinks } from "../NavigationLinks/config";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const { width } = useWindowSize();

const toggleHamburgerMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

function handleScrollPosition() {
  if (window.innerWidth > 1024) {
    isScrolled.value = window.scrollY > 0;
  } else {
    isScrolled.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScrollPosition);
  handleScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollPosition);
});

watch(width, () => {
  handleScrollPosition();
});

const route = useRoute();

const activeItem = computed(() => {
  return route.path;
});

function closeMobileMenu() {
  isMenuOpen.value = false;
}

const menuItems = inject<Ref<any[]>>("navigation", ref(navigationLinks));
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

        <button class="lg:hidden z-[60]" @click="toggleHamburgerMenu">
          <IconHamburgerMenu :isOpen="isMenuOpen" />
        </button>
      </div>
    </ContainerWrapper>

    <MobileMenuItems
      :menuItems="menuItems"
      :activeItem="activeItem"
      :isMenuOpen="isMenuOpen"
      @closeMenu="closeMobileMenu"
    />
  </header>
</template>

<style>
.scrolled {
  width: 720px;
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
