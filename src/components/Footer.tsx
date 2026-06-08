import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer({ axis }: { axis: 'textile' | 'epi' }) {
  return (
    <footer className="bg-marine-950 text-cream pt-20 pb-10 relative overflow-hidden">
      {/* Subtle zellige in corner */}
      <div className="absolute inset-0 bg-zellige opacity-50 pointer-events-none" />

      <div className="container-tight relative">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="text-cream">
              <Logo variant="stacked" markClassName="w-12 h-12" />
            </div>
            <p className="font-display italic text-xl mt-6 text-cream/90">
              Built for Work. <span className="text-sand-400">Made for Comfort.</span>
            </p>
            <p className="mt-4 text-sm text-cream/60 max-w-sm leading-relaxed">
              Marque marocaine de workwear premium qui équipe les bâtisseurs du Maroc avec des
              vêtements durables, confortables et élégants.
            </p>
          </div>

          {/* Plateforme */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-brand text-sand-400 mb-5">
              Plateformes
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/textile"
                  className={'hover:text-sand-400 transition-colors ' + (axis === 'textile' ? 'text-sand-400' : 'text-cream/80')}
                >
                  Textile Personnalisé
                </Link>
              </li>
              <li>
                <Link
                  to="/epi"
                  className={'hover:text-sand-400 transition-colors ' + (axis === 'epi' ? 'text-sand-400' : 'text-cream/80')}
                >
                  EPI Workwear
                </Link>
              </li>
              <li>
                <Link to="/" className="text-cream/80 hover:text-sand-400 transition-colors">
                  Changer de plateforme
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-brand text-sand-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a href="mailto:fabric.fernani@gmail.com" className="hover:text-sand-400 transition-colors">
                  fabric.fernani@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+212655883621" className="hover:text-sand-400 transition-colors">
                  +212 6 55 88 36 21
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212655883621"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sand-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-cream/50">
                Casablanca, Maroc 🇲🇦
              </li>
            </ul>
          </div>
        </div>

        {/* The Builders */}
        <div className="mt-20 pt-10 border-t border-cream/10 text-center">
          <div className="text-[11px] uppercase tracking-brand text-sand-400 mb-3">
            The Movement
          </div>
          <p className="font-display italic text-xl sm:text-2xl">
            #TheBuildersOfMorocco
          </p>
          <p className="text-cream/50 text-sm mt-3 max-w-2xl mx-auto">
            Entrepreneurs, ingénieurs, architectes, techniciens, ouvriers, industriels, créateurs —
            tous ceux qui bâtissent le Maroc.
          </p>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-cream/40">
          <p>© {new Date().getFullYear()} Fernani Fabric — Tous droits réservés.</p>
          <p>Built in Casablanca · Made for Morocco</p>
        </div>
      </div>
    </footer>
  )
}
