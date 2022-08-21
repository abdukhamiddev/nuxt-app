import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    buildModules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/css/style.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: true,
        viewer: true,
    },
    colorMode: {
        classSuffix: ''
    },
    css: [
        '~/assets/css/fonts.scss',
        '~/assets/css/main.scss',
    ]
})
