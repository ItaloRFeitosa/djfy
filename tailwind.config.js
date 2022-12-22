/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'background-base': '#121212',
        'background-highlight': '#1a1a1a',
        'background-press': '#000',
        'background-elevated-base': '#242424',
        'background-elevated-highlight': '#2a2a2a',
        'text-base': '#fff',
        'text-subdued': '#a7a7a7',
        'text-bright-accent': '#1ed760',
        'text-negative': '#f15e6c',
        'text-warning': '#ffa42b',
        'text-positive': '#1ed760',
        'text-announcement': '#3d91f4',
        'essential-base': '#fff',
        'essential-subdued': '#727272',
        'essential-bright-accent': '#1ed760',
        'essential-negative': '#e91429',
        'essential-warning': '#ffa42b',
        'essential-positive': '#1ed760',
        'essential-announcement': '#0d72ea',
        'decorative-subdued': '#292929',
        'green-base': '#1ed760',
        'green-highlight': '#1fdf64',
        'green-press': '#169c46',
      },
      fontFamily: {
        sans: ["var(--inter-font)", ...fontFamily.sans],
      },
    }
  },
  plugins: [],
}
