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
      lineHeight: {
        "extra-loose": "2.5",
      },
    },
    colors: {
      white: "#fff",
      "my-primary": "#e3dfd6",
      "my-primary-hover": "#d1c8b3",
      "my-primary-disabled": "#e9dfac63",
      border: "#b8a988",
      "border-focus": "#94825b",
    },
    backgroundImage: {
      "border-image": "url('/images/border.png')",
      "border-image2": "url('/images/border2.png')",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
