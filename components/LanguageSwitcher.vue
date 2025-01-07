<template>
  <div class="relative w-8 h-8 overflow-hidden bg-[#23A5A4] text-white">
    <div
      class="transition-transform duration-300 ease-in-out mx-auto text-center"
      :class="currentLanguage === 'pl' ? '-translate-y-8' : 'translate-y-0'"
    >
      <div class="h-8 flex items-center justify-center">EN</div>

      <div class="h-8 flex items-center justify-center">PL</div>
    </div>

    <button
      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      @click="toggleLanguage"
      aria-label="Change Language"
    ></button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const currentLanguage = computed(() => locale.value);

function toggleLanguage() {
  if (locale.value === "pl") {
    router.push(switchLocalePath("en"));
  } else {
    router.push(switchLocalePath("pl"));
  }
}
</script>
