import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/supabase'],
})
