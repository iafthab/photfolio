import { Cormorant_Unicase, Kaisei_Tokumin } from "next/font/google";

export const kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  fallback: ["sans-serif"],
  // variable: "--font-kaisei",
});
export const cormorant_uni = Cormorant_Unicase({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  fallback: ["serif"],
  // variable: "--font-cormorant",
});
