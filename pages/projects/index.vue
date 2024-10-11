<template>
  <ContainerWrapper>
    <ProjectsGrid />
  </ContainerWrapper>
</template>
<script setup lang="ts">
import type { Project } from "~/types/project";

const { locale } = useI18n();
const language = locale.value;
console.log(locale.value);
const projetQuery = groq`
  *[_type == "project"] {
    _id,
    slug,
    "title": title.${language},
    "description": description.${language},
		"mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt.${language}
    },
      "alt": alt.${language},
      tags
  }
`;

const { data: projects } = await useSanityQuery<Project[]>(projetQuery);
console.log(projects.value)
// const { data, error } = await useProducts();
</script>
