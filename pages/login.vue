<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

// Login method using providers
const login = async (
  provider: 'github' | 'google' | 'gitlab' | 'bitbucket'
) => {
  const { error } = await client.auth.signIn({ provider })

  if (error) {
    console.log(error)

    return alert('Something went wrong !')
  }

  router.push('/')
}
</script>

<template>
  <button
    class="px-4 py-2 bg-gray-800 rounded-lg text-emerald-50"
    @click="login('github')"
  >
    Login with GitHub
  </button>
</template>
