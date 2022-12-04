/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Roman", "sans-serif"],
        mono: ["Cascadia", "monospace"],
      },
      colors: {
        customDark: "#131314",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
