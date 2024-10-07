/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: '#3F3F37',  
        customSecondary: '#494331',
        customCard: '#DE541E' 
      },
    },
  },
  plugins: [],
}