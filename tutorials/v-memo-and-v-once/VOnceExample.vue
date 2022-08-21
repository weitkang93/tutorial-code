<script setup>
import { ref } from 'vue'

const msg = ref('hello world')
const show = ref(true)
</script>

<template>
  <div>
    <p v-once v-if="show">
      {{ msg }}
    </p>
    <button
      @click="show = !show"
      class="px-4 py-2 rounded bg-slate-200 text-slate-600"
    >
      Toggle
    </button>
    <button
      @click="msg = 'changed message'"
      class="px-4 py-2 ml-2 rounded bg-slate-200 text-slate-600"
    >
      Change message
    </button>
    <div class="mt-4">
      Current state:
      <ul>
        <li>msg: {{ msg }}</li>
        <li>show: {{ show }}</li>
      </ul>
    </div>
  </div>
</template>
