/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1946b8",

        secondary: "#f69904",

        bg: "#ffffff",

        accent: "#cc4100",

        footer: "#0a185c",

        title: "#09144f",

        text: "#212121",

        text_gray: "#707070",

        menu_bg_banner: "#ecf1fe",

        bg_banner_2: "#f7f7f7",

        bg_banner_3: "#e3eafc",
      },
      backgroundImage: {
        "recommend-bg": "url('./src/assets/recommend_bg.png')",
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
