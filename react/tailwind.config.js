module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#6d7ae3',
        'secondary':'rgb(243,248,255)',
        'gray-back':'#f8f8f8'
      },
      fontFamily:{
        'roboto':['Roboto Flex'],
        'sans':['Open Sans']
      }
    },
  },
  plugins: [],
}