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
    // The build is published at `proposal.mehdijabry.dev/<basePath>/` so file
    // paths on disk must mirror the URL — otherwise the rewrite rule swallows
    // every asset request and returns index.html as the JS body. Nest the
    // output under the base path so dist/public/Fernani-Fabric-z9k4t/index.html
    // resolves cleanly when Render serves dist/public as the site root.
    outDir: `dist/public${basePath.replace(/\/$/, '')}`,
    emptyOutDir: true,
  },
})
