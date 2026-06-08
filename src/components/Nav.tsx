import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'

/**
 * Top bar — clean editorial style inspired by the client screenshots.
 * White background, minimal items, solid Marine "Demander un Devis" CTA.
 * The "switch axis" link sits subtly under the logo so visitors always
 * know they can pivot between Textile and EPI.
 */
export function Nav({ axis }: { axis: 'textile' | 'epi' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])

  const sectionLabel = axis === 'epi' ? 'Vêtements de Travail' : 'Apparel Personnalisé'
  const links = [
    { label: sectionLabel, href: '#collection' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'À Propos', href: '#about' },
  ]

  const otherAxis = axis === 'epi' ? '/textile' : '/epi'
  const otherLabel = axis === 'epi' ? 'Textile Personnalisé' : 'EPI Workwear'

  return (
    <>
      <header
        className={
          'fixed top-0 inset-x-0 z-40 transition-all duration-300 ' +
          (scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-marine-100 py-3'
            : 'bg-white/80 backdrop-blur-sm py-4')
        }
      >
        <div className="container-tight flex items-center justify-between gap-4">
          <Link to="/" className="text-marine-950 group">
            <Logo variant="horizontal" markClassName="w-9 h-9" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-marine-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-marine-950 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to={otherAxis}
              className="hidden md:inline-flex text-[11px] uppercase tracking-widest text-marine-500 hover:text-marine-950 transition-colors mr-3"
            >
              ↻ {otherLabel}
            </Link>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-marine-950 hover:bg-marine-800 text-cream text-sm font-semibold transition-colors rounded-md"
            >
              Demander un Devis
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-md bg-marine-950 text-cream flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-marine-950/50 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <aside
            onClick={(e) => e.stopPropagation()}
            className="ml-auto h-full w-80 max-w-[85%] bg-cream p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <Logo variant="horizontal" markClassName="w-8 h-8" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 rounded-md bg-marine-950 text-cream flex items-center justify-center"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg text-marine-950 border-b border-marine-100"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-6 px-5 py-3 bg-marine-950 text-cream text-center font-semibold rounded-md">
                Demander un Devis
              </a>
              <Link to={otherAxis} className="py-3 text-sm text-marine-500 mt-6 text-center border-t border-marine-100">
                ↻ Aller à : {otherLabel}
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
