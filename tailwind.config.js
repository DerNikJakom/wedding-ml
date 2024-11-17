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
        primary: '#1a1a1a',
        secondary: '#f5f5f5',
        accent: {
          light: '#e5e5e5',
          DEFAULT: '#a3a3a3',
          dark: '#404040',
        },
      },
    },
  },
  plugins: [],
};