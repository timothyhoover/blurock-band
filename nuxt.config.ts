// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content'
  ],
  formkit: {
    defaultConfig: false
  }
})
