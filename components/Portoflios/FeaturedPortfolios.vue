<template>
  <section
    id="portfolios"
    class="py-8 lg:py-32 flex flex-wrap justify-between relative gap-4 lg:gap-0"
  >
    <TitleWithSubtitle
      :title="$t('portfolios.title')"
      :subtitle="$t('portfolios.description')"
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
        :class="[
          'flex flex-wrap items-start w-full border border-[#F5F5F5] rounded-md shadow-sm transition-[transform,box-shadow] duration-200',
          getProjectLink(item)
            ? 'cursor-pointer hover:-translate-y-1 hover:shadow-md'
            : '',
        ]"
        :tabindex="getProjectLink(item) ? 0 : undefined"
        :role="getProjectLink(item) ? 'link' : undefined"
        :aria-label="
          getProjectLink(item)
            ? `${$t('common.openLink')} ${item.title}`
            : undefined
        "
        @pointerdown="handleCardPointerDown"
        @pointermove="handleCardPointerMove"
        @click="handleCardClick(item)"
        @keydown.enter="handleCardClick(item)"
        @keydown.space.prevent="handleCardClick(item)"
      >
        <div
          class="relative w-full shrink-0 overflow-hidden aspect-[10/8] lg:aspect-auto lg:h-[306px]"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            fetchpriority="low"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="basis-full flex flex-wrap px-4 gap-3 bg-white py-3">
          <h3 class="text-lg font-semibold text-gray-800 basis-full text-start">
            {{ item.title }}
          </h3>

          <p
            v-if="item.description"
            class="text-sm text-[#656D72] leading-relaxed basis-full text-start"
          >
            {{ item.description }}
          </p>

          <div class="flex flex-wrap items-center gap-2 basis-full">
            <Tag
              v-for="(tag, idx) in item.tags"
              :key="idx"
              :title="tag.title"
              :link="tag.link"
              :icon="tag.icon"
              :suppress-link="Boolean(getProjectLink(item))"
            />
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup lang="ts">
interface PortfolioProject {
  title: string;
  image: string;
  description?: string;
  tags: PortfolioTag[];
}

interface PortfolioTag {
  title: string;
  link: string;
  icon: string;
}

import {
  Carousel,
  Slide,
  Navigation as CarouselNavigation,
} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const carousel = ref<InstanceType<typeof Carousel> | null>(null);

const { messages, locale } = useI18n();

const portfolios = computed<PortfolioProject[]>(
  () =>
    ((
      messages.value[locale.value] as {
        portfolios: {
          projects: PortfolioProject[];
        };
      }
    )?.portfolios.projects as PortfolioProject[]) || []
);

const cardPointerState = reactive({
  startX: 0,
  startY: 0,
  hasMoved: false,
});

const getProjectLink = (item: PortfolioProject): string =>
  item.tags.find((tag) => tag.link)?.link ?? "";

const handleCardPointerDown = (event: PointerEvent): void => {
  cardPointerState.startX = event.clientX;
  cardPointerState.startY = event.clientY;
  cardPointerState.hasMoved = false;
};

const handleCardPointerMove = (event: PointerEvent): void => {
  const deltaX = Math.abs(event.clientX - cardPointerState.startX);
  const deltaY = Math.abs(event.clientY - cardPointerState.startY);
  if (deltaX > 5 || deltaY > 5) {
    cardPointerState.hasMoved = true;
  }
};

const handleCardClick = (item: PortfolioProject): void => {
  if (cardPointerState.hasMoved) {
    return;
  }
  const url = getProjectLink(item);
  if (url) {
    navigateTo(url, { external: true });
  }
};

const carouselBreakpoints = {
  0: {
    itemsToShow: 1,
  },
  550: {
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

<style scoped>
:deep(.carousel__slide) {
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
}

:deep(.carousel__track) {
  align-items: flex-start;
}
</style>
