/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        outfitCustom: ["Outfit", "sans-serif"],
      },
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyanCustom: "hsl(178, 100%, 50%)",
        blueCustom: "hsl(217, 54%, 11%)",
        darkBlueCustom: "hsl(216, 50%, 16%)",
        veryDarkBlueCustom: "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
