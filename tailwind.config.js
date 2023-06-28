/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "kbd-font":"Courier, monospace"
      },
      backgroundColor:{
        "blur-background":"rgba(128, 128, 128,0.6)"
      }
    },
  },
  plugins: [],
};
