import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15803d',
        background: '#f0fdf4',
        surface: '#dcfce7',
        textPrimary: '#14532d',
        textSecondary: '#166534',
        accent: '#84cc16',
      },
      fontFamily: {
        display: ['Nunito', 'Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'organic': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
