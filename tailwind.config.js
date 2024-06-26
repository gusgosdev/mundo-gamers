/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Rubik'],
        cuerpo: ['Karla']
      },
      screens: {
        'mini': '374px',
        'tablet': '900px'
      },
      colors: {
        'nice': '#333',
        'blanc': '#f5f5f5',
        'azu': '#0652DD'
      },
      zIndex: {
        '1000': '1000',
      },
      transitionDuration: {
        '550': '550ms',
      },
    },
  },
  plugins: [],
}