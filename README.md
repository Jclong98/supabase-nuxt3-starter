# Nuxt 3 + Supabase

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
pnpm install --shamefully-hoist
```

Create a `.env` file and place your supabase url and key into it:

```js
SUPABASE_URL = 'https://example.supabase.com'
SUPABASE_KEY = '<your_key>'
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
