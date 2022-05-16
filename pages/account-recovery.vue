<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

const client = useSupabaseClient()

const email = ref('')

const handleSubmit = async () => {
  if (!email.value) {
    return alert('Please enter an email address')
  }

  let { data, error } = await client.auth.api.resetPasswordForEmail(email.value)

  if (error) {
    alert(error.message)
  } else {
    console.log(data)
    alert('Recovery email sent')
  }
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white mx-auto grid gap-4 w-90% md:w-75% max-w-prose"
  >
    <h1 class="text-4xl font-semibold">Recover Account</h1>

    <label>
      <span class="mb-2 inline-block">Email</span>
      <input
        type="email"
        v-model="email"
        class="bg-gray-100 border border-gray-400 w-full rounded-lg p-2"
      />
    </label>

    <button type="submit" class="btn-emerald" :disabled="!email">
      Send Recovery Email
    </button>
  </form>
</template>
