import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      colors: {
        standard: colors.stone,
        primary: colors.blue,
        standardb: colors.stone[200],
        standardw: colors.stone[100],
        standardd: colors.stone[300]
      }
    },
  },
  plugins: [],
}

