/* eslint-disable global-require */
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
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
