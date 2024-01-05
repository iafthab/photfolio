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
      className={`p-5 gap-5 ${image} text-creme justify-center shadow shadow-darkBlue flex items-center`}
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
      />
      <nav
        className={`${cormorant_uni.className} flex flex-col font-bold text-2xl py-6`}
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
