const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],

  theme: {
    colors: {
      primary: {
        DEFAULT: "#E25141",
        content: "#ffffff",
      },
      secondary: {
        DEFAULT: "#E3CDBA",
        content: "#ffffff",
      },
      tertiary: {
        DEFAULT: "#37bce5",
        content: "#ffffff",
      },
      base: {
        100: "#ffffff",
        200: "#f2f4f0",
        300: "#d9dbd7",
        content: "",
      },
    },
    extend: {
      fontFamily: {
        base: ["Poppins", "sans-serif"],
        accent: ["Playwrite", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/pictures/Wohnzimmer/Sofa_Fenster.jpg')",
      },
      aspectRatio: {
        "16/9": "16/9",
        "9/16": "9/16",
        "4/3": "4/3",
        "3/4": "3/4",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
