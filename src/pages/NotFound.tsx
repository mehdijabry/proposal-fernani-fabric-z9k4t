import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-svh bg-marine-950 text-cream flex flex-col items-center justify-center px-6">
      <LogoMark className="w-16 h-16 text-cream" />
      <div className="mt-8 text-center">
        <div className="font-mono text-xs tracking-brand text-sand-400 uppercase">Error 404</div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4">Page introuvable.</h1>
        <p className="mt-4 text-cream/70 max-w-md">
          Cette page n'existe pas. Retournez au sélecteur de plateforme pour choisir un axe.
        </p>
        <Link to="/" className="btn-hivis bg-sand-400 hover:bg-sand-300 text-marine-950 mt-8 inline-flex">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
