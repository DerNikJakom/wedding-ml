/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      colors: {
        cream: '#faf7f2',
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: {
          light: '#2d2d2d',
          DEFAULT: '#4a4a4a',
          dark: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};