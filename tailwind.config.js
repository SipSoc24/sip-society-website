/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'Arial', 'sans-serif'],
      },
      colors: {
        dark: '#0f100a',
        light: {
          DEFAULT: '#e6e0c6',
          '50': '#e6e0c680',
          '30': '#e6e0c64d',
          '80': '#e6e0c6cc',
        },
      },
      fontSize: {
        'body': '20px',
        'body-small': '18px',
        'body-tiny': '16px',
        'top': '13px',
        'subtitle': '28px',
        'h1': '102px',
        'h2': '42px',
        'h3': '35px',
      },
    },
  },
  plugins: [],
};