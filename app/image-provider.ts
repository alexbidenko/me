import { defineProvider } from '@nuxt/image/runtime';
import ipxProvider from '@nuxt/image/runtime/providers/ipx';

export default defineProvider(() => {
  const ipx = ipxProvider();

  return {
    ...ipx,
    getImage: (src, ...args) => {
      if (/^https?:\/\//.test(src)) src = new URL(src).pathname;

      return ipx.getImage(src, ...args);
    },
  };
});
