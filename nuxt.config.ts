import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';

const origin = `http://localhost:${process.env.PORT || 3000}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-security', '@nuxt/image', '@nuxt/ui'],
  vite: {
    plugins: [tailwindcss(), imagetools()],
  },
  css: ['~/assets/styles/main.css'],
  alias: {
    '#types': '../shared/utils/types',
  },
  security: {
    strict: true,
  },
  image: {
    providers: {
      ipx: {
        name: 'ipx',
        provider: '~/image-provider.ts',
      },
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',

  $production: {
    image: {
      ipx: { maxAge: 31536000 },
    },
  },

  $development: {
    security: {
      headers: {
        contentSecurityPolicy: {
          'style-src': [`'self'`, `'unsafe-inline'`],
          'img-src': [`'self'`, 'data:'],
        }
      }
    },
    image: {
      domains: [origin],
      alias: {
        _nuxt: `${origin}/_nuxt`,
      },
    },
  },
});
