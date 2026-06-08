import { motion } from 'framer-motion'
import type { ReactElement } from 'react'

/**
 * 4-USP strip in the second screenshot : icon + label + thin separator,
 * sitting on the cream background. Used identically on both pages with
 * one swap per axis (EPI gets Normes EN ISO instead of Personnalisation).
 */

export type Promise = {
  label: string
  icon: ReactElement
}

export function PromiseStrip({ promises }: { promises: Promise[] }) {
  return (
    <section className="bg-cream py-14 sm:py-16 border-t border-marine-100">
      <div className="container-tight">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-marine-200/60"
          style={{ borderColor: 'rgba(148, 173, 193, 0.4)' }}
        >
          {promises.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-4 py-3"
            >
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-marine-950">
                {p.icon}
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-marine-950">
                {p.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Icon set ----------------------------------------------------

export const Icons = {
  Durability: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <path d="M16 4c-2.5 4 0 8 0 10s-2.5 6 0 10c2.5-4 0-8 0-10s2.5-6 0-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Security: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <path d="M16 4l10 4v8c0 6-4 11-10 13-6-2-10-7-10-13V8l10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 16l4 4 7-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Comfort: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <path d="M4 18c4-1 8-4 8-9 4 5 9 6 14 4-1 6-5 10-11 11-5-1-9-3-11-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Premium: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <path d="M16 4l3 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1 3-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  Norms: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <rect x="5" y="6" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 14h12M10 18h12M10 22h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 4v4M10 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Custom: (
    <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
      <path d="M19 5l8 8-15 15-8 0 0-8 15-15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 8l8 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
}
