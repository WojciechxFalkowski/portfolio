<template>
  <ul>
    <li
      v-for="link in navigation"
      :key="link.label"
      class="relative"
    >
      <NuxtLink
        :to="{ hash: link.to }"
        :class="[
          'text-sm/6 flex items-center gap-1 transition-colors',
          activeSection === link.to.replace('#','')
            ? 'text-[#2DD4BF]'
            : 'text-[#0F172A] hover:text-[#2DD4BF]'
        ]"
      >
        {{ t(link.label) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { navigationLinks } from './config';

const { t } = useI18n();
const router = useRouter();

const navigation = inject<Ref<any[]>>('navigation', ref(navigationLinks));

// Przechowujemy ID aktualnie "najbardziej" widocznej sekcji
const activeSection = ref('');

// Słownik (mapa) przechowujący bieżące intersectionRatio dla każdej sekcji
const sectionRatios = ref<Record<string, number>>({});

let observer: IntersectionObserver;

onMounted(() => {
  // Inicjujemy IntersectionObserver z wieloma thresholdami,
  // żeby uzyskać lepszą dokładność intersectionRatio
  observer = new IntersectionObserver((entries) => {
    // Dla każdej sekcji aktualizujemy jej intersectionRatio
    entries.forEach((entry) => {
      // Jeśli sekcja jest w polu widzenia, intersectionRatio będzie > 0
      // Jeśli wyszła z widoku, ratio będzie = 0 (przy danym thresholdzie)
      sectionRatios.value[entry.target.id] = entry.isIntersecting
        ? entry.intersectionRatio
        : 0;
    });

    // Znajdujemy sekcję o największym intersectionRatio
    let bestSectionId = '';
    let maxRatio = 0;
    for (const [sectionId, ratio] of Object.entries(sectionRatios.value)) {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        bestSectionId = sectionId;
      }
    }

    // Jeśli maxRatio = 0, znaczy że żadna sekcja nie jest w widoku
    activeSection.value = maxRatio > 0 ? bestSectionId : '';
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 1], // Możesz dostosować
  });

  // Obserwujemy elementy z ID, które mamy w navigationLinks
  navigation.value.forEach((link) => {
    const id = link.to.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // Domyślnie intersectionRatio = 0
      sectionRatios.value[id] = 0;
      observer.observe(el);
    }
  });
});
</script>
