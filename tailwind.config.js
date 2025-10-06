/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'], // Ensure you include Playfair Display fonts in your CSS as previously discussed.
        'lato': ['"Lato"', 'sans-serif'], // Include Lato with all its variants.
      },
      colors: {
        'primary-red': {
          100: '#F8BAC2',
          200: '#C2888F',
          300: '#8F5860',
          400: '#5E2C35',
          500: '#30020C',
          600: '#180005',
        },
        'secondary-yellow': {
          100: '#D4AF37',
          200: '#A98901',
          300: '#7F6400',
          400: '#594200',
        },
        'off-white': '#FAFAFA',
      },
    },
  },
  plugins: [],
}

