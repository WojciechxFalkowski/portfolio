<template>
  <section
    id="experience"
    class="work-experiences-container bg-[#FBFBFB] py-8 lg:py-48"
  >
    <ContainerWrapper>
      <TitleWithSubtitle
        :title="$t('workExperienceSection.title')"
        :subtitle="$t('workExperienceSection.subtitle')"
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
              <img
                class="company-logo"
                :src="job.logo"
                loading="lazy"
                :alt="job.name"
              />

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

const { messages, locale } = useI18n();

const jobs = computed<Job[]>(
  () =>
    ((
      messages.value[locale.value] as { workExperienceSection: { work: Job[] } }
    )?.workExperienceSection.work as Job[]) || []
);

const activeIndex = ref<number>(0);

function toggleAccordion(index: number) {
  activeIndex.value = activeIndex.value === index ? 0 : index;
}
</script>

<style>
.work-experiences-container {
  color: #2c2c2c;
}

.experience-list {
  list-style: none;
  padding: 0;
  position: relative;
}

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

.company-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.company-title {
  font-weight: 600;
}

.arrow {
  margin-left: auto;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: rgb(251 251 251 / var(--tw-bg-opacity));
  @media (min-width: 1024px) {
    gap: 16px;
    padding-top: 0;
    padding-bottom: 0;
  }
}

.details-enter-active {
  transition: opacity 0.5s ease;
}

.details-enter-from {
  opacity: 0;
}

.job-position {
  font-size: 1.25rem;
  font-weight: 600;
}

.job-location {
  color: #656d72;
  font-size: 14px;
  @media (min-width: 1024px) {
  }
}
.job-date {
  color: #656d72;
  font-size: 14px;
  @media (min-width: 1024px) {
  }
}

.tags-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 0;

  @media (min-width: 1024px) {
    gap: 4px;
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
