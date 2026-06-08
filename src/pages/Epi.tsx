import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import { HeroSection } from '../components/HeroSection'
import { CollectionGrid } from '../components/CollectionGrid'
import { PromiseStrip, Icons } from '../components/PromiseStrip'

/**
 * AXE 02 — EPI Workwear (gilets sécurité, combinaisons, vestes travail,
 * softshell, pantalons pro, chaussures sécurité, casques, gants).
 * Cibles : BTP, Industrie, Énergie, Maintenance, Logistique.
 * Accent : jaune sécurité (#ffcc00) sur fond marine/cream.
 */

const NORMS = [
  { code: 'EN ISO 20471', label: 'Vêtement haute visibilité' },
  { code: 'EN ISO 11611', label: 'Soudage et techniques connexes' },
  { code: 'EN 343', label: 'Protection contre la pluie' },
  { code: 'EN 14404', label: 'Genouillères travail à genoux' },
  { code: 'EN ISO 20345', label: 'Chaussures sécurité S1 à S5' },
  { code: 'EN 397', label: 'Casques industriels' },
  { code: 'EN 388', label: 'Gants — risques mécaniques' },
  { code: 'EN 511', label: 'Gants — protection contre le froid' },
]

const SECTORS = [
  { name: 'BTP', desc: 'Gros œuvre, second œuvre — équipements robustes pour terrains exigeants.' },
  { name: 'Industrie', desc: 'Usines, lignes de production, environnements à risque chimique et mécanique.' },
  { name: 'Énergie', desc: 'Pétrochimie, électricité, photovoltaïque — EPI haute température et antistatique.' },
  { name: 'Maintenance', desc: 'Techniciens itinérants — confort longue durée + haute visibilité.' },
  { name: 'Logistique', desc: 'Entrepôts, plateformes, chauffeurs PL — gilets HV + chaussures S3.' },
  { name: 'Événementiel', desc: 'Régies, équipes techniques — visibilité contrôlée et polyvalence.' },
]

export default function Epi() {
  return (
    <div className="min-h-svh bg-cream text-marine-950">
      <Nav axis="epi" />

      <HeroSection
        eyebrow="EPI · Workwear"
        title="Built for Work."
        highlight="Made for Comfort."
        description="Vêtements de travail et équipements de protection individuelle conformes aux normes EN ISO européennes. Pensés pour la durabilité, la sécurité et le confort terrain."
        bulletWords={['Gilets de sécurité', 'combinaisons', 'casques', 'chaussures S3']}
        ctaLabel="Découvrir Le Catalogue"
        ctaHref="#collection"
        photo="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1600&q=85"
        accent="hivis"
      />

      <CollectionGrid
        title="Workwear & EPI"
        values={['Durabilité', 'Sécurité', 'Conformité', 'Confort']}
        accent="hivis"
        cards={[
          {
            title: 'Gilets & HV',
            subtitle: 'EN ISO 20471 · Cl. 2-3',
            img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=85',
          },
          {
            title: 'Combinaisons & Vestes',
            subtitle: 'EN ISO 11611 · EN 343',
            img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85',
          },
          {
            title: 'Chaussures & Casques',
            subtitle: 'EN ISO 20345 S3 · EN 397',
            img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85',
          },
        ]}
      />

      <PromiseStrip
        promises={[
          { label: 'Durabilité', icon: Icons.Durability },
          { label: 'Sécurité', icon: Icons.Security },
          { label: 'Confort', icon: Icons.Comfort },
          { label: 'Normes EN ISO', icon: Icons.Norms },
        ]}
      />

      {/* SECTORS */}
      <section id="catalogue" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-30" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-brand text-hivis font-medium mb-3">
              Secteurs servis
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-cream">
              Du chantier<br />
              <em className="text-hivis">à l'entrepôt.</em>
            </h2>
            <p className="mt-5 text-cream/70 text-lg">
              Six secteurs équipés, des solutions adaptées à chaque environnement de travail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 rounded-lg overflow-hidden">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="bg-marine-950 p-8 hover:bg-marine-900 transition-colors group"
              >
                <h3 className="font-display font-bold text-2xl text-cream group-hover:text-hivis transition-colors">
                  {s.name}
                </h3>
                <p className="text-cream/70 text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NORMS — conformité */}
      <section className="section bg-cream">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-hivis" />
                <span className="text-xs uppercase tracking-brand text-marine-700 font-medium">Conformité</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-marine-950">
                Normes EN ISO.<br />
                <em className="text-marine-700">Pas de compromis.</em>
              </h2>
              <p className="mt-5 text-marine-700 text-lg leading-relaxed">
                Chaque produit Fernani Fabric répond aux exigences des normes européennes. Documentation
                technique, fiches normes et certificats de conformité fournis sur demande.
              </p>
              <p className="mt-4 text-marine-500 text-sm">
                Un doute sur la norme adaptée à votre métier ? On vous conseille gratuitement.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {NORMS.map((n, i) => (
                <motion.div
                  key={n.code}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="p-4 bg-white border-l-2 border-hivis rounded-r-md shadow-sm"
                >
                  <div className="font-mono text-[10px] tracking-widest text-marine-500">{n.code}</div>
                  <div className="text-sm text-marine-950 mt-1 leading-snug font-medium">{n.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige-strong opacity-50" />
        <div className="container-tight relative text-center max-w-3xl mx-auto">
          <div className="text-xs uppercase tracking-brand text-hivis mb-4">The Movement</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Ceux qui construisent le Maroc<br />
            <em className="text-hivis">méritent de durer.</em>
          </h2>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed">
            BTP, industrie, énergie, maintenance, logistique — Fernani Fabric équipe les femmes et les
            hommes qui font avancer le pays, en plaçant la sécurité avant tout.
          </p>
          <p className="mt-5 font-display italic text-2xl">#TheBuildersOfMorocco</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="px-6 py-3 bg-hivis hover:bg-yellow-400 text-marine-950 font-semibold rounded-md transition-colors">
              Équiper mon équipe
            </a>
            <Link to="/textile" className="px-6 py-3 border border-cream/40 text-cream hover:bg-cream hover:text-marine-950 font-semibold rounded-md transition-colors">
              Voir l'axe Textile →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection axis="epi" />
      <Footer axis="epi" />
    </div>
  )
}
