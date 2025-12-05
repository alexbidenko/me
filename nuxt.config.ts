import { imagetools } from 'vite-imagetools';
import tailwindcss from '@tailwindcss/vite';

const DEFAULT_PORT = 3000;
const MAX_AGE_YEAR = 31_536_000;
const DEV_ORIGIN = `http://localhost:${import.meta.env.PORT || DEFAULT_PORT}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-security', '@nuxt/image', '@nuxt/ui', '@nuxtjs/seo', '@nuxt/hints'],
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
  hooks: {
    'build:manifest': (manifest) => {
      for (const meta of Object.values(manifest)) {
        if (!/(.+).(webp|png|jpe?g)$/.test(meta.file)) {
          meta.prefetch = false;
        }
      }
    },
  },
  security: {
    strict: true,
    ssg: {
      meta: false,
      hashStyles: false,
    },
    headers: {
      contentSecurityPolicy: {
        'style-src': [`'self'`, `'unsafe-inline'`],
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
        provider: '~/image-provider.config.ts',
      },
    },
  },
  devtools: { enabled: true },
  experimental: { inlineRouteRules: true },
  compatibilityDate: '2025-11-01',

  $production: {
    image: {
      ipx: { maxAge: MAX_AGE_YEAR },
    },
  },

  $development: {
    security: {
      headers: {
        contentSecurityPolicy: {
          'worker-src': [`'self'`, 'blob:'],
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
