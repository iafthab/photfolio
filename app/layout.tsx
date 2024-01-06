import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { kaisei, cormorant_uni } from "./lib/fonts";

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
      <body className={`${kaisei.className} bg-[#f3f4ef] text-brown`}>
        <nav
          className={`${cormorant_uni.className} flex p-2 items-start justify-between font-semibold text-lg md:text-xl xl:text-2xl lg:p-4`}
        >
          <Link
            className="font-bold hover:text-darkGreen hover-underline"
            href={"./"}
          >
            PHOTFOLIO
          </Link>
          <span className="flex gap-6">
            <Link
              className="hover:text-darkGreen hover-underline "
              href={"./gallery"}
            >
              gallery
            </Link>
            {/* <Link
              className="hover:text-darkGreen hover-underline "
              href={"./about"}
            >
              about
            </Link> */}
            <Link
              className="hover:text-darkGreen hover-underline "
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
