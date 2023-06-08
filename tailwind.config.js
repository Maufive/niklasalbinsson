/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
    safelist: ['dark'], // specific classes
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair-display)', ...fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              padding: '3px 7px',
              color: '#818cf8',
              fontWeight: '600',
            },
            pre: {
              marginTop: '0px',
            },
          },
        },
      },
      colors: {
        primary: colors.indigo[400],
        'primary-light': colors.indigo[300],
        'primary-dark': colors.indigo[500],
        secondary: colors.emerald[400],
        'secondary-light': colors.emerald[300],
        'secondary-dark': colors.emerald[500],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
