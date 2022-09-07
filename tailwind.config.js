/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jost", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        dark: "#0E1012",
        light: "#A0AABA",
        primary: "#44AF69",
      },
      backgroundImage: {
        vannes: "url('../assets/vannes.png')",
        lim: "url('../assets/lim.png')",
        kelvin: "url('../assets/kelvin.png')",
        jodi: "url('../assets/jodi.png')",
        utap: "url('../assets/utap.png')",
        un: "url('../assets/un.png')",
        peve: "url('../assets/peve.png')",
        vabel: "url('../assets/vabel.png')",
        michelle: "url('../assets/michelle.png')",
        stefan: "url('../assets/stefan.png')",
        jason: "url('../assets/jason.jpeg')",
        madison: "url('../assets/madison.jpeg')",
        shannon: "url('../assets/shannon.jpeg')",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover", "group-hover", "even", "odd"],
      height: ["hover", "group-hover"],
      width: ["hover", "group-hover"],
      margin: ["hover", "group-hover"],
      borderWidth: ["hover", "group-hover"],
      fontWeight: ["hover", "group-hover"],
      transform: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
      translate: ["hover", "group-hover"],
      inset: ["hover", "group-hover"],
      space: ["hover", "group-hover"],
      transitionDelay: ["hover", "group-hover"],
      backgroundColor: ["even", "odd", "active"],
      flexDirection: ["even", "odd"],
      textColor: ["even", "odd"],
      backgroundImage: ["first", "last", "even", "odd"],
      gradientColorStops: ["first", "last", "even", "odd"],
    },
  },
  plugins: [],
};
