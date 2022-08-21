<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>

<template>
  <header class="flex justify-between w-full py-8">
    <NuxtLink :to="user ? 'feed' : '/'">Nuxt 3 + Supabase Auth</NuxtLink>
    <button v-if="user" @click="client.auth.signOut()">Log out</button>
  </header>
</template>
