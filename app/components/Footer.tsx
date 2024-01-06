import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerImgGreen from "@/public/img/footerGreen.jpg";
import footerImgBlue from "@/public/img/footerBlue.jpg";
import footerImgBlack from "@/public/img/footerBlack.jpg";
import { cormorant_uni } from "../lib/fonts";

const Footer = ({
  image,
}: {
  image: "bg-darkBlue" | "bg-lightGreen" | "bg-black";
}) => {
  return (
    <footer
      className={`p-2 lg:p-5 gap-2 lg:gap-5 ${image} text-creme justify-center shadow shadow-darkBlue flex items-center`}
    >
      <Image
        src={
          image === "bg-darkBlue"
            ? footerImgBlue
            : image === "bg-lightGreen"
            ? footerImgGreen
            : footerImgBlack
        }
        alt="picture of a boat in a river"
        height={380}
        width={1023}
        placeholder="blur"
        className="w-3/4 lg:w-4/5"
      />
      <nav
        className={`${cormorant_uni.className} flex flex-col font-bold text-base md:text-xl lg:text-2xl py-6`}
      >
        <Link className={`hover-underline w-min`} href={"./"}>
          home
        </Link>
        <Link className="hover-underline w-min" href={"./gallery"}>
          gallery
        </Link>
        <Link className="hover-underline w-min" href={"./contact"}>
          contact
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
