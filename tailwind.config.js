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
