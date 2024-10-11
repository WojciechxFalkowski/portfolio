<script setup lang="ts">
const imageUrl = "/profile.jpg";
</script>

<template>
  <header
    class="h-[calc(100vh-85px)] flex flex-col md:flex-row items-center justify-center md:justify-between lg:py-8 relative md:gap-4"
  >
    <div
      class="lg:space-y-2 order-1 md:-order-none mt-4 lg:mt-0 text-center md:text-left"
    >
      <h1 class="text-[#0F172A] text-lg mt-4 lg:mt-0">
        {{ $t("header.greeting") }}
      </h1>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2DD4BF]">
        {{ $t("header.title") }}
      </h2>

      <p class="lg:text-lg text-[#0F172A] mt-2 lg:mt-0 lg:py-2">
        {{ $t("header.description") }}
      </p>

      <button
        class="mt-4 px-6 py-3 bg-[#2DD4BF] text-white rounded-lg hover:bg-teal-500 transition-all"
      >
        {{ $t("header.contact") }}
      </button>
    </div>

    <img
      :src="imageUrl"
      alt="Image of Wojciech Falkowski"
      class="rounded-lg h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-cover lg:mt-0"
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
