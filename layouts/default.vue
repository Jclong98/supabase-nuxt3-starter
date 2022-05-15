<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Head>
      <Title>Supabase + Nuxt 3 Starter</Title>
      <Link rel="icon" type="image/svg+xml" href="/supabase-logo.svg" />
    </Head>
    <nav class="font-semibold bg-indigo-700 text-white">
      <div class="flex justify-between p-4">
        <NuxtLink to="/" title="Home" class="font-bold">
          Supabase + Nuxt 3 Starter</NuxtLink
        >

        <ul class="flex gap-4">
          <li v-if="user">
            <NuxtLink to="/profile" title="profile">{{ user.email }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

    <main class="p-4">
      <slot></slot>
    </main>
  </div>
</template>
