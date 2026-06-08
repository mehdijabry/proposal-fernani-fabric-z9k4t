import { motion } from 'framer-motion'

/**
 * Full-bleed hero, split 5/7 on desktop. Left column = title (serif) +
 * description + 1 CTA + supporting bullet phrase. Right column = wide
 * worker portrait that extends to the viewport edge.
 * The eyebrow strip carries the axis label so visitors instantly know
 * which platform they're on.
 */

export function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  bulletWords,
  ctaLabel = 'Découvrir Nos Produits',
  ctaHref = '#collection',
  photo,
  accent = 'sand',
}: {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  bulletWords?: string[]
  ctaLabel?: string
  ctaHref?: string
  photo: string
  accent?: 'sand' | 'hivis'
}) {
  return (
    <section className="relative bg-cream pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-zellige opacity-40 pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 items-center min-h-[calc(100svh-7rem)]">
        {/* Left — copy */}
        <div className="lg:col-span-5 px-6 sm:px-10 lg:pl-16 lg:pr-8 py-14 lg:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className={'h-px w-8 ' + (accent === 'hivis' ? 'bg-hivis' : 'bg-sand-500')} />
              <span className="text-[11px] uppercase tracking-brand text-marine-700 font-medium">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-marine-950 leading-[1.05]">
              {title}
              {highlight && (
                <>
                  <br />
                  <em className={'not-italic ' + (accent === 'hivis' ? 'text-hivis' : 'text-marine-950')}>
                    {highlight}
                  </em>
                </>
              )}
            </h1>

            <p className="mt-7 text-marine-700 text-base sm:text-lg leading-relaxed">
              {description}
            </p>

            {bulletWords && (
              <p className="mt-3 text-marine-700 text-base sm:text-lg leading-relaxed">
                {bulletWords.map((w, i) => (
                  <span key={i}>
                    {i > 0 && <span className="text-marine-300 mx-2">,</span>}
                    <strong className="font-semibold text-marine-950">{w}</strong>
                  </span>
                ))}
                <span className="text-marine-700"> durables et confortables.</span>
              </p>
            )}

            <a
              href={ctaHref}
              className="mt-9 inline-flex items-center gap-3 px-6 py-3.5 bg-marine-950 hover:bg-marine-800 text-cream font-semibold rounded-md transition-all group"
            >
              <span>{ctaLabel}</span>
              <svg width="20" height="12" viewBox="0 0 36 12" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M0 6h34M30 1l4 5-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-7 relative h-[60svh] lg:h-[calc(100svh-7rem)]"
        >
          <img
            src={photo}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Subtle gradient overlay for legibility on mobile (where text overlaps) */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-cream via-cream/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
