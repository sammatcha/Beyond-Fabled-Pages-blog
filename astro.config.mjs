import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import { loadEnv } from 'vite';


// https://astro.build/config

export default defineConfig({
  integrations: [
    tailwind(), react(), sitemap(),
    sanity({
      projectId: 'cw1h8gpf',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio'
    }),
  ],
  outDir: './dist',
  devToolbar: {
    enabled:false
  },
  output: "server",
  adapter: vercel()
});