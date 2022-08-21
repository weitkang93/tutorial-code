<script setup>
import { ref } from "vue";

const msg = ref("hello world");
const show = ref(true);
</script>

<template>
  <div>
    <p v-once v-if="show">
      {{ msg }}
    </p>
    <button @click="show = !show">Toggle</button>
    <button @click="msg = 'changed message'">Change message</button>
    <div>
      Current state:
      <p>msg: {{ msg }}</p>
      <p>show: {{ show }}</p>
    </div>
  </div>
</template>
