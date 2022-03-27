const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-nebula': 'var(--color-brand-nebula)',
        'brand-black': 'var(--color-brand-black)',

        'neutral-lightest': 'var(--color-neutral-lightest)',
        'neutral-light': 'var(--color-neutral-light)',
        'neutral-dark': 'var(--color-neutral-dark)',
        'neutral-darkest': 'var(--color-neutral-darkest)',

        'uranus-base': 'var(--color-uranus-base)',

        'venus-base': 'var(--color-venus-base)',

        'nebula-lightest': 'var(--color-nebula-lightest)',
        'nebula-dark': 'var(--color-nebula-dark)',
        'nebula-darkest': 'var(--color-nebula-darkest)',
      },
      boxShadow: {
        'small': '0px 4px 8px rgba(35, 38, 59, 0.25)',
        'medium': '0px 8px 16px rgba(35, 38, 59, 0.25)',
        'large': '0px 12px 32px rgba(35, 38, 59, 0.25)',
      },
      transitionProperty: {
        width: 'width',
      },
    },
    screens: {
      tablet: '768px',
      laptop: '1440px',
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
