// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
		head: {
			title: 'SamVolvo',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'format-detection',
					content: 'telephone=no'
				},
				{
					name: 'description',
					content: 'Welcome to the site of a young Minecraft plugin developer! I offer unique solutions in Java that will enhance your gaming experience. From simple modifications to advanced plugins, each project is crafted with passion and attention to detail.'
				},
				{
					name: 'keywords',
					content: 'Minecraft plugins, Java developer, plugin creation, Minecraft modifications, Minecraft server development, Java tutorials, young programmer, Minecraft projects'
				},
				{
					property: 'og:image',
					content: '/og.webp'
				},
				{
					property: 'og:url',
					content: 'https://samvolvo.com'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:title',
					content: 'SamVolvo'
				},
				{
					property: 'og:description',
					content: 'Welcome to the site of a young Minecraft plugin developer! I offer unique solutions in Java that will enhance your gaming experience. From simple modifications to advanced plugins, each project is crafted with passion and attention to detail.'
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					property: 'twitter:domain',
					content: 'samvolvo.com'
				},
				{
					property: 'twitter:url',
					content: 'https://samvolvo.com'
				},
				{
					name: 'twitter:name',
					content: 'SamVolvo'
				},
				{
					name: 'twitter:description',
					content: 'Welcome to the site of a young Minecraft plugin developer! I offer unique solutions in Java that will enhance your gaming experience. From simple modifications to advanced plugins, each project is crafted with passion and attention to detail.'
				},
				{
					name: 'twitter:image',
					content: '/og.webp'
				}
			],
			link: [{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon.png'
				},
			],
			script: [

			],
		},

	},

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
    display: 'auto',
    families: {
      Poppins: [ 200, 300, 400, 500, 600, 700, 800],
      "Space Grotesk": [ 200, 300, 400, 500, 600, 700, 800],
    }
  },


  css: [
    '@/assets/css/global.css',
  ],


})