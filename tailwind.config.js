/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo": "url('/assets/bg.jpg')",
        "horti": "url('/assets/hortifruti.jpg')"
      },
    },
  },
  plugins: [],
}

