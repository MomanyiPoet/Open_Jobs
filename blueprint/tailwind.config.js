/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: '#017C6E',
        secondary: '#363753',
        whity: '#FEFEFE',
        darky: '#262626',
        cream: '#DFE3EE',
      },
    },
  },
  plugins: [require("daisyui")],
}

