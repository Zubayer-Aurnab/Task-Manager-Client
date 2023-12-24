/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary1: "#d5bdaf",
        primary2: "#e3d5ca",
        primary3: "#f5ebe0",
      }
    },
  },
  plugins: [require("daisyui")],
}

