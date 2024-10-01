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
					content: 'Makoto - Web developer. Experienced web developer offers modern, responsive designs, SEO optimization and technical support. Specializing in JavaScript, VueJS, React and more. Create exceptional websites with us!'
				},
				{
					name: 'keywords',
					content: 'programista stron internetowych, tworzenie stron www, nowoczesne technologie webowe, Nuxt.js, Vue.js, React, optymalizacja SEO, responsywne strony, projektowanie stron internetowych, wsparcie techniczne, HTML5, CSS3, JavaScript, Node.js, WordPress, portfolio web development, usługi webowe, aktualizacja stron, utrzymanie stron internetowych, rozwój aplikacji webowych, Makoto, MakotoPD, web developer, website development, modern web technologies, Nuxt.js, Vue.js, React, SEO optimization, responsive websites, web design, technical support, HTML5, CSS3, JavaScript, Node.js, WordPress, web development portfolio, web services, website updates, website maintenance, web application development'
				},
				{
					name: 'og:image',
					content: '/og.png'
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