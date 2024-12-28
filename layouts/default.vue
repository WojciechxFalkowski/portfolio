<script setup lang="ts"></script>

<template>
  <Navbar class="py-2.5" />

  <slot />

  <!-- <AnimatedVisibility @sendIsVisibleEvent="sendIsVisibleFooter">
      <Footer class="container mx-auto my-8 lg:mt-16" />
    </AnimatedVisibility> -->

  <!-- <CookieBanner /> -->
  <Footer class="" />
</template>
