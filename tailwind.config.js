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
      },
      colors: {
        bluePrimary: '#0080CF',
        grayPrimary:'#666666',
        lightGray:'#5F6C72'
      }
    },
  },
  plugins: [],
}