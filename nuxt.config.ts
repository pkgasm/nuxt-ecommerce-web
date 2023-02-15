// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            htmlAttrs: { lang: 'es' }
        },
    },
    modules: [
        '@nuxtjs/device',
        '@pinia/nuxt',
    ],
    css: [],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL
        }
    },
    device: {
        refreshOnResize: true
    }
})
