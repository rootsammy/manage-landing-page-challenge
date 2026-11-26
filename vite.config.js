import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/manage-landing-page-master/',
  plugins: [
    tailwindcss(),
  ],
})