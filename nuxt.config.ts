import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // meta
    meta: {
        title: "Sikwin",
        meta: [
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      }
})
