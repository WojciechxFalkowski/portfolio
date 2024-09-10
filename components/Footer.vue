<template>
  <ContainerWrapper>
    <footer class="border-t pt-5 mt-10 pb-5 lg:pt-10 lg:mt-20 lg:pb-10">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div
          class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-1 text-sm font-medium text-[#0F172A] dark:text-zinc-200"
        >
          <IconLogo class="w-8" />

          <NavigationLinks class="items-center gap-x-8 flex"/>
        </div>

        <Social />
      </div>

      <div
        class="mt-8 flex justify-between items-center flex-col gap-8 lg:flex-row lg:gap-0"
      >
        <p class="order-1 lg:order-none text-center lg:text-left">Made with 💖 by Wojciech Falkowski</p>

        <div class="flex justify-center lg:justify-normal gap-8 lg:gap-4 w-full lg:w-auto">
          <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]"
            >Privacy Policy</router-link
          >

          <!-- <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]"
            >Terms of Service</router-link
          > -->

          <router-link :to="{ path: '/' }" class="hover:text-[#2DD4BF]"
            >Cookies Settings</router-link
          >
        </div>
      </div>

      <p class="mt-4 lg:mt-8 text-sm text-[#0F172A] dark:text-zinc-500 text-center">
        &copy; {{ recentYear }} Wojciech Falkowski - wojciechfalkowski.pl. All
        rights reserved.
      </p>
    </footer>
  </ContainerWrapper>
</template>

<script setup lang="ts">
const recentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
