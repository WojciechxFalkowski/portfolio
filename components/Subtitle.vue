<template>
  <div class="text-[#656D72] text-sm uppercase tracking-[.25em] greeting-text">
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
.greeting-text::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 1px;
  background-color: #656d72;
  margin-right: 16px;
  vertical-align: middle;
}
</style>
