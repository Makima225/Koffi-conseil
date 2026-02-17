import type { Config } from 'tailwindcss'

export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Ajoute Helvetica Neue comme police par défaut (sans-serif)
        
      },
    },
  },
}