/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Hanken Grotesk', 'sans-serif'],
        pSans: ['Public Sans', 'sans-serif'],
        mdSans: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        grey:{
          100: '#F1F1F1',
          200: '#F5F5F5',
          300: '#D9D9D9',
          400: '#E4E7E9',
          700:'#6F6F6F',
        
        },
        bluePrimary: '#0080CF',
        bluePrimary2: '#0080CF',
        redPrimary: '#DE0F04',
        grayPrimary:'#666666',
        lightGray:'#5F6C72',
        yellow:'#FFCC00'
      }
    },
  },
  plugins: [],
}