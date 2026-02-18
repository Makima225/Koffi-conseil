import type { Config } from 'tailwindcss'

export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // Police par défaut pour tout le site
        playfair: ['Playfair Display', 'serif'],  // Police personnalisée
      },
    },
  },
}