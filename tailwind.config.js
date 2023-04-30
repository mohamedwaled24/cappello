/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   // sans:["ClashDisplay-Regular" , ...defualtTheme.fontFamily.sans]
      // },
      colors:{
        tomato:'#E50914',
        maarigold:'#ffbe0b'
      },
      rotate:{
        '360':'360deg'
      }
    },
  },
  plugins: [],
}

