<template>
  <ul>
    <li v-for="link in navigation" :key="link.label" class="relative">
      <router-link
        class="text-sm/6 font-semibold flex items-center gap-1 text-[#0F172A] hover:text-[#2DD4BF]"
        :to="{ path: link.to }"
        activeClass="text-[#2DD4BF]"
        >{{ $t(link.label) }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { navigationLinks } from "./config";
const navigation = inject<Ref<any[]>>("navigation", ref(navigationLinks));
</script>
