<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Log In',
  },
})

const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')

// Login method using providers
const handleSubmit = async () => {
  const method = props.title === 'Log In' ? 'signIn' : 'signUp'

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

    <button type="submit" class="btn-emerald" :disabled="!email || !password">
      {{ title }}
    </button>

    <p v-if="title == 'Log In'">
      <p>
        Need an account?
        <NuxtLink to="/signup" class="text-blue-500 underline">
          Sign up
        </NuxtLink>
      </p>
      
      <p>
        <NuxtLink to="/account-recovery" class="text-blue-500 underline">
          Forgot Your Password?
        </NuxtLink>
      </p>
    </p>
    <p v-else>
      Already have an account?
      <NuxtLink to="/login" class="text-blue-500 underline">Log in</NuxtLink>
    </p>
  </form>
</template>
