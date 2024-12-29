<template>
  <p class="text-[#656D72] text-sm uppercase tracking-[.25em] greeting-text">
    {{ subtitle }}
  </p>
</template>

<script lang="ts" setup>
defineProps({
  subtitle: {
    type: String as PropType<string | number | undefined>,
    required: false,
    default: () => "",
  },
});
</script>

<style>
.greeting-text::before {
  @media (min-width: 1024px) {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    background-color: #656d72;
    margin-right: 16px;
    vertical-align: middle;
  }
}
</style>
