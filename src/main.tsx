import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Splitter from './pages/Splitter'
import Textile from './pages/Textile'
import Epi from './pages/Epi'
import NotFound from './pages/NotFound'

// Vite injects the same `base` here (from vite.config.ts) so React Router
// stays in lock-step with the asset paths under proposal.mehdijabry.dev/...
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Splitter />} />
        <Route path="/textile" element={<Textile />} />
        <Route path="/epi" element={<Epi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
