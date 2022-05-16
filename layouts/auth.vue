<script setup lang="ts"></script>

<template>
  <div class="md:min-h-screen grid md:grid-cols-2">
    <div
      class="font-semibold bg-indigo-700 text-white grid content-center text-xl md:text-6xl grid place-content-center p-4"
    >
      <div class="flex items-center gap-4 justify-center md:justify-start">
        <img
          src="/supabase-logo.svg"
          alt="Supabase Logo"
          class="w-8 h-8 md:(w-20 h-20)"
        />
        +
        <img
          src="/nuxt3-logo.svg"
          alt="Nuxt 3 Logo"
          class="w-8 h-8 md:(w-20 h-20)"
        />
      </div>
      <h1 class="mx-auto">
        <span class="inline md:block">Supabase </span>
        <span class="inline md:block">Nuxt 3 Starter</span>
      </h1>
    </div>

    <main class="grid content-center py-4">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>
