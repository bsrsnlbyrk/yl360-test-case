// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'
import path from 'path'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  build: {
    transpile: ['vue-tsc'],
  },
  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [
      svgLoader({
       // Your settings.
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, './')
  },
})
