<template>
  <section
    id="portfolios"
    class="py-8 lg:py-32 flex flex-wrap justify-between relative gap-4 lg:gap-0"
  >
    <TitleWithSubtitle
      :title="'Featured Portfolios'"
      :subtitle="'MY WORKS'"
      headingTag="h2"
      class="flex justify-center basis-full lg:basis-auto"
    />

    <div
      class="flex basis-full justify-center lg:basis-auto lg:justify-normal order-1 lg:order-none"
    >
      <div class="flex gap-4 items-center lg:items-start">
        <button
          @click="goPrev"
          class="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-teal-100 text-teal-600 transition-colors"
          :class="isFirstSlide ? 'opacity-50' : 'hover:bg-teal-200'"
          aria-label="Previous"
          :disabled="isFirstSlide"
        >
          <IconArrowRight class="w-3 h-3 rotate-180" />
        </button>

        <button
          @click="goNext"
          class="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-teal-100 text-teal-600 transition-colors"
          :class="isLastSlide ? 'opacity-50' : 'hover:bg-teal-200'"
          aria-label="Next"
          :disabled="isLastSlide"
        >
          <IconArrowRight class="w-3 h-3" />
        </button>
      </div>
    </div>

    <Carousel
      ref="carousel"
      :breakpoints="carouselBreakpoints"
      :transition="300"
      class="lg:mt-32 w-full"
      :gap="32"
      mouseDrag
      :navigationEnabled="false"
      :paginationEnabled="false"
    >
      <Slide
        v-for="(item, i) in portfolios"
        :key="item.title"
        class="flex flex-wrap border border-[#F5F5F5] rounded-md shadow-sm"
      >
        <div
          class="aspect-[10/8] sm:aspect-[10/6] md:aspect-[10/8] overflow-hidden lg:w-[382px] lg:h-[306px] basis-full max-h-[560px]"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="basis-full flex flex-wrap px-4 gap-3 bg-white py-3">
          <h3 class="text-lg font-semibold text-gray-800 basis-full text-start">
            {{ item.title }}
          </h3>

          <div class="flex flex-wrap items-center gap-3 basis-full">
            <Tag
              v-for="(tag, idx) in item.tags"
              :key="idx"
              :title="tag.title"
              :link="tag.link"
              :icon="tag.icon"
            />
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
import {
  Carousel,
  Slide,
  Navigation as CarouselNavigation,
} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const carousel = ref<InstanceType<typeof Carousel> | null>(null);

// Przykładowe dane (mock)
const portfolios = ref([
  {
    title: "Hotel Agency Website",
    image: "https://picsum.photos/640/640?random=1",
    tags: [
      { title: "Vue", link: "", icon: "" },
      { title: "", link: "http://141.144.224.51/", icon: "" },
    ],
  },
  {
    title: "Real Estate Website",
    image: "https://picsum.photos/640/640?random=2",
    tags: [
      { title: "Vue", link: "", icon: "" },
      { title: "Custom CMS", link: "", icon: "" },
      { title: "Case study", link: "", icon: "" },
      { title: "", link: "https://wellrent-nieruchomosci.pl/", icon: "" },
    ],
  },
  {
    title: "Travel Website",
    image: "https://picsum.photos/640/640?random=3",
    tags: [
      {
        title: "Single Page Application",
        link: "",
        icon: "",
      },
      {
        title: "",
        link: "https://wojciechxfalkowski.github.io/Travel-website",
        icon: "",
      },
    ],
  },
  {
    title: "Travel Website",
    image: "https://picsum.photos/640/640?random=3",
    tags: [
      {
        title: "Single Page Application",
        link: "",
        icon: "",
      },
      {
        title: "",
        link: "https://wojciechxfalkowski.github.io/Travel-website",
        icon: "",
      },
    ],
  },
  {
    title: "Travel Website",
    image: "https://picsum.photos/640/640?random=3",
    tags: [
      {
        title: "Single Page Application",
        link: "",
        icon: "",
      },
      {
        title: "",
        link: "https://wojciechxfalkowski.github.io/Travel-website",
        icon: "",
      },
    ],
  },
]);

const carouselBreakpoints = {
  0: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 2,
  },
  1024: {
    itemsToShow: 3,
  },
};

function goNext() {
  carousel.value?.next?.();
}

const isFirstSlide = computed(
  () => carousel?.value?.data?.currentSlide === carousel?.value?.data?.minSlide
);
const isLastSlide = computed(
  () => carousel?.value?.data?.currentSlide === carousel?.value?.data?.maxSlide
);

function goPrev() {
  carousel.value?.prev?.();
}
</script>
