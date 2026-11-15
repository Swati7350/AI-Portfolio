import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable static output (no server-side rendering needed)
  output: 'static',

  // Site URL for sitemap and canonical URLs
  site: 'https://parasaiinnovations.com',

  // Compress HTML in production
  compressHTML: true,

  // Image optimization settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },

  // Vite configuration
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },

  // Integrations will be added as needed
  integrations: [],
});
