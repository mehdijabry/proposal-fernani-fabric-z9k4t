import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import { HeroSection } from '../components/HeroSection'
import { CollectionGrid } from '../components/CollectionGrid'
import { PromiseStrip, Icons } from '../components/PromiseStrip'

/**
 * AXE 01 — Apparel personnalisé (hoodies, polos, t-shirts, casquettes,
 * vestes corporate) avec broderie, DTF, sérigraphie, sublimation.
 * Cibles : entreprises, événementiel, associations, fédérations.
 */

const TECHNIQUES = [
  { code: '01', name: 'Broderie', desc: 'Fil polyester premium, jusqu’à 12 couleurs, rendu volumineux et durable. Lavable 60°C.' },
  { code: '02', name: 'DTF', desc: 'Direct-to-Film. Designs photoréalistes, multicolores. Idéal pour les petites séries.' },
  { code: '03', name: 'Sérigraphie', desc: 'Encres à l’eau, finition douce, tenue exceptionnelle au lavage. Volumes >50 pcs.' },
  { code: '04', name: 'Sublimation', desc: 'Impression dans la fibre. Couleurs éclatantes, all-over print, indélébile.' },
]

const TARGETS = [
  { label: 'Entreprises', desc: 'Uniformes, équipement collaborateurs, packs welcome.' },
  { label: 'Associations', desc: 'T-shirts événements, polos bénévoles, vestes équipe.' },
  { label: 'Fédérations', desc: 'Tenues officielles, kits compétitions, merchandising.' },
  { label: 'Événementiel', desc: 'Festivals, salons, conférences — du brief au livré.' },
]

export default function Textile() {
  return (
    <div className="min-h-svh bg-cream text-marine-950">
      <Nav axis="textile" />

      <HeroSection
        eyebrow="Apparel Personnalisé"
        title="Built for Work."
        highlight="Made for Comfort."
        description="Apparel premium personnalisé pour entreprises, associations et événementiel — conçu pour porter votre marque avec fierté, du bureau au terrain."
        bulletWords={['Hoodies', 't-shirts', 'polos', 'casquettes']}
        ctaLabel="Découvrir Nos Produits"
        ctaHref="#collection"
        photo="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1600&q=85"
        accent="sand"
      />

      <CollectionGrid
        title="Apparel & Custom"
        values={['Durabilité', 'Style', 'Personnalisation', 'Premium']}
        accent="sand"
        cards={[
          {
            title: 'Hoodies',
            subtitle: 'Brodés / corporate',
            img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=85',
          },
          {
            title: 'T-Shirts',
            subtitle: 'Premium personnalisés',
            img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85',
          },
          {
            title: 'Polos & Casquettes',
            subtitle: 'Identité corporate',
            img: 'https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=900&q=85',
          },
        ]}
      />

      <PromiseStrip
        promises={[
          { label: 'Durabilité', icon: Icons.Durability },
          { label: 'Confort', icon: Icons.Comfort },
          { label: 'Personnalisation', icon: Icons.Custom },
          { label: 'Qualité Premium', icon: Icons.Premium },
        ]}
      />

      {/* TECHNIQUES — section noire en contraste */}
      <section id="catalogue" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-30" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-brand text-sand-400 font-medium mb-3">
              Techniques de marquage
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-cream">
              Quatre techniques.<br />
              <em className="text-sand-400">Une exigence : la durabilité.</em>
            </h2>
            <p className="mt-5 text-cream/70 text-lg">
              On choisit la technique en fonction de votre design, votre volume, votre usage final.
              On ne sacrifie jamais la tenue au lavage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TECHNIQUES.map((t, i) => (
              <motion.div
                key={t.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 border border-cream/15 hover:border-sand-400/50 transition-colors rounded-lg"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sand-400 text-xs tracking-widest">{t.code}</span>
                  <h3 className="font-display font-bold text-2xl text-cream">{t.name}</h3>
                </div>
                <p className="mt-3 text-cream/75 leading-relaxed text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGETS — pour qui */}
      <section className="section bg-cream">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-4 mb-3">
              <span className="h-px w-8 bg-sand-500" />
              <span className="text-xs uppercase tracking-brand text-marine-700 font-medium">Pour qui</span>
              <span className="h-px w-8 bg-sand-500" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-marine-950 leading-tight">
              Toutes les marques.<br />
              <em className="text-marine-700">Une exigence commune.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TARGETS.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="p-7 bg-white border border-marine-100 rounded-xl"
              >
                <h3 className="font-display font-bold text-xl text-marine-950">{t.label}</h3>
                <p className="text-marine-600 text-sm mt-2 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige-strong opacity-50" />
        <div className="container-tight relative text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-brand text-sand-400 mb-4">The Movement</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Vous bâtissez quelque chose<br />
            <em className="text-sand-400">de grand.</em>
          </h2>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed">
            Fernani Fabric habille les marques marocaines qui pensent grand — entrepreneurs,
            associations, fédérations, équipes événementielles. L'uniforme officieux de ceux qui
            construisent quelque chose.
          </p>
          <p className="mt-5 font-display italic text-2xl">#TheBuildersOfMorocco</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="px-6 py-3 bg-sand-400 hover:bg-sand-300 text-marine-950 font-semibold rounded-md transition-colors">
              Travailler avec nous
            </a>
            <Link to="/epi" className="px-6 py-3 border border-cream/40 text-cream hover:bg-cream hover:text-marine-950 font-semibold rounded-md transition-colors">
              Voir l'axe EPI →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection axis="textile" />
      <Footer axis="textile" />
    </div>
  )
}
