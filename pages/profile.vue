<script setup lang="ts">
const router = useRouter()
const client = useSupabaseClient()
const user = useSupabaseUser()
const email = computed(() => user.value?.email)

const handleSignOut = async () => {
  let { error } = await client.auth.signOut()

  if (error) {
    console.error(error)

    return alert('Something went wrong!')
  }

  router.push('/login')
}
</script>
<template>
  <div class="prose mx-auto bg-white p-4 rounded-xl shadow">
    <h1>Profile</h1>
    <p>{{ email }}</p>

    <UpdatePasswordForm />

    <details>
      <summary>user data</summary>
      <pre>{{ user }}</pre>
    </details>

    <button title="Sign Out" class="btn-gray" @click="handleSignOut()">
      Log Out <i class="i-iconoir-log-out"></i>
    </button>
  </div>
</template>
