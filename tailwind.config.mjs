/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/routes/**/*.{html,js}", "./src/components/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans Variable"', "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
      colors: {
        mainColor: "hsl(var(--main-color))",
        ulbiOrange: "hsl(var(--ulbi-orange))",
        ulbiDarkOrange: "hsl(var(--ulbi-darkorange))",
        ulbiDarkBlue: "hsl(var(--ulbi-darkblue))",
        ulbiBlue: "hsl(var(--ulbi-blue))",
        ulbiBlack: "hsl(var(--ulbi-black))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
