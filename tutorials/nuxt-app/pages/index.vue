<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const client = useSupabaseClient()
const user = useSupabaseUser()
const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  console.log('user', user)
  console.log('error', error)
}

const login = async () => {
  const { user, error } = await client.auth.signIn({
    email: email.value,
    password: password.value,
  })
  console.log('user', user)
  console.log('error', error)
}

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/notes')
    }
  })
})
</script>
<template>
  <div>
    <form
      @submit.prevent="() => (isSignUp ? signUp() : login())"
      class="flex flex-col gap-2"
    >
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        class="p-2 bg-gray-600 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        class="p-2 bg-gray-600 rounded"
      />
      <button type="submit" class="p-2 text-white bg-green-500 rounded">
        <span v-if="isSignUp"> Sign up </span>
        <span v-else> Log in </span>
      </button>
    </form>
    <button
      @click="isSignUp = !isSignUp"
      class="w-full mt-8 text-sm text-center underline text-slate-300"
    >
      <span v-if="isSignUp"> Have an account? Log in instead </span>
      <span v-else> Create a new account </span>
    </button>
  </div>
</template>
