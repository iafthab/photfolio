import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Cormorant_Unicase, Kaisei_Tokumin } from "next/font/google";

const kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-kaisei",
});
const cormorant_uni = Cormorant_Unicase({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Photfolio",
  description: "Portfolio for Photographers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-kaisei bg-white text-brown`}>
        <nav
          className={`font-cormorant flex px-10 items-start justify-between font-bold text-2xl py-6`}
        >
          <Link
            className="font-extrabold hover:text-green hover-underline"
            href={"./"}
          >
            PHOTFOLIO
          </Link>
          <span className="flex gap-6">
            <Link
              className="hover:text-green hover-underline "
              href={"./gallery"}
            >
              gallery
            </Link>
            <Link
              className="hover:text-green hover-underline "
              href={"./about"}
            >
              about
            </Link>
            <Link
              className="hover:text-green hover-underline "
              href={"./contact"}
            >
              contact
            </Link>
          </span>
        </nav>
        {/* <hr className="border-b-2 border-brown" /> */}
        {children}
      </body>
    </html>
  );
}
