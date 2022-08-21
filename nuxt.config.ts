import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {
            content: ["./components/**/*.{js,vue,ts}",
                "./layouts/**/*.vue",
                "./pages/**/*.vue",
                "./plugins/**/*.{js,ts}",
                "./nuxt.config.{js,ts}",],
        },
        injectPosition: 0,
        viewer: true,
    },
    colorMode: {
        classSuffix: ''
    },
    css: [
        '~/assets/css/main.scss'
    ]


})
