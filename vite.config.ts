import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploy lives under https://proposal.mehdijabry.dev/Fernani-Fabric-z9k4t/
// so all asset URLs and the React Router base must use this prefix.
// Set BASE_PATH env in Render to override at build time.
const basePath = process.env.BASE_PATH ?? '/Fernani-Fabric-z9k4t/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
})
