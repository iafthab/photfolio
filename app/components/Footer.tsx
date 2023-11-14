import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerImg from "@/public/img/25.1.jpg";

const Footer = () => {
  return (
    <footer className="p-20 gap-10 bg-lightGreen/90 text-creme justify-center flex items-center">
      <Image
        src={footerImg}
        alt="two kids watching sunset"
        height={380}
        width={1023}
        placeholder="blur"
      />
      <nav
        className={`font-cormorant flex flex-col px-10 items-start justify-between font-bold text-2xl py-6`}
      >
        <Link className={`hover-underline `} href={"./"}>
          home
        </Link>
        <Link className="hover-underline " href={"./gallery"}>
          gallery
        </Link>
        <Link className="hover-underline " href={"./about"}>
          about
        </Link>
        <Link className="hover-underline " href={"./contact"}>
          contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
