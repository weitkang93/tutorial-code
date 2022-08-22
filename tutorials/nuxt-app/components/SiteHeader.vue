<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>

<template>
  <header class="flex items-center justify-between w-full py-8">
    <NuxtLink :to="user ? '/notes' : '/'">Nuxt 3 + Supabase Auth</NuxtLink>
    <button
      v-if="user"
      @click="client.auth.signOut()"
      class="px-4 py-2 rounded hover:bg-gray-800"
    >
      Log out
    </button>
  </header>
</template>
