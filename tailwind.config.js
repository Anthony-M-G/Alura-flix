/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      logo: {
        'logoImg': "url('/public/logo.png')",
      },
      backgroundImage: {
        'codingImg':"url('/public/img/codeando.png')",
      }
      ,
      colors: {
        'darkGray': '#262626',
        
      },
    },
  },
  plugins: [],
}

