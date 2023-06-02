import {defineConfig} from 'astro/config';

import mdx from "@astrojs/mdx";
import {remarkReadingTime} from "./remark/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/**']
      }
    },
    optimizeDeps: {
      exclude: ['.idea/']
    }
  },
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  }
});