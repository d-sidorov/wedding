/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agonia: "Agonia",
        playfair: "Playfair",
        trajan: "Trajan",
      },
    },
    colors: {
      white: "#fff",
      primary: "#e3dfd6",
      "primary-hover": "#d1c8b3",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
