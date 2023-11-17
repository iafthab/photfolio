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
        brown: "#7D4A1D",
        lightOrange: "#DDA15E",
        creme: "#FEFAE0",
        darkGreen: "#283618",
        lightGreen: "#666E38",
        darkBlue: "#192F37",
      },
      // fontFamily: {
      //   kaisei: ["var(--font-kaisei)", "serif"],
      //   cormorant: ["var(--font-cormorant)", "serif"],
      // },
    },
  },
  plugins: [],
};
export default config;
