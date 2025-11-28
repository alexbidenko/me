import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';

const DEV_ORIGIN = `http://localhost:${process.env.PORT || 3000}`;

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
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/**': { prerender: true },
    '/_ipx/**': { prerender: false },
  },
  security: {
    strict: true,
    headers: {
      contentSecurityPolicy: {
        'img-src': [`'self'`, 'data:'],
      },
    },
  },
  site: {
    url: 'https://me.asmy.pro',
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
    security: {
      headers: {
        contentSecurityPolicy: {
          'style-src': [`'self'`, `'unsafe-inline'`, `'unsafe-hashes'`],
        },
      },
    },
    image: {
      ipx: { maxAge: 31536000 },
    },
  },

  $development: {
    security: {
      headers: {
        contentSecurityPolicy: {
          'style-src': [`'self'`, `'unsafe-inline'`],
        },
      },
    },
    image: {
      domains: [DEV_ORIGIN],
      alias: {
        _nuxt: `${DEV_ORIGIN}/_nuxt`,
      },
    },
  },
});
