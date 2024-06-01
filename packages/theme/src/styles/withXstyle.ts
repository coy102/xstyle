import merge from 'deepmerge'

import borderRadius from './borderRadius'
import colors from './colors'

const config = {
  content: ['./node_modules/@xstyle/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      borderRadius,
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

const withXstyle = (tailwindConfig: any) => {
  return merge(config, { ...tailwindConfig })
}

export { withXstyle }
