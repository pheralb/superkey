/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        gtw: ["Gt-Walsheim", "sans-serif"],
      },
      fontSize: {
        mini: "15px",
      },
      colors: {
        darkNight: "#121212",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            pre: null,
            code: null,
            "code::before": null,
            "code::after": null,
            "pre code::before": null,
            "pre code::after": null,
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
