/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: '#030303',
        neonBlue: '#0f5ad1',
        neonRed: '#E50914',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};