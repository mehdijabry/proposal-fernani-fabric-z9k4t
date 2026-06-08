import { motion } from 'framer-motion'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import { Link } from 'react-router-dom'

/**
 * EPI Workwear — l'axe "Équipement de Protection Individuelle" du brief :
 * gilets de sécurité, combinaisons, vestes de travail, softshell,
 * pantalons professionnels, chaussures de sécurité, casques, gants.
 * Cibles : BTP, Industrie, Énergie, Maintenance, Logistique.
 */

const PRODUCTS = [
  { name: 'Gilets de sécurité', code: 'EN ISO 20471', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80', desc: 'Haute visibilité jaune/orange, bandes rétroréfléchissantes, classe 2 & 3.' },
  { name: 'Combinaisons', code: 'EN ISO 11611', img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80', desc: 'Coverall industriel, ignifuge ou multirisques selon métier.' },
  { name: 'Vestes de travail', code: 'EN 343', img: 'https://images.unsplash.com/photo-1521575107034-e0fa0b594529?auto=format&fit=crop&w=900&q=80', desc: 'Coupe-vent, déperlante, doublure chaude — toutes saisons.' },
  { name: 'Softshell', code: 'EN 343 · 3 layers', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80', desc: 'Triple couche respirante, idéale terrain intermédiaire.' },
  { name: 'Pantalons pro', code: 'EN 14404', img: 'https://images.unsplash.com/photo-1531394474924-7af23cb2ff2c?auto=format&fit=crop&w=900&q=80', desc: 'Cargo renforcé, poches genouillères, tissu Cordura®.' },
  { name: 'Chaussures de sécurité', code: 'EN ISO 20345 · S3', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', desc: 'Embout composite, semelle anti-perforation, anti-statique.' },
  { name: 'Casques', code: 'EN 397', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80', desc: 'Chantier ABS, avec ou sans visière, jugulaire 4 points.' },
  { name: 'Gants', code: 'EN 388 · 4543', img: 'https://images.unsplash.com/photo-1582478432267-1e2dbb6e4d83?auto=format&fit=crop&w=900&q=80', desc: 'Anti-coupure, anti-perforation, manutention lourde.' },
]

const SECTORS = [
  { name: 'BTP', icon: '🏗️', count: '8 gammes', desc: 'Gros œuvre, second œuvre, gros chantiers — équipements robustes pour terrains exigeants.' },
  { name: 'Industrie', icon: '⚙️', count: '6 gammes', desc: 'Usines, lignes de production, environnements à risque chimique et mécanique.' },
  { name: 'Énergie', icon: '⚡', count: '5 gammes', desc: 'Pétrochimie, électricité, photovoltaïque — EPI haute température et antistatique.' },
  { name: 'Maintenance', icon: '🔧', count: '6 gammes', desc: 'Techniciens itinérants, intervention rapide — confort longue durée + visibilité.' },
  { name: 'Logistique', icon: '📦', count: '4 gammes', desc: 'Entrepôts, plateformes, chauffeurs PL — gilets HV + chaussures S3.' },
  { name: 'Événementiel', icon: '🎯', count: '3 gammes', desc: 'Régies, équipes techniques festivals — visibilité contrôlée et polyvalence.' },
]

const NORMS = [
  { code: 'EN ISO 20471', label: 'Vêtement haute visibilité' },
  { code: 'EN ISO 11611', label: 'Soudage et techniques connexes' },
  { code: 'EN 343', label: 'Protection contre la pluie' },
  { code: 'EN 14404', label: 'Genouillères pour le travail à genoux' },
  { code: 'EN ISO 20345', label: 'Chaussures de sécurité S1 à S5' },
  { code: 'EN 397', label: 'Casques de protection industriels' },
  { code: 'EN 388', label: 'Gants — risques mécaniques' },
  { code: 'EN 511', label: 'Gants — protection contre le froid' },
]

const PROMISES = [
  {
    n: '01',
    title: 'Conformité totale',
    desc: 'Chaque produit testé selon les normes EN ISO européennes. Documentation technique sur demande.',
  },
  {
    n: '02',
    title: 'Confort longue durée',
    desc: 'Tissus respirants, coupes étudiées pour la mobilité. Pas de "fonctionnel et inconfortable".',
  },
  {
    n: '03',
    title: 'Personnalisation incluse',
    desc: 'Broderie ou sérigraphie de votre logo entreprise sur chaque pièce, sans surcoût.',
  },
  {
    n: '04',
    title: 'Stock disponible',
    desc: 'Catalogue tenu en stock au Maroc. Réassort en 48h pour les références courantes.',
  },
]

export default function Epi() {
  return (
    <div className="min-h-svh bg-cream text-marine-950">
      <Nav axis="epi" />

      {/* HERO */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-marine-950 text-cream">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1900&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-marine-950 via-marine-950/90 to-marine-900/80" />
          <div className="absolute inset-0 bg-zellige opacity-30" />
        </div>

        <div className="container-tight relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 bg-hivis text-marine-950 px-3 py-1 font-mono text-[10px] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-marine-950 animate-pulse-slow" />
              AXE 02 · EPI Workwear
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream">
              Équipez ceux qui <br />
              <em className="text-hivis">construisent.</em>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-cream/80 max-w-2xl leading-relaxed">
              Vêtements de travail et équipements de protection individuelle conformes aux normes
              EN ISO européennes. Pensés pour la durabilité, la sécurité et le confort terrain.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#workwear" className="btn-hivis">
                Voir le catalogue
              </a>
              <a href="#contact" className="btn-secondary border-cream/40 text-cream hover:bg-cream hover:text-marine-950">
                Demander un devis
              </a>
            </div>
          </motion.div>

          {/* KPI strip — visible on hero */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px bg-cream/10">
            {[
              { v: '8', l: 'Catégories EPI' },
              { v: '32', l: 'Références en stock' },
              { v: 'EN ISO', l: 'Toutes normes' },
              { v: '48h', l: 'Réassort moyen' },
            ].map((k, i) => (
              <div key={i} className="bg-marine-950 py-5 sm:py-6 px-4 text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-cream">{k.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-cream/60 mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="workwear" className="section">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow">01 — Catalogue Workwear</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Huit catégories. <br />
              <em className="text-sand-700">Une exigence : durer.</em>
            </h2>
            <p className="mt-4 text-marine-700 text-lg">
              Tous nos EPI sont conformes aux normes européennes en vigueur. Documentation technique
              et fiches normes fournies sur demande.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group bg-white border border-marine-100 overflow-hidden hover:border-marine-950 transition-colors"
              >
                <div className="aspect-[4/5] bg-marine-100 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-hivis text-marine-950 text-[9px] font-mono tracking-widest px-2 py-1">
                    {p.code}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-marine-950">{p.name}</h3>
                  <p className="text-marine-600 text-sm mt-2 leading-snug">{p.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-30" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow text-hivis">02 — Secteurs servis</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight text-cream">
              Du chantier <br />
              <em className="text-hivis">à l'entrepôt.</em>
            </h2>
            <p className="mt-4 text-cream/70 text-lg">
              Six secteurs équipés, des solutions adaptées à chaque environnement de travail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="bg-marine-950 p-8 hover:bg-marine-900 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{s.icon}</div>
                  <div className="font-mono text-[10px] tracking-widest text-hivis">{s.count}</div>
                </div>
                <h3 className="font-display font-bold text-2xl text-cream group-hover:text-hivis transition-colors">
                  {s.name}
                </h3>
                <p className="text-cream/70 text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NORMS */}
      <section id="norms" className="section">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow">03 — Conformité</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
                Normes EN ISO.<br />
                <em className="text-sand-700">Pas de compromis.</em>
              </h2>
              <p className="mt-5 text-marine-700 text-lg leading-relaxed">
                Chaque produit Fernani Fabric répond aux exigences des normes européennes en
                vigueur. Documentation technique, fiches normes et certificats de conformité
                fournis sur demande.
              </p>
              <p className="mt-4 text-marine-600 text-sm">
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
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-4 bg-white border-l-2 border-hivis"
                >
                  <div className="font-mono text-xs tracking-widest text-marine-500">{n.code}</div>
                  <div className="text-sm text-marine-950 mt-1 leading-snug">{n.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMISES */}
      <section className="section bg-sand-100 relative overflow-hidden">
        <div className="container-tight relative">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">04 — Notre promesse</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Quatre engagements.<br />
              <em className="text-marine-700">Zéro concession.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROMISES.map((p) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-cream"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-hivis text-sm tracking-widest">{p.n}</span>
                  <h3 className="font-display font-bold text-2xl text-marine-950">{p.title}</h3>
                </div>
                <p className="mt-3 text-marine-700 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige-strong opacity-50" />
        <div className="container-tight relative text-center max-w-3xl mx-auto">
          <div className="eyebrow text-hivis mb-4">The Movement</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Ceux qui construisent le Maroc <br />
            <em className="text-hivis">méritent de durer.</em>
          </h2>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed">
            BTP, industrie, énergie, maintenance, logistique — Fernani Fabric équipe les femmes et
            les hommes qui font avancer le pays, en plaçant la sécurité avant tout.
          </p>
          <p className="mt-5 font-display italic text-2xl text-cream">
            #TheBuildersOfMorocco
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-hivis">
              Équiper mon équipe
            </a>
            <Link
              to="/textile"
              className="btn-secondary border-cream/40 text-cream hover:bg-cream hover:text-marine-950"
            >
              Voir l’axe Textile →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection axis="epi" />
      <Footer axis="epi" />
    </div>
  )
}
