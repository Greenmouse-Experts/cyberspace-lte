/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Proxima Nova", "sans-serif"],
        pSans: ["Proxima Nova", "sans-serif"],
        mdSans: ["Proxima Nova", "sans-serif"],
        inter: ["Proxima Nova", "sans-serif"],
        montserrat: ["Proxima Nova", "sans-serif"],
      },
      colors: {
        grey: {
          100: "#000",
          200: "#000",
          300: "#000",
          400: "#000",
          700: "#000",
          800: "#000",
        },
        // grey:{
        //   100: '#F1F1F1',
        //   200: '#F5F5F5',
        //   300: '#D9D9D9',
        //   400: '#E4E7E9',
        //   700:'#6F6F6F',
        //   800:'#969696',

        // },
        blueLight: "#F5FBFE",
        bluePrimary: " #0075BF",
        bluePrimary2: " #0075BF",
        redPrimary: "#DE0F04",
        grayPrimary: "#666666",
        lightGray: "#5F6C72",
        yellow: "#FFCC00",
        darkMood: "#18212f",
      },
    },
  },
  plugins: [],
});
