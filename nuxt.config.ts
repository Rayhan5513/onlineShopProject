// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/css/tailwind.css', // Include the Tailwind CSS file
  ],
  postcss: {
    plugins: {
      tailwindcss: {}, // Add Tailwind CSS as a PostCSS plugin
      autoprefixer: {}, // Add Autoprefixer as a PostCSS plugin
    },
  },
})
