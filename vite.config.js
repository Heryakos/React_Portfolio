import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.PNG", "**/*.png"],
  // esbuild: {
  //   target: 'esnext',
  // },
  plugins: [react()],
})
