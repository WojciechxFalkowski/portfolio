<template>
  <section id="testimonials" class="py-8 lg:py-32 bg-[#FBFBFB]">
    <ContainerWrapper>
      <TitleWithSubtitle
        :title="$t('testimonialSection.title')"
        :subtitle="$t('testimonialSection.subtitle')"
        headingTag="h2"
        class="flex justify-center"
      />

      <Carousel
        ref="carousel"
        :breakpoints="carouselBreakpoints"
        :transition="300"
        class="mt-16 lg:mt-32 w-full"
        :gap="32"
        mouseDrag
        :navigationEnabled="false"
        :paginationEnabled="false"
        @slide-end="handleSlideEnd"
      >
        <Slide
          v-for="(testimonial, i) in testimonials"
          :key="testimonial.name"
          class="rounded-md"
        >
          <div class="bg-white rounded-lg px-4 pb-4 mt-[48px]">
            <!-- Avatar -->
            <div class="flex justify-center -translate-y-[48px] h-[80px]">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                loading="lazy"
                class="w-24 h-24 rounded-full object-cover shadow-sm"
              />
            </div>

            <!-- Message -->
            <p class="text-[#0F172A] leading-relaxed text-justify text-sm">
              {{ testimonial.message }}
            </p>

            <!-- Name -->
            <div class="mt-5 text-left">
              <h3 class="text-[#0F172A] text-sm">
                {{ testimonial.name }}
              </h3>
              <p
                class="mt-2 text-[#656D72] text-xs bg-[#FBFBFB] inline-block px-2 py-1 rounded-md"
              >
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>

      <div class="flex justify-center mt-6 lg:mt-10">
        <div class="flex gap-2">
          <button
            v-for="(visibleDot, index) in visibleDots"
            :key="visibleDot"
            @click="goToSlide(visibleDot)"
            class="h-[10px] rounded-full transition-all"
            :class="{
              'w-8 rounded-full bg-[#1E293B]': currentSlide === visibleDot,
              'w-[10px] bg-[#CBD5E1]': currentSlide !== visibleDot,
            }"
            :aria-label="'Go to slide ' + (visibleDot + 1)"
          ></button>
        </div>
      </div>
    </ContainerWrapper>
  </section>
</template>

<script setup lang="ts">
import {
  Carousel,
  Slide,
  Navigation as CarouselNavigation,
} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, computed } from "vue";

interface Testimonial {
  avatar: string;
  message: string;
  name: string;
  role: string;
}
const carousel = ref<InstanceType<typeof Carousel> | null>(null);

const { messages, locale } = useI18n();

const testimonials = computed<Testimonial[]>(
  () =>
    ((
      messages.value[locale.value] as {
        testimonialSection: { testimonials: Testimonial[] };
      }
    )?.testimonialSection.testimonials as Testimonial[]) || []
);

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

const itemsToShow = ref(1);

const updateAmountOfDotsToShow = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    itemsToShow.value = carouselBreakpoints[1024].itemsToShow;
    startDotIndex.value = 1;
    slidesToExclude.value = 2;
    currentSlide.value = 1;
  } else if (width >= 768) {
    startDotIndex.value = 0;
    slidesToExclude.value = 0;
    currentSlide.value = 0;
    itemsToShow.value = carouselBreakpoints[768].itemsToShow;
  } else {
    startDotIndex.value = 0;
    slidesToExclude.value = 0;
    currentSlide.value = 0;
    itemsToShow.value = carouselBreakpoints[0].itemsToShow;
  }

  goToSlide(currentSlide.value);
};

onMounted(() => {
  window.addEventListener("resize", updateAmountOfDotsToShow);
  updateAmountOfDotsToShow();
});

const visibleDots = computed(() => {
  const totalSlides = testimonials.value.length; // Liczba slajdów
  const dotsCount = Math.max(totalSlides - slidesToExclude.value, 1); // Minimum 1 kropka
  return Array.from({ length: dotsCount }, (_, i) => {
    return i + startDotIndex.value;
  });
});

const currentSlide = ref(1);
const startDotIndex = ref(1);
const slidesToExclude = ref(2);

function goToSlide(index: number) {
  currentSlide.value = index;
  carousel.value?.slideTo(index);
}
const handleSlideEnd = ({
  currentSlideIndex,
  prevSlideIndex,
  slidesCount,
}: {
  currentSlideIndex: number;
  prevSlideIndex: number;
  slidesCount: number;
}) => {
  currentSlide.value = currentSlideIndex;
};
</script>
