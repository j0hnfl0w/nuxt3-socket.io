// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  serverHandlers: [
    {
      route: '/ws',
      handler: '~/server/middleware/sockets',
    },
  ],
});
