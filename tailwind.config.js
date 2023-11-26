/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A20CB',
        secondary: '#FFFF00',
        third: '#F0E9FF',
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        raleway: ["'Raleway'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

