const { withXstyle } = require('@xstyle-test/theme')

/** @type {import('tailwindcss').Config} */

module.exports = withXstyle({
  content: ['./stories/**/*.{html,js,ts,jsx,tsx}', './node_modules/@xstyle-test/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
})
