<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import TitleWithSubtitle from "@/components/TitleWithSubtitle.vue";

// Interfejs dla danych edukacyjnych
interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  date: string;
  grade: string;
  logo: string;
}

// Interfejs dla umiejętności
interface Skill {
  name: string;
  icon: string;
}

const { messages, locale } = useI18n();

// Dane pochodzące z tłumaczeń
const education = computed<Education[]>(
  () => messages.value[locale.value]?.education || []
);

const skills = ref<Skill[]>([
  { name: "JavaScript", icon: "icon_javascript.svg" },
  { name: "TypeScript", icon: "icon_typescript.svg" },
  { name: "Vue", icon: "icon_vue.svg" },
  { name: "Nuxt", icon: "icon_nuxt.svg" },
  { name: "Node.js", icon: "icon_nodejs.svg" },
  { name: "Nest.js", icon: "icon_nestjs.svg" },
  { name: "PostgreSQL", icon: "icon_postgresql.svg" },
  { name: "Stripe", icon: "icon_stripe.svg" },
  { name: "HTML", icon: "icon_html.svg" },
  { name: "Scss/Css", icon: "icon_css.svg" },
  { name: "TailwindCSS", icon: "icon_tailwind.svg" },
  { name: "Bootstrap 5", icon: "icon_bootstrap.svg" },
  { name: "Vite", icon: "icon_vitejs.svg" },
  { name: "Sanity", icon: "icon_sanity.svg" },
  { name: "Java", icon: "icon_java.svg" },
  { name: "Spring boot 3", icon: "icon_spring_boot.svg" },
  { name: "Cypress", icon: "icon_cypress.svg" },
  { name: "Figma", icon: "icon_figma.svg" },
  { name: "Storybook", icon: "icon_storybook.svg" },
  { name: "Git", icon: "icon_git.svg" },
]);
</script>

<template>
  <section id="skills" class="py-12 lg:py-24">
    <!-- Tytuł sekcji -->
    <TitleWithSubtitle
      :title="'Education & Skills'"
      :subtitle="'learning path'"
      headingTag="h2"
    />

    <div class="mt-8 grid gap-8 lg:grid-cols-12">
      <!-- Sekcja edukacji -->
      <div class="col-span-12 lg:col-span-4">
        <ul class="space-y-6">
          <li
            v-for="item in education"
            :key="item.id"
            class="flex items-start gap-4"
          >
            <img :src="item.logo" :alt="item.institution" class="w-12 h-12" />
            <div>
              <h3 class="text-lg font-bold text-[#0F172A] text-[16px]">
                {{ item.institution }}
              </h3>
              <p class="text-sm text-[#656D72]">
                {{ item.degree }} - {{ item.field }}
              </p>

              <p class="text-sm text-[#0F172A]">
                {{ item.date }}
              </p>

              <p class="text-sm text-[#656D72]">Grade: {{ item.grade }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Sekcja umiejętności -->
      <div class="col-span-12 lg:col-span-8">
        <p class="text-[#656D72] mb-6 text-sm text-justify">
          For 4+ years I have been continuously learning in the field of
          front-end and experimenting with new technologies and frameworks. Here
          you can see a summary of my skills.
        </p>
        <div
          class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-x-4 md:gap-y-4 xl:gap-x-5 xl:gap-y-5"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="flex flex-col items-center"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-8 h-8 md:w-12 md:h-12"
            />
            <p class="mt-1 md:mt-2 text-xs lg:text-sm text-[#0F172A]">
              {{ skill.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
