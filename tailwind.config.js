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
    extend: {},
  },
  plugins: [
    '@tailwindcss/forms'
  ],
}

