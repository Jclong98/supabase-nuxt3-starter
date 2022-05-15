<script setup lang="ts">
const cards = [
  {
    title: 'Supabase',
    description:
      'A powerful, open-source, cloud-native database platform for modern web applications.',
    image: '/supabase-logo.svg',
    imageAlt: 'Supabase logo',
    links: [
      {
        text: 'Documentation',
        url: 'https://docs.supabase.com/',
      },
      {
        text: 'Github',
        url: 'https://github.com/supabase/supabase',
      },
    ],
  },
  {
    title: 'Nuxt',
    description: 'A Vue.js framework for building single-page applications.',
    image: '/nuxt3-logo.svg',
    imageAlt: 'Nuxt logo',
    links: [
      {
        text: 'Documentation',
        url: 'https://v3.nuxtjs.org/',
      },
      {
        text: 'Github',
        url: 'https://github.com/nuxt/framework',
      },
      {
        text: 'Supabase Nuxt Module',
        url: 'https://supabase.nuxtjs.org/',
      },
    ],
  },
  {
    title: 'UnoCSS',
    description: 'The instant on-demand Atomic CSS engine.',
    image: '/unocss-logo.svg',
    imageAlt: 'UnoCSS logo',
    links: [
      {
        text: 'Documentation (beta)',
        url: 'https://uno.antfu.me/',
      },
      {
        text: 'Github',
        url: 'https://github.com/unocss/unocss',
      },
    ],
  },
]
</script>

<template>
  <div class="mx-auto prose">
    <h1>Welcome! 😁</h1>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="card in cards"
        :key="card.title"
        class="bg-white shadow rounded-xl p-4"
      >
        <header class="grid justify-center">
          <img
            :src="card.image"
            :alt="card.imageAlt"
            class="w-8 h-8 md:(w-20 h-20) mx-auto"
          />
          <h2 class="text-3xl font-semibold not-prose">{{ card.title }}</h2>
        </header>
        <ul>
          <li v-for="link in card.links" :key="link.text">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
