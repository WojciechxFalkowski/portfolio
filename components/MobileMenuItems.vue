<template>
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="testAA fixed inset-0 bg-white z-50 lg:hidden h-screen"
    >
      <div class="flex flex-col items-center justify-center h-full space-y-6">
        <a
          v-for="item in menuItems"
          :key="item.label"
          :href="item.to"
          class="link-underline py-2"
          :class="{ 'router-link-active': isActive(item.to) }"
          @click="handleLinkClick"
        >
          {{ $t(item.label) }}
        </a>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

type MenuItem = {
  label: string;
  to: string;
};

const props = withDefaults(
  defineProps<{
    menuItems: MenuItem[];
    isMenuOpen: boolean;
  }>(),
  { isMenuOpen: false }
);

const { menuItems, isMenuOpen } = toRefs(props);
const emit = defineEmits(["closeMenu"]);

function closeMenu() {
  emit("closeMenu");
}

function handleLinkClick(event: Event) {
  closeMenu();
}

function isActive(hash: string) {
  return window.location.hash === hash;
}
</script>

<style>
/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Link underline and hover styles */
.link-underline {
  position: relative;
  display: inline-block;
  color: #4b5563; /* Tailwind's gray-600 */
  overflow: hidden;
}

.link-underline::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 100%;
  height: 2px;
  background-color: #2dd4bf; /* Tailwind's teal-400 */
  transition: transform 0.3s ease;
}

.link-underline:hover::after,
.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
}
</style>
