/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "el-messiri": ["El Messiri", "sans-serif"],
        quicksand: ["Quicksand", "serif"],
      },
      colors: {
        primary: "#373225",
        secondary: "#e6d199",
      },
    },
  },
  plugins: [],
};
