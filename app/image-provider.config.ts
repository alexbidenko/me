import { defineProvider } from '@nuxt/image/runtime';
import ipxProvider from '@nuxt/image/runtime/providers/ipx';

export default defineProvider(() => {
  const ipx = ipxProvider();

  return {
    ...ipx,
    getImage: (src, ...args) => ipx.getImage(/^https?:\/\//.test(src) ? new URL(src).pathname : src, ...args),
  };
});
