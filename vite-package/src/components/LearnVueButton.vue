<template>
  <button class="lv-button">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({});
</script>

<style scoped>
.lv-button {
  background: #43b883;
  color: white;
  outline: none;
  border: none;
}
</style>
