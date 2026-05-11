
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
        bgDeep: "#030303",
        neonBlue: "#0f5ad1",
        neonRed: "#E50914",
      },
    },
  },
  plugins: [],
}
export default config
