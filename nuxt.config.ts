// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },


  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    'nuxt-aos',
  ],

  tailwindcss: {
    configPath: 'tailwind.config',
  },

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      Poppins: true,
      "Space Grotesk": true
    }
  },

  css: [
    '@/assets/css/global.css',
  ],


})