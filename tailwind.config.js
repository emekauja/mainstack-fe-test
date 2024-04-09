/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      degular: ['Degular', 'sans-serif'],
      degularDisplay: ['Degular Display', 'sans-serif'],

    },
    colors: {
      white: '#ffffff',
      gray: {
        50: '#EFF1F6',
        100:  '#DBDEE5',
        200: '#D9D9D9',
        300: '#888F95',
        400: '#56616B',
        DEFAULT: '#56616B',
      },
      black: {
        // 50: ,
        // 100: ,
        // 200: ,
        300: '#131316',
        DEFAULT: '#131316',
      }
    },
    extend: {},
  },
  plugins: [
    '@tailwindcss/forms'
  ],
}

