/* eslint-disable global-require */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
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
        primary: '#6366f1',
        'primary-light': '#818cf8',
        'primary-dark': '#4f46e5',
        secondary: '#10b981',
        'secondary-light': '#34d399',
        'secondary-dark': '#059669',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
