/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Roman", "sans-serif"],
        mono: ["Cascadia", "monospace"],
      },
      colors: {
        backgroundDark: "#121212",
        backgroundLight: "#FFFEFC",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
