<script setup>
import { ref } from "vue";
 
const subscribers = ref(4000);
const views = ref(10000);
const likes = ref(3000);

</script>

<template>
 <div>
   <p v-memo="[subscribers]">
     <p>Subscribers: {{subscribers}}</p>
     <p>Views: {{views}}</p>
     <p>Likes: {{likes}}</p>
   </p>
   <button @click="subscribers++">Subscribers++</button>
   <button @click="views++">Views++</button>
   <button @click="likes++">Likes++</button>
   <div>
     <p>Current state:</p>
     <p>Subscribers: {{subscribers}}</p>
     <p>Views: {{views}}</p>
     <p>Likes: {{likes}}</p>
   </div>
 </div>
</template>
