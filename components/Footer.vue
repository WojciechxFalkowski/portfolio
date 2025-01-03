<template>
  <ContainerWrapper>
    <footer class="pt-5 pb-5 lg:pt-10 lg:pb-10">
      <section
        class="flex flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <div
          class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-1 text-sm font-medium text-[#0F172A] dark:text-zinc-200"
        >
          <IconLogo class="hidden sm:block w-8" />

          <!-- <NavigationLinks class="items-center gap-x-8 flex flex-wrap" /> -->
        </div>

        <div class="flex gap-2 flex-col text-center text-sm text-[#656D72]">
          <p>Designed by Wojciech Falkowski</p>
        </div>

        <Social />
      </section>

      <section
        class="flex flex-col items-center justify-between gap-6 sm:flex-row mt-8 text-sm text-[#656D72]"
      >
        <p>
          &copy; {{ recentYear }}
          {{ $t("common.allRightsReserve") }}
        </p>

        <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF] underline">
          {{ $t("common.privacyPolicy") }}
        </router-link>
      </section>

      <!-- <div
        class="mt-8 flex justify-between items-center flex-col gap-8 lg:flex-row lg:gap-0"
      > -->
      <!-- <p class="order-1 lg:order-none text-center lg:text-left"> -->
      <!-- Made with 💖 by Wojciech Falkowski -->
      <!-- </p> -->
      <!-- 
        <div
          class="flex justify-center lg:justify-normal gap-8 lg:gap-4 w-full lg:w-auto"
        > -->
      <!-- <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]">
            {{ $t("common.privacyPolicy") }}
          </router-link> -->

      <!-- <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]"
            >Terms of Service</router-link
          > -->

      <!-- <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]">
            {{ $t("common.cookiesSettings") }}
          </router-link> -->
      <!-- </div> -->
      <!-- </div> -->
    </footer>
  </ContainerWrapper>
</template>

<script setup lang="ts">
const recentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
