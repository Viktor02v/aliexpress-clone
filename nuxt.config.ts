// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2024-11-01',
devtools: { enabled: true },
pages:true,
modules: [
	'nuxt-icon',
	'nuxt-lodash',
	'@pinia/nuxt',
	'@pinia-plugin-persistedstate/nuxt',
	'@nuxtjs/tailwindcss',
	'@nuxtjs/supabase',
],
runtimeConfig:{
	public:{
		stripePk: process.env.STRIPE_PK_KEY,
		supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
	}
},
app:{
	head:{
		script:[
			{src: 'https://js.stripe.com/v3/', defer:true}
		]
	}
}
})
