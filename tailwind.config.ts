import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#633914",
        lightOrange: "#DDA15E",
        creme: "#FEFAE0",
        darkGreen: "#283618",
        lightGreen: "#666E38",
        darkBlue: "#192F37",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
