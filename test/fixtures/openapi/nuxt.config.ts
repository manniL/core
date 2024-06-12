import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '../../../src/module'
  ],
  nitro: {
    experimental: {
      openAPI: true
    }
  }
})
