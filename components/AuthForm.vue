<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const props = defineProps({
  title: {
    type: String,
    default: 'Sign In',
  },
})

const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

// Login method using providers
const handleSubmit = async () => {
  const method = props.title === 'Sign In' ? 'signIn' : 'signUp'

  // login or signup with the provided email and password
  const { error } = await client.auth[method]({
    email: email.value,
    password: password.value,
  })

  if (error) {
    alert(error.message)
  }
}

watch(user, () => {
  if (user.value) {
    router.push('/')
  }
})
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white mx-auto grid gap-4 w-90% md:w-75% max-w-prose"
  >
    <h1 class="text-4xl font-semibold">{{ title }}</h1>

    <label>
      <span class="mb-2 inline-block">Email</span>
      <input
        type="email"
        v-model="email"
        class="bg-gray-100 border border-gray-400 w-full rounded-lg p-2"
      />
    </label>

    <label>
      <span class="mb-2 inline-block">Password</span>
      <input
        type="password"
        v-model="password"
        class="bg-gray-100 border border-gray-400 w-full rounded-lg p-2"
      />
    </label>

    <button type="submit" class="btn" :disabled="!email || !password">
      {{ title }}
    </button>

    <p v-if="title == 'Sign In'">
      Need an account?
      <NuxtLink to="/signup" class="text-blue-500 underline">Sign up</NuxtLink>
    </p>
    <p v-else>
      Already have an account?
      <NuxtLink to="/signin" class="text-blue-500 underline">Sign in</NuxtLink>
    </p>
  </form>
</template>
