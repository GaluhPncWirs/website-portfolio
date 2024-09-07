/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7D474",
      },
    },
    fontFamily: {
      quickSand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
