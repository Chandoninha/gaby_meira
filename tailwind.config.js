/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#F4C2D7',
          pinkDark: '#E91E63',
          pinkLight: '#FDF2F7',
          cocoa: '#3B2322',
          gold: '#D4AF37',
          cyan: '#00BCD4',
          yellow: '#FFD54F',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
