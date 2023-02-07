module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        mmd: '600px',
        md: '800px',
        lg: '976px',
        xlg: '1150px',
        xl: '1440px',
      },
      colors: {
        primary: '#353131',
        dark:'#423C3C',
        light: '#423C3C',
        yellow: '#DFDA53',
        white:'#CCFFFFFF'
      },
      fontFamily: {
        inter: ['Inter'],
        allura: ['Allura'],
        rowdies: ['Rowdies'],
      },
    },
  },
  plugins: [],
};
