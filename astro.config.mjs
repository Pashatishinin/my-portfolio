// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    sanity({
      projectId: "7caj8d3r",
      dataset: "production",
      apiVersion: "2023-01-01",
      token: process.env.SANITY_API_TOKEN,
      useCdn: false,
    }),
  ],
});