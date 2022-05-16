<script setup lang="ts">
const router = useRouter()
const user = useSupabaseUser()
const client = useSupabaseClient()

const handleSignOut = async () => {
  let { error } = await client.auth.signOut()

  if (error) {
    console.error(error)

    return alert('Something went wrong!')
  }

  router.push('/signin')
}
</script>
<template>
  <div class="prose mx-auto bg-white p-4 rounded-xl shadow">
    <div class="flex justify-between items-center" v-if="user">
      <h1>
        {{ user.email }}
      </h1>
      <button
        title="Sign Out"
        class="btn-gray p-5 w-8 h-8 grid place-content-center text-white"
        @click="handleSignOut()"
      >
        <i class="i-iconoir-log-out"></i>
      </button>
    </div>
    <pre>{{ user }}</pre>
  </div>
</template>
