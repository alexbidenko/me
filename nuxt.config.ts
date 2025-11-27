import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';

const origin = `http://localhost:${process.env.PORT || 3000}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-security', '@nuxt/image', '@nuxt/ui', '@nuxtjs/seo'],
  vite: {
    plugins: [tailwindcss(), imagetools()],
  },
  css: ['~/assets/styles/main.css'],
  alias: {
    '#types': '../shared/utils/types',
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
    },
  },
  routeRules: {
    '/**': { prerender: true },
    '/_ipx/**': { prerender: false },
  },
  security: {
    strict: true,
    headers: {
      contentSecurityPolicy: {
        'style-src': [`'self'`, `'unsafe-inline'`],
        'img-src': [`'self'`, 'data:'],
      },
    },
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
  experimental: { inlineRouteRules: true },
  compatibilityDate: '2025-11-01',

  $production: {
    image: {
      ipx: { maxAge: 31536000 },
    },
  },

  $development: {
    image: {
      domains: [origin],
      alias: {
        _nuxt: `${origin}/_nuxt`,
      },
    },
  },
});
