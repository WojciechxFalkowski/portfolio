<script setup lang="ts">
const imageUrl = "/profile.jpg";
</script>

<template>
  <header
    class="h-[calc(100vh-85px)] flex flex-col md:flex-row items-center justify-center md:justify-between lg:py-8 relative md:gap-4"
  >
    <div
      class="space-y-4 lg:space-y-8 order-1 md:-order-none mt-4 lg:mt-0 md:text-left lg:max-w-[50%] my-8 lg:my-0"
    >
      <Subtitle :subtitle="$t('header.greeting')" />

      <h1 class="text-3xl md:text-4xl lg:text-[40px] text-[#2DD4BF]">
        {{ $t("header.title") }}
      </h1>

      <h2 class="text-justify lg:text-left lg:text-[20px] text-[#0F172A]">
        {{ $t("header.description") }}
      </h2>

      <button
        class="mt-4 px-6 py-3 bg-[#2DD4BF] text-white rounded-lg hover:bg-teal-500 transition-all"
      >
        {{ $t("header.contact") }}
      </button>

      <div class="flex">
        <Social />
        <!-- <a href="https://github.com/WojciechxFalkowski" target="_blank"
          ><IconGithub class="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/wojciech-falkowski"
          target="_blank"
        >
          <IconLinkedin class="w-5 h-5" />
        </a> -->
      </div>
    </div>

    <img
      :src="imageUrl"
      alt="Image of Wojciech Falkowski"
      class="h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] object-cover lg:mt-0 rounded-full border-[#2DD4BF] border"
    />

    <IconCircle
      class="absolute top-10 left-10 lg:top-10 lg:left-10 text-[#FFB400]"
    />

    <IconCircle
      class="absolute hidden md:block bottom-20 right-[10%] md:bottom-40 md:left-[10%] text-[#05FF00]"
    />

    <IconCircle
      class="absolute top-20 right-[5%] lg:top-20 lg:left-[35%] text-[#05FF00]"
    />

    <IconSquare
      class="absolute bottom-[45%] sm:bottom-[20%] right-0 lg:top-5 lg:right-[-20px] text-[#2DD4BF]"
    />

    <IconSquare
      class="absolute top-40 left-[0] md:top-[35%] md:left-[40%] rotate-45 text-[#0047FF]"
    />

    <IconTriangle
      class="absolute hidden md:block bottom-[10%] right-[40%] lg:right-[1%] text-[#FF2E00]"
    />
  </header>
</template>

<script setup lang="ts"></script>

<style></style>
