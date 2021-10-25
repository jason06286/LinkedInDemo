// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto, sans-serif']
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}