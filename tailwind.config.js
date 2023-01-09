/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
        // sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        bgPrimary: {
          light: "#F1F1F1",
          // dark: "#373B40",
          dark: "#31313A",
        },
        bgSecondary: {
          // light: "#e0e0e082",
          // light: "#e0e0e0d6",
          // light: "#cdccccdd",
          // light: "#c0bebefe",
          // light: "#c0bebedf",
          light: "rgba(192, 190, 190, 0.96)",
          dark: "#3d4045f4",
        },
        textPrimary: {
          light: colors.black,
          // white
          dark: colors.white,
        },
        textSecondary: {
          light: colors.red[700],
          dark: "#68e0cf",
        },
        greenishAqua: "#68e0cf",
      },
    },
  },
  plugins: [],
};
