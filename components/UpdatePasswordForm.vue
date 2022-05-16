<script setup lang="ts">
const client = useSupabaseClient()

const password1 = ref('')
const password2 = ref('')

// Login method using providers
const handleSubmit = async () => {
  if (password1.value !== password2.value) {
    return alert('Passwords do not match')
  }

  const { error } = await client.auth.update({
    password: password1.value,
  })

  if (error) {
    alert(error.message)
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white mx-auto grid gap-4">
    <h2 class="text-4xl font-semibold">Update Password</h2>

    <label>
      <span class="mb-2 inline-block">New Password</span>
      <input
        type="password"
        v-model="password1"
        class="bg-gray-100 border border-gray-400 w-full rounded-lg p-2"
      />
    </label>

    <label>
      <span class="mb-2 inline-block">New Password (again)</span>
      <input
        type="password"
        v-model="password2"
        class="bg-gray-100 border border-gray-400 w-full rounded-lg p-2"
      />
    </label>

    <button
      type="submit"
      class="btn-emerald"
      :disabled="!password1 || !password2"
    >
      Update Password
    </button>
  </form>
</template>
