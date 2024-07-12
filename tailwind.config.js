/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'codingImg':"url('/public/imgs/codeando.png')",
      }
      ,
      colors: {
        'darkGray': '#262626',
        
      },
    },
  },
  plugins: [],
}

