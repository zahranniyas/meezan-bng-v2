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
        primaryGreen: "#194228",
        secondaryGreen: "#edfac8",
        primaryRed: "#421926",
        secondaryRed: "#fac8d7",
        thirdRed: "#b64766",
        primaryBlue: "#11243b",
        secondaryBlue: "#c3e3fa",
      },
    },
  },
  plugins: [],
};
