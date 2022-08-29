<script setup>
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target)

const MAX_ROTATION = 8
const rotateY = computed(() =>
  (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2)
)

const rotateX = computed(() =>
  (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)
)

// const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2)
const rotation = computed(() =>
  isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
)

const transition = computed(() =>
  isOutside.value ? 'transform 0.5s ease' : 'transform 0.25s ease-out'
)
</script>
<template>
  <div class="w-full p-16 bg-gray-700" ref="target">
    <div class="w-full h-64 p-8 bg-gray-800 rounded card">
      <h1 class="font-2xl">Hello YouTube</h1>
    </div>
  </div>
</template>

<style scoped>
.card {
  transform: v-bind(rotation);
  transition: v-bind(transition);
}
</style>
