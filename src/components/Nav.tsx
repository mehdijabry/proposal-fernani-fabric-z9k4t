import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'

/**
 * Shared top bar for both axis pages (Textile + EPI).
 * - White when scrolled, transparent at top
 * - Section anchor links + axis switch + CTA
 */
export function Nav({ axis }: { axis: 'textile' | 'epi' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])

  const links = axis === 'epi'
    ? [
        { label: 'Workwear', href: '#workwear' },
        { label: 'Secteurs', href: '#sectors' },
        { label: 'Normes', href: '#norms' },
        { label: 'À propos', href: '#about' },
      ]
    : [
        { label: 'Catégories', href: '#categories' },
        { label: 'Techniques', href: '#techniques' },
        { label: 'Processus', href: '#process' },
        { label: 'À propos', href: '#about' },
      ]

  const otherAxis = axis === 'epi' ? '/textile' : '/epi'
  const otherLabel = axis === 'epi' ? 'Textile Personnalisé' : 'EPI Workwear'

  return (
    <>
      <header
        className={
          'fixed top-0 inset-x-0 z-40 transition-all duration-300 ' +
          (scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-marine-100 py-3'
            : 'py-5')
        }
      >
        <div className="container-tight flex items-center justify-between gap-4">
          <Link to="/" className="text-marine-950 hover:text-marine-700 transition-colors">
            <Logo variant="horizontal" markClassName="w-8 h-8" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-marine-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-marine-950 transition-colors">
                {l.label}
              </a>
            ))}
            <Link
              to={otherAxis}
              className="text-marine-500 hover:text-marine-950 text-[11px] uppercase tracking-widest border-l border-marine-200 pl-5 ml-2"
            >
              ↘ {otherLabel}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex btn-primary text-xs px-4 py-2">
              Devis
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-full bg-marine-950 text-cream flex items-center justify-center"
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
        <div className="lg:hidden fixed inset-0 z-50 bg-marine-950/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
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
                className="w-9 h-9 rounded-full bg-marine-950 text-cream flex items-center justify-center"
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
              <Link to={otherAxis} className="py-3 text-lg text-marine-500 mt-2">
                ↘ {otherLabel}
              </Link>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
                Demander un devis
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
