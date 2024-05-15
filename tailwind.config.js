/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Montserrat', 'sans-serif'],
        pSans: ['Montserrat', 'sans-serif'],
        mdSans: ['Montserrat', 'sans-serif'],
        inter: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        grey:{
          100: '#F1F1F1',
          200: '#F5F5F5',
          300: '#D9D9D9',
          400: '#E4E7E9',
          700:'#6F6F6F',
          800:'#969696',
        
        },
        blueLight:"#F5FBFE",
        bluePrimary: '#0080CF',
        bluePrimary2: '#0080CF',
        redPrimary: '#DE0F04',
        grayPrimary:'#666666',
        lightGray:'#5F6C72',
        yellow:'#FFCC00',
        darkMood:"#18212f"
      }
    },
  },
  plugins: [],
})