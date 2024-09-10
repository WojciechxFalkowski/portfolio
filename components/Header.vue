<script setup lang="ts">
const imageUrl = "/profile.jpg";
</script>

<template>
  <header class="flex flex-col lg:flex-row items-center justify-between pt-4 lg:py-8 bg-white relative">
    <div class="lg:space-y-4 order-1 lg:-order-none mt-4">
      <h1 class="text-[#0F172A] text-lg mt-4 lg:mt-0">Hej, jestem Wojtek</h1>

      <h2 class="text-5xl font-bold text-[#2DD4BF]">Software Engineer</h2>

      <p class="text-lg text-[#0F172A] mt-2 lg:mt-0">
        Specjalizuję się w tworzeniu stron internetowych
      </p>

      <button
        class="mt-4 px-6 py-3 bg-[#2DD4BF] text-white rounded-lg hover:bg-teal-500 transition-all"
      >
        Skontaktuj się
      </button>
    </div>

    <img
      :src="imageUrl"
      alt="Image of Wojciech Falkowski"
      class="rounded-lg h-[200px] lg:w-[500px] lg:h-[500px] object-cover lg:mt-0"
    />

    <IconCircle class="absolute top-10 left-10 lg:top-10 lg:left-10 text-[#FFB400]" />

    <IconCircle class="absolute bottom-20 right-[10%] lg:bottom-20 lg:left-[10%] text-[#05FF00]" />

    <IconCircle class="absolute top-20 right-[5%] lg:top-20 lg:left-[35%] text-[#05FF00]" />

    <IconSquare class="absolute bottom-[45%] right-0 lg:top-5 lg:right-[-20px] text-[#2DD4BF]" />

    <IconSquare
      class="absolute top-40 left-[0] lg:bottom-40 lg:left-[40%] rotate-45 text-[#0047FF]"
    />

    <IconTriangle class="absolute bottom-0 right-[40%] lg:bottom-0 lg:right-[-20px] text-[#FF2E00]" />
  </header>
</template>

<script setup lang="ts"></script>
