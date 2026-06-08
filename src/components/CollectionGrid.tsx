import { motion } from 'framer-motion'

/**
 * "Notre Collection · Workwear & Apparel" section — mirrors the client
 * mockups : centered eyebrow with two short rules, big serif title,
 * comma-separated value props line, then 3 product cards with a model
 * portrait + label/subtitle/arrow on bottom.
 */

export type CollectionCard = {
  title: string
  subtitle: string
  href?: string
  img: string
}

export function CollectionGrid({
  eyebrow = 'Notre Collection',
  title,
  values,
  cards,
  accent = 'sand',
}: {
  eyebrow?: string
  title: string
  values: string[]
  cards: [CollectionCard, CollectionCard, CollectionCard]
  accent?: 'sand' | 'hivis'
}) {
  return (
    <section id="collection" className="section bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-zellige opacity-50 pointer-events-none" />

      <div className="container-tight relative">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <span className={'h-px w-8 ' + (accent === 'hivis' ? 'bg-hivis' : 'bg-sand-500')} />
            <span className="text-xs uppercase tracking-brand text-marine-700 font-medium">
              {eyebrow}
            </span>
            <span className={'h-px w-8 ' + (accent === 'hivis' ? 'bg-hivis' : 'bg-sand-500')} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-marine-950 leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-marine-700 text-base sm:text-lg">
            {values.map((v, i) => (
              <span key={v}>
                {i > 0 && <span className={'mx-3 ' + (accent === 'hivis' ? 'text-hivis' : 'text-sand-500')}>•</span>}
                {v}
              </span>
            ))}
          </p>
        </motion.div>

        {/* 3 product cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href ?? '#contact'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group block bg-white rounded-2xl shadow-[0_4px_20px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_28px_-12px_rgba(15,23,42,0.25)] transition-all overflow-hidden"
            >
              <div className="aspect-[4/5] bg-marine-100 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-marine-950 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-marine-600 text-sm mt-0.5">{c.subtitle}</p>
                </div>
                <ArrowRight />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="28" height="10" viewBox="0 0 36 10" fill="none" className="text-marine-700 group-hover:text-marine-950 group-hover:translate-x-1 transition-all">
      <path d="M0 5h34M30 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
