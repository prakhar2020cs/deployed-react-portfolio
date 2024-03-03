import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
   modules:{
    localsConvention:"camelCase",  //lets us use camelcase in all our modules styles
   }, 
  },
})
 