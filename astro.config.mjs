import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://urban-x-plorer.example.com',
  integrations: [tailwind()],
  output: 'static'
});