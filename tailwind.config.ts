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
        green: "#283618",
        lightGreen: "#666E38",
      },
      fontFamily: {
        kaisei: ["var(--font-kaisei)"],
        cormorant: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
export default config;
