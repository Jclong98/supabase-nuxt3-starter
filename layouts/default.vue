<script setup lang="ts"></script>

<template>
  <div class="bg-emerald-100 min-h-screen">
    <nav class="font-semibold bg-emerald-500 text-emerald-50">
      <div class="flex justify-between p-4 mx-auto max-w-prose">
        <NuxtLink to="/">Home</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <main class="p-4 mx-auto max-w-prose">
      <slot></slot>
    </main>
  </div>
</template>
