/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', './dist/*.html'],
  theme: {
    extend: {
      colors: {
        vrittiText: 'blanchedalmond',
        vrittiBg: '#00162b',
        vrittiContainer: '#3c4043',
        vrittiLight: '#b3b3b3',
        textBox: '#496684',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-sarif'],
      },
      letterSpacing: {
        wider: '1em',
        wide: '0.5em',
      },
      height: {
        vrittiH: '50vh',
      },
      width: {
        vrittiw: '25rem',
      },
      backdropBlur: {
        vritti: '3px',
      },
      screens: {
        sm: '300px',
        md: '700px',
      },
      backdropBlur: {
        sm: '3px',
      },
    },
  },
  plugins: [],
};
