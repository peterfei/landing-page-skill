import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#78350f',
        background: '#fef3c7',
        surface: '#fde68a',
        accent: '#b45309',
        textPrimary: '#451a03',
        textSecondary: '#92400e',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Merriweather', 'Georgia', 'serif'],
      },
      borderWidth: {
        'vintage': '4px',
      },
    },
  },
  plugins: [],
}
export default config
