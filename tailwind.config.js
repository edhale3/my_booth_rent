module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          "1200":"#8b7556",
        }
      },
      margin:{
        "132":"36rem"
      },
      backgroundImage: theme => ({
        'mbr-background':"url('./images/mbr_background_2.jpg')",
      })
    },
    fontFamily:{
      'custom':['Poppins', 'sans'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
