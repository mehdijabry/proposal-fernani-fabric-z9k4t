import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Shared contact block. The form composes a mailto so v1 doesn't need a
 * backend — we can wire it to the forms-hub Worker later if needed.
 * Visual treatment changes slightly per axis (sand for textile, hivis
 * accent for EPI).
 */
export function ContactSection({ axis }: { axis: 'textile' | 'epi' }) {
  const [busy, setBusy] = useState(false)
  const isEpi = axis === 'epi'

  const subjectPrefix = isEpi ? '[EPI] ' : '[Textile] '

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    const f = e.currentTarget as HTMLFormElement
    const data = new FormData(f)
    const name = String(data.get('name') ?? '')
    const company = String(data.get('company') ?? '')
    const phone = String(data.get('phone') ?? '')
    const quantity = String(data.get('quantity') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = encodeURIComponent(`${subjectPrefix}Demande de devis — ${company || name}`)
    const body = encodeURIComponent(
      `Nom: ${name}\nEntreprise: ${company}\nTéléphone: ${phone}\nQuantité estimée: ${quantity}\n\nMessage:\n${message}\n\n—\nEnvoyé depuis fernanifabric.ma`
    )
    window.location.href = `mailto:fabric.fernani@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => setBusy(false), 1200)
  }

  return (
    <section id="contact" className={'section relative ' + (isEpi ? 'bg-marine-950 text-cream' : 'bg-cream text-marine-950')}>
      {/* Decorative zellige strip top */}
      <div className={'absolute top-0 inset-x-0 h-32 ' + (isEpi ? 'bg-zellige opacity-30' : 'bg-zellige opacity-50')} />

      <div className="container-tight relative">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className={'eyebrow ' + (isEpi ? 'text-hivis' : 'text-sand-700')}>
              Devis · 24h
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              {isEpi ? "Équipons votre équipe." : "Habillons votre marque."}
            </h2>
            <p className={'mt-5 text-lg leading-relaxed ' + (isEpi ? 'text-cream/80' : 'text-marine-700')}>
              {isEpi
                ? 'Donnez-nous votre cahier des charges — secteur, métier, normes attendues. On revient sous 24h avec un devis chiffré.'
                : 'Briefing créatif, maquettes, échantillons. Du polo brodé pour 20 collaborateurs au pack événementiel pour 5000 visiteurs.'}
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="tel:+212655883621"
                className={'flex items-center gap-4 group ' + (isEpi ? 'text-cream' : 'text-marine-950')}
              >
                <div className={'w-11 h-11 rounded-full flex items-center justify-center transition-colors ' + (isEpi ? 'bg-cream/10 group-hover:bg-hivis group-hover:text-marine-950' : 'bg-marine-100 group-hover:bg-marine-950 group-hover:text-cream')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5l1.5-2.5L20 15v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Téléphone</div>
                  <div className="font-semibold">+212 6 55 88 36 21</div>
                </div>
              </a>
              <a
                href="mailto:fabric.fernani@gmail.com"
                className={'flex items-center gap-4 group ' + (isEpi ? 'text-cream' : 'text-marine-950')}
              >
                <div className={'w-11 h-11 rounded-full flex items-center justify-center transition-colors ' + (isEpi ? 'bg-cream/10 group-hover:bg-hivis group-hover:text-marine-950' : 'bg-marine-100 group-hover:bg-marine-950 group-hover:text-cream')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Email</div>
                  <div className="font-semibold">fabric.fernani@gmail.com</div>
                </div>
              </a>
              <a
                href="https://wa.me/212655883621"
                target="_blank"
                rel="noreferrer"
                className={'flex items-center gap-4 group ' + (isEpi ? 'text-cream' : 'text-marine-950')}
              >
                <div className={'w-11 h-11 rounded-full flex items-center justify-center transition-colors ' + (isEpi ? 'bg-cream/10 group-hover:bg-hivis group-hover:text-marine-950' : 'bg-marine-100 group-hover:bg-marine-950 group-hover:text-cream')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 12a8 8 0 1 0-3.6 6.7L20 20l-1.4-3.4A8 8 0 0 0 20 12z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-60">WhatsApp</div>
                  <div className="font-semibold">Réponse rapide</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={onSubmit}
            className={'md:col-span-7 p-8 sm:p-10 ' + (isEpi ? 'bg-cream text-marine-950' : 'bg-white shadow-xl')}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Votre nom" required />
              <Field name="company" label="Entreprise" />
              <Field name="phone" label="Téléphone" type="tel" />
              <Field name="quantity" label="Quantité estimée" placeholder="ex : 50 pièces" />
            </div>
            <label className="block mt-5">
              <span className="text-[11px] uppercase tracking-widest text-marine-500 font-medium">
                Détaillez votre besoin *
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={isEpi
                  ? 'Secteur (BTP / industrie / logistique), nombre de personnes, normes attendues (EN ISO 20471, EN 388…)'
                  : 'Type de produit, design, technique souhaitée (broderie, sérigraphie, DTF), délai…'}
                className="mt-2 w-full bg-cream border border-marine-200 px-4 py-3 text-base focus:outline-none focus:border-marine-950 transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={busy}
              className={'mt-6 w-full sm:w-auto sm:px-10 py-4 font-medium tracking-widest uppercase text-sm transition-colors disabled:opacity-50 ' + (isEpi ? 'bg-marine-950 text-cream hover:bg-marine-800' : 'bg-marine-950 text-cream hover:bg-marine-800')}
            >
              {busy ? 'Ouverture…' : 'Envoyer ma demande →'}
            </button>
            <p className="text-[11px] text-marine-500 mt-4">
              Réponse sous 24h ouvrées. Vos données ne sont jamais partagées.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  name, label, type = 'text', required, placeholder,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-widest text-marine-500 font-medium">
        {label} {required && <span className="text-marine-950">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-cream border border-marine-200 px-4 py-3 text-base focus:outline-none focus:border-marine-950 transition-colors"
      />
    </label>
  )
}
