<script setup>
import { ref } from 'vue'

const subscribers = ref(4000)
const views = ref(10000)
const likes = ref(3000)
</script>

<template>
  <div>
    <p>
      This section will only re-render when <code>subscribers</code> update.
    </p>
    <ul v-memo="[subscribers]">
      <ul>
        Subscribers:
        {{
          subscribers
        }}
      </ul>
      <ul>
        Views:
        {{
          views
        }}
      </ul>
      <ul>
        Likes:
        {{
          likes
        }}
      </ul>
    </ul>
    <button
      @click="subscribers++"
      class="px-4 py-2 rounded bg-slate-200 text-slate-600"
    >
      Subscribers++
    </button>
    <button
      @click="views++"
      class="px-4 py-2 ml-2 rounded bg-slate-200 text-slate-600"
    >
      Views++
    </button>
    <button
      @click="likes++"
      class="px-4 py-2 ml-2 rounded bg-slate-200 text-slate-600"
    >
      Likes++
    </button>
    <div>
      <p>Current state:</p>
      <p>Subscribers: {{ subscribers }}</p>
      <p>Views: {{ views }}</p>
      <p>Likes: {{ likes }}</p>
    </div>
  </div>
</template>
