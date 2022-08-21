/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{vue,ts}",

  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {

    extend: {
      screens: {
        'rm': '576px',
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        baysoir: ["Baysoir", "sans-serif"],
        boston: ["Boston", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
