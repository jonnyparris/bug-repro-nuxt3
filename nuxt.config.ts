import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  build: {
    transpile: ['websocket'],
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/supabase'],
  supabase: {
    client: {
      autoRefreshToken: true,
      persistSession: true,
    },
  },
})
