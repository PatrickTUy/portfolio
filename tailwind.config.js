/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#34343b',
        secondary: '#2e2e35',
        btnGreen: '#808080',
      },
      fontFamily: {
        Inria: ['Inria Serif', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
        sans: ['PT Seriff', 'serif'],
      },
    },
  },
  plugins: [],
};
