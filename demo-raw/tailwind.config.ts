import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist 高对比度配色
        background: '#FFFFFF',
        surface: '#000000',
        accent: '#FF0000',
        border: '#000000',
        text: '#000000',
        textInverse: '#FFFFFF',
      },
      fontFamily: {
        display: ['Courier New', 'Courier', 'monospace'],
        body: ['Courier New', 'Courier', 'monospace'],
      },
      borderWidth: {
        'brutalist': '4px',
        'heavy': '6px',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
