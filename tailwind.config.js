/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#00854a",
        orange:"#ff6108",
        yellow:"#d6ab7d"
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

