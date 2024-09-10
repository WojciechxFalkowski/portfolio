<template>
  <div class="flex flex-col mt-8 gap-4">
    <h1 class="text-3xl font-bold">My Portfolio</h1>

    <h2 class="text-sm text-[#64748B]">Recent Projects</h2>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :imageSrc="project.image"
      :alt="project.alt"
      :link="project.url"
      :linkText="project.urlText || 'View project'"
      :badge="project.badge"
    />
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  url: string;
  urlText?: string;
  badge?: string;
}

const { data: projects } = await useFetch<Project[]>("/api/projects");
</script>

<style></style>
