import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"/",
  css: { preprocessorOptions: {
    scss: {
      additionalData: `@import "./src/scss/_index.scss";`, 
     }, 
   }, 
 },
})
