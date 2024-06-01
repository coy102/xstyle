const { withXstyle } = require('@xstyle/theme')

/** @type {import('tailwindcss').Config} */

module.exports = withXstyle({
  content: ['./stories/**/*.{html,js,ts,jsx,tsx}', './node_modules/@xstyle/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
})
