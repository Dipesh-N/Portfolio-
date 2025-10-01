import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        lightHover : "#fcf4ff",
      },

      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        ovo: ['var(--font-ovo)', 'serif'],
      },
    },
  },
} satisfies Config



