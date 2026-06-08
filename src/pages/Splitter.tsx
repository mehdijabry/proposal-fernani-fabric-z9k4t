import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo, LogoMark } from '../components/Logo'

/**
 * Page d'entrée plein écran. Demande à l'utilisateur quel axe il veut
 * explorer : "Textile Personnalisé" ou "EPI". Aucun contenu produit ici —
 * c'est un splitter pur, à la manière de Patagonia / The North Face /
 * Carhartt qui séparent leurs lignes Worn Wear / Workwear / Sport.
 */

const PHOTOS = {
  textile: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=80',
  epi: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
}

export default function Splitter() {
  const [hovered, setHovered] = useState<'textile' | 'epi' | null>(null)
  const [intro, setIntro] = useState(true)

  // 1.6s intro animation : F logo + tagline → fades into the splitter.
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-svh bg-marine-950 text-cream overflow-hidden relative">
      {/* Intro splash */}
      <AnimatePresence>
        {intro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-marine-950 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-cream"
            >
              <LogoMark className="w-20 h-20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-center"
            >
              <div className="font-sans font-bold text-2xl tracking-widest">FERNANI</div>
              <div className="font-sans tracking-brand text-xs mt-2 text-cream/80">FABRIC</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6">
        <Logo variant="horizontal" markClassName="w-8 h-8" textClassName="text-cream" />
        <div className="hidden sm:flex items-center gap-6 text-xs tracking-widest uppercase text-cream/70">
          <a href="mailto:fabric.fernani@gmail.com" className="hover:text-cream transition-colors">
            contact
          </a>
          <a href="tel:+212655883621" className="hover:text-cream transition-colors">
            +212 6 55 88 36 21
          </a>
        </div>
      </header>

      {/* Splitter: 2 halves, hover-expands */}
      <main className="relative grid grid-cols-1 md:grid-cols-2 min-h-[calc(100svh-180px)]">
        <Half
          to="/textile"
          eyebrow="AXE 01"
          title="Textile Personnalisé"
          line="Apparel corporate, événementiel et lifestyle — brodé, sérigraphié, DTF."
          photo={PHOTOS.textile}
          accent="sand"
          isHovered={hovered === 'textile'}
          dim={hovered === 'epi'}
          onEnter={() => setHovered('textile')}
          onLeave={() => setHovered(null)}
        />
        <Half
          to="/epi"
          eyebrow="AXE 02"
          title="EPI Workwear"
          line="Équipement de protection individuelle et vêtement de travail haute sécurité."
          photo={PHOTOS.epi}
          accent="hivis"
          isHovered={hovered === 'epi'}
          dim={hovered === 'textile'}
          onEnter={() => setHovered('epi')}
          onLeave={() => setHovered(null)}
        />

        {/* Center divider with the F mark */}
        <div className="hidden md:flex pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center z-20">
          <div className="w-px h-3/4 bg-cream/20" />
          <div className="absolute w-14 h-14 rounded-full bg-marine-950 ring-1 ring-cream/30 flex items-center justify-center">
            <LogoMark className="w-7 h-7 text-cream" />
          </div>
        </div>
      </main>

      {/* Tagline footer */}
      <footer className="relative z-10 py-8 px-6 text-center">
        <p className="font-display italic text-xl sm:text-2xl text-cream">
          Built for Work. <span className="not-italic font-normal">·</span>{' '}
          <span className="text-sand-400">Made for Comfort.</span>
        </p>
        <p className="mt-3 text-[11px] tracking-brand text-cream/40 uppercase">
          The Builders of Morocco
        </p>
      </footer>
    </div>
  )
}

function Half({
  to, eyebrow, title, line, photo, accent, isHovered, dim, onEnter, onLeave,
}: {
  to: string
  eyebrow: string
  title: string
  line: string
  photo: string
  accent: 'sand' | 'hivis'
  isHovered: boolean
  dim: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <Link
      to={to}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={
        'relative overflow-hidden group block transition-all duration-700 ease-out ' +
        (isHovered ? 'md:flex-[1.15]' : dim ? 'md:opacity-70' : '')
      }
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[1200ms] ease-out"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="absolute inset-0 bg-marine-950/70 group-hover:bg-marine-950/55 transition-colors duration-500" />

      {/* Content */}
      <div className="relative h-full min-h-[60svh] md:min-h-full flex flex-col justify-end p-10 md:p-16">
        <div className="text-[11px] tracking-brand uppercase text-cream/60 font-mono">
          {eyebrow}
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-cream/80 max-w-md text-base sm:text-lg leading-relaxed">
          {line}
        </p>
        <div className="mt-8 inline-flex items-center gap-3 text-sm tracking-widest uppercase text-cream group-hover:gap-5 transition-all">
          <span className={accent === 'hivis' ? 'text-hivis' : 'text-sand-400'}>
            Explorer
          </span>
          <ArrowRight />
        </div>
      </div>
    </Link>
  )
}

function ArrowRight() {
  return (
    <svg width="36" height="10" viewBox="0 0 36 10" fill="none">
      <path d="M0 5h34M30 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
