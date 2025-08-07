/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        primary: '#FF2DD1',     
        yellowe: '#FDFFB8',      
        green: '#4DFFBE',        
        blue: '#63C8FF'    
      },
    },
  },

  plugins: [],
}