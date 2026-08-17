/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          gold: '#c5a059',
          dark: '#2c2c2c',
          cream: '#fcfbfa',
        }
      },
    },
  },
  plugins: [],
}
