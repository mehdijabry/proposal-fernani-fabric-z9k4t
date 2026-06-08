/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fernani Fabric brand book palette
        marine: {
          DEFAULT: '#0a2540', // Bleu Marine Fernani (couleur principale)
          50: '#f1f4f8',
          100: '#dee5ee',
          200: '#bfcedb',
          300: '#94adc1',
          400: '#6886a3',
          500: '#4a6886',
          600: '#3a5470',
          700: '#28405a',
          800: '#162a44',
          900: '#0a2540',
          950: '#061528',
        },
        sand: {
          DEFAULT: '#c9a877', // Beige Marocain — zellige, héritage
          50: '#fbf8f1',
          100: '#f4ecdc',
          200: '#e8d5b3',
          300: '#d9bb87',
          400: '#c9a877',
          500: '#b88f5a',
          600: '#a37545',
          700: '#85603b',
          800: '#6c4f35',
          900: '#59422f',
        },
        cream: '#f6f3ee', // Blanc cassé
        hivis: '#ffcc00', // Jaune Sécurité (réservé EPI haute visibilité)
      },
      fontFamily: {
        // Display = serif italique pour la signature "Made for Comfort"
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        brand: '0.35em',
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
