<template>
  <section
    id="experience"
    class="work-experiences-container bg-[#FBFBFB] py-8 lg:py-32"
  >
    <ContainerWrapper>
      <TitleWithSubtitle
        :title="'Work Experices'"
        :subtitle="'career path'"
        headingTag="h2"
      />

      <ul class="experience-list mt-8">
        <li
          v-for="(job, index) in jobs"
          :key="job.id"
          class="experience-item"
          :class="activeIndex === index ? 'bg-[#FFF]' : ''"
        >
          <button class="company-header" @click="toggleAccordion(index)">
            <div class="flex gap-4 items-center">
              <img class="company-logo" :src="job.logo" :alt="job.name" />

              <span class="company-title">{{ job.name }}</span>
            </div>

            <IconArrowRight
              class="w-3 h-3"
              :class="activeIndex === index ? 'rotate-90' : '▶'"
            />
          </button>

          <Transition name="details">
            <div class="details" v-show="activeIndex === index">
              <h3 class="job-position">{{ job.title }}</h3>
              <p class="job-location">{{ job.location }}</p>
              <p class="job-date">{{ job.date }}</p>

              <ul class="tags-list">
                <li v-for="tech in job.technologies" :key="tech" class="tag">
                  {{ tech }}
                </li>
              </ul>

              <ul class="tasks-list">
                <li v-for="(task, tIdx) in job.tasks" :key="tIdx">
                  <span></span>
                  <p>{{ task }}</p>
                </li>
              </ul>
            </div>
          </Transition>
        </li>
      </ul>
    </ContainerWrapper>
  </section>
</template>

<script setup lang="ts">
interface Job {
  id: number;
  name: string;
  title: string;
  location: string;
  date: string;
  logo: string;
  technologies: string[];
  tasks: string[];
}

const { t, messages, locale } = useI18n();

// Pobranie danych o "work" z tłumaczeń

const jobs = computed<Job[]>(
  () => (messages.value[locale.value]?.work as Job[]) || []
);
// Mapowanie danych na odpowiednią strukturę

// Indeks otwartego akordeonu
const activeIndex = ref(0);

function toggleAccordion(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>

<style scoped>
/* Zwykły font + kolory */
.work-experiences-container {
  /* display: flex;
  flex-wrap: wrap; */
  color: #2c2c2c;
}

/* Lista: mobile-first */
.experience-list {
  /* flex-basis: 100%; */
  list-style: none;
  padding: 0;
  position: relative; /* Baza do absolute na desktop */
  /* max-width: 600px;  */
}

/* Każdy <li> */
.experience-item {
  /* margin-bottom: 1rem; */
  /* padding-bottom: 1rem; */
  /* border-bottom: 1px solid #eee; */
}

/* Przycisk z logo + nazwą */
.company-header {
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 8px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 16px;
  }
}

/* Logo */
.company-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* Nazwa */
.company-title {
  font-weight: 600;
}

/* Strzałka z prawej */
.arrow {
  margin-left: auto;
}

/* Treść opisu – mobile: normalnie pod spodem, nic nadzwyczajnego. */
.details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* border-left: 3px solid #eee; */
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: rgb(251 251 251 / var(--tw-bg-opacity));
  @media (min-width: 1024px) {
    gap: 16px;
    padding-top: 0;
    padding-bottom: 0;
    /* padding-left: 128px; */
  }
}

.details-enter-active {
  transition: opacity 0.5s ease;
}

.details-enter-from {
  opacity: 0;
}

/* Stanowisko */
.job-position {
  font-size: 1.25rem;
  font-weight: 600;
  /* margin-bottom: 0.25rem; */
}

/* Lokalizacja, daty */
.job-location {
  color: #656d72;
  /* margin-bottom: 0.25rem; */
  font-size: 14px;
  @media (min-width: 1024px) {
    /* font-size: 16px; */
  }
}
.job-date {
  color: #656d72;
  /* margin-bottom: 1rem; */
  font-size: 14px;
  @media (min-width: 1024px) {
    /* font-size: 16px; */
  }
}

/* Tagi (technologie) */
.tags-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* margin: 0 0 1rem 0; */
  padding: 0;

  @media (min-width: 1024px) {
    gap: 16px;
  }
}
.tag {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  color: #656d72;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 12px;
  @media (min-width: 1024px) {
  }
}

.tasks-list {
  list-style: none;
  margin: 0;
  padding-top: 8px;
  border-top: 1px solid #f1f1f1;
  @media (min-width: 1024px) {
    padding-top: 16px;
  }
}
.tasks-list li {
  display: flex;
  position: relative;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 14px;
  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
}
.tasks-list li span {
  min-width: 10px;
  height: 2px;
  background-color: #d9d9d9;
}

@media (min-width: 1024px) {
  .experience-list {
    max-width: 320px;
  }

  .experience-item .details {
    position: absolute;
    top: 0;
    left: min(35vw, 500px);
    width: min(57vw, 720px);
  }
}
@media (min-width: 1300px) {
  .experience-item .details {
    left: 400px;
    width: 820px;
  }
}
</style>
