import { motion } from 'framer-motion'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContactSection } from '../components/ContactSection'
import { Link } from 'react-router-dom'

/**
 * Textile Personnalisé — l'axe "Professional Apparel" du brief :
 * hoodies, t-shirts, polos, casquettes, vestes corporate
 * personnalisables avec broderie, DTF, sérigraphie, sublimation.
 * Cibles : entreprises, associations, fédérations, événementiel.
 */

const CATEGORIES = [
  { name: 'Hoodies', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80', desc: 'Sweat à capuche heavyweight, coton 320 g/m².' },
  { name: 'T-shirts', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80', desc: 'Coton bio ou mix peigné, coupe droite ou ajustée.' },
  { name: 'Polos', img: 'https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=900&q=80', desc: 'Piqué de coton premium, finitions cousues main.' },
  { name: 'Casquettes', img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80', desc: 'Trucker, snapback, dad cap — broderie 3D incluse.' },
  { name: 'Vestes corporate', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80', desc: 'Softshell, bombers, coupes-vent brodés au logo.' },
  { name: 'Tote bags & accessoires', img: 'https://images.unsplash.com/photo-1602573991155-21f0143bb45c?auto=format&fit=crop&w=900&q=80', desc: 'Tote bags, bonnets, écharpes — pour vos kits welcome.' },
]

const TECHNIQUES = [
  {
    code: '01',
    name: 'Broderie',
    desc: 'Pour les logos corporate qui durent. Fil polyester premium, jusqu’à 12 couleurs, rendu volumineux et premium.',
    bullets: ['Densité 4500 pts/cm²', 'Lavable 60°C', 'Garantie 5 ans'],
  },
  {
    code: '02',
    name: 'DTF',
    desc: 'Direct-to-Film. Idéal pour des designs photoréalistes, multicolores, sur petites et moyennes séries.',
    bullets: ['Couleurs vives', 'Détails fins', 'Dès 1 pièce'],
  },
  {
    code: '03',
    name: 'Sérigraphie',
    desc: 'La technique reine pour les gros volumes. Encres à l’eau, finition douce, tenue exceptionnelle au lavage.',
    bullets: ['Volumes > 50 pcs', 'Couleurs Pantone', 'Coût optimisé'],
  },
  {
    code: '04',
    name: 'Sublimation',
    desc: 'Impression dans la fibre, jamais en surface. Couleurs éclatantes, zéro toucher, parfaite pour le sport.',
    bullets: ['Tissus techniques', 'All-over print', 'Indélébile'],
  },
]

const TARGETS = [
  { label: 'Entreprises', icon: '🏢', desc: 'Uniformes, équipement collaborateurs, packs welcome.' },
  { label: 'Associations', icon: '🤝', desc: 'T-shirts d’événements, polos bénévoles, vestes équipe.' },
  { label: 'Fédérations', icon: '🏛️', desc: 'Tenues officielles, kits compétitions, merchandising.' },
  { label: 'Événementiel', icon: '🎤', desc: 'Festivals, salons, conférences — du brief au livré.' },
]

const PROCESS = [
  { n: '01', title: 'Briefing', desc: 'On comprend votre marque, votre besoin, votre volume.' },
  { n: '02', title: 'Maquette', desc: 'Mock-up 3D personnalisés sous 48h, ajustements inclus.' },
  { n: '03', title: 'Échantillon', desc: 'Prototype physique pour validation finale avant production.' },
  { n: '04', title: 'Production', desc: 'Fabrication marocaine, contrôle qualité à chaque étape.' },
  { n: '05', title: 'Livraison', desc: 'Expédition Maroc + Europe. Packs prêts à distribuer.' },
]

export default function Textile() {
  return (
    <div className="min-h-svh bg-cream text-marine-950">
      <Nav axis="textile" />

      {/* HERO */}
      <section className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-60 pointer-events-none" />
        <div className="container-tight relative grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow">AXE 01 · Textile Personnalisé</div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mt-5 leading-[1.05]">
              Votre marque, <br />
              <em className="text-sand-700">cousue dans le fil.</em>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-marine-700 max-w-xl leading-relaxed">
              Du hoodie brodé pour vos 20 collaborateurs au pack événementiel pour 5 000 visiteurs —
              Fernani Fabric habille les marques marocaines qui pensent grand.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#categories" className="btn-primary">
                Voir les catégories
              </a>
              <a href="#contact" className="btn-secondary">
                Demander un devis
              </a>
            </div>
          </motion.div>

          {/* Right side : floating product card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80"
                alt="Hoodie brodé Fernani Fabric"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-marine-950/90 to-transparent text-cream">
                <div className="text-[10px] uppercase tracking-brand text-sand-400">Signature</div>
                <div className="font-display italic text-2xl mt-1">Made for Comfort.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* KPIs strip */}
        <div className="mt-20 border-y border-marine-200">
          <div className="container-tight grid grid-cols-2 md:grid-cols-4 divide-x divide-marine-200">
            {[
              { v: '4', l: 'Techniques de marquage' },
              { v: '20+', l: 'Catégories produit' },
              { v: '48h', l: 'Maquettes livrées' },
              { v: '100%', l: 'Production au Maroc' },
            ].map((k, i) => (
              <div key={i} className="py-6 px-4 text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl text-marine-950">{k.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-marine-500 mt-1">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow">01 — Catégories</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Du basique au statement.
            </h2>
            <p className="mt-4 text-marine-700 text-lg">
              Une gamme complète d’apparel premium pensée pour porter votre identité, dans tous les
              contextes — bureau, terrain, événement, lifestyle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative aspect-[4/5] overflow-hidden bg-marine-100"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marine-950 via-marine-950/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
                  <div className="font-display font-bold text-2xl">{c.name}</div>
                  <p className="text-sm text-cream/80 mt-2 leading-snug">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNIQUES */}
      <section id="techniques" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige opacity-40" />
        <div className="container-tight relative">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow text-sand-400">02 — Techniques de marquage</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight text-cream">
              Quatre techniques. <br />
              <em className="text-sand-400">Une exigence : la durabilité.</em>
            </h2>
            <p className="mt-4 text-cream/70 text-lg">
              On choisit la technique en fonction de votre design, de votre volume et de l’usage final.
              On ne sacrifie jamais la tenue au lavage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TECHNIQUES.map((t, i) => (
              <motion.div
                key={t.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 border border-cream/15 hover:border-sand-400/50 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <div className="font-mono text-sand-400 text-sm tracking-widest">{t.code}</div>
                  <div className="font-display font-bold text-3xl">{t.name}</div>
                </div>
                <p className="text-cream/80 leading-relaxed">{t.desc}</p>
                <ul className="mt-5 space-y-2">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-cream/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-sand-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGETS */}
      <section className="section">
        <div className="container-tight">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow">03 — Pour qui</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Toutes les marques. <br />
              <em className="text-sand-700">Une exigence commune.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGETS.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-8 bg-white shadow-sm border border-marine-100"
              >
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="font-display font-bold text-xl text-marine-950">{t.label}</h3>
                <p className="text-marine-600 text-sm mt-2 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section bg-sand-100 relative overflow-hidden">
        <div className="container-tight relative">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">04 — Processus</div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
              Cinq étapes. <br />
              <em className="text-marine-700">Du brief au livré.</em>
            </h2>
          </div>

          <ol className="space-y-3">
            {PROCESS.map((p) => (
              <motion.li
                key={p.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_auto_1fr] gap-6 md:gap-10 items-baseline py-5 border-b border-marine-200/50"
              >
                <div className="font-mono text-sand-700 text-sm tracking-widest">{p.n}</div>
                <h3 className="font-display font-bold text-2xl text-marine-950 min-w-[160px]">
                  {p.title}
                </h3>
                <p className="text-marine-700 text-base leading-relaxed col-span-2 md:col-span-1">
                  {p.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT — Builders of Morocco */}
      <section id="about" className="section bg-marine-950 text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-zellige-strong opacity-50" />
        <div className="container-tight relative text-center max-w-3xl mx-auto">
          <div className="eyebrow text-sand-400 mb-4">The Movement</div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Vous bâtissez quelque chose <br />
            <em className="text-sand-400">de grand.</em>
          </h2>
          <p className="mt-6 text-lg text-cream/80 leading-relaxed">
            Fernani Fabric n’est pas qu’un fournisseur. C’est l’uniforme officieux des entrepreneurs,
            ingénieurs, architectes, techniciens et créateurs qui font avancer le Maroc.
          </p>
          <p className="mt-5 font-display italic text-2xl text-cream">
            #TheBuildersOfMorocco
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-hivis bg-sand-400 hover:bg-sand-300 text-marine-950">
              Travailler avec nous
            </a>
            <Link to="/epi" className="btn-secondary border-cream/40 text-cream hover:bg-cream hover:text-marine-950">
              Voir l’axe EPI →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection axis="textile" />
      <Footer axis="textile" />
    </div>
  )
}
