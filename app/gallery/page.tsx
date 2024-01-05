import { Metadata } from "next";
import Image from "next/image";
import sea1 from "@/public/img/33.jpg";
import sea2 from "@/public/img/6.jpg";
import sea3 from "@/public/img/21.jpg";
import sea4 from "@/public/img/17.jpg";
import sea5 from "@/public/img/9.jpg";
import sea6 from "@/public/img/2.jpg";
import sea7 from "@/public/img/11.jpg";
import sea8 from "@/public/img/8.jpg";
import sea9 from "@/public/img/16.jpg";
import sea10 from "@/public/img/18.jpg";
import sea11 from "@/public/img/22.jpg";
import sea12 from "@/public/img/27.jpg";
import sea13 from "@/public/img/30.jpg";
import sea14 from "@/public/img/23.jpg";
import sea15 from "@/public/img/25.jpg";
import random1 from "@/public/img/1.jpg";
import random2 from "@/public/img/3.jpg";
import random3 from "@/public/img/5.jpg";
import random4 from "@/public/img/10.jpg";
import random6 from "@/public/img/15.jpg";
import random7 from "@/public/img/24.jpg";
import random8 from "@/public/img/28.jpg";
import random9 from "@/public/img/32.jpg";
import random10 from "@/public/img/4.jpg";
import green1 from "@/public/img/7.jpg";
import green2 from "@/public/img/13.jpg";
import green3 from "@/public/img/19.jpg";
import green4 from "@/public/img/14.jpg";
import green5 from "@/public/img/26.jpg";
import green6 from "@/public/img/29.jpg";
import green7 from "@/public/img/31.jpg";
import green8 from "@/public/img/12.jpg";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Photfolio",
  description: "Gallery Page of Photfolio",
};

const Gallery = () => {
  return (
    <main>
      {/* <h1 className={`${cormorant_uni.className} px-4 text-9xl text-darkGreen`}>
        GALLERY
      </h1> */}
      <section className="m-3 columns-3 lg:columns-4 gap-3 ">
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue mb-3 h-auto"
          src={sea12}
          alt="a kid holding a boy's hand at beach"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea4}
          alt="beach at dusk"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea11}
          alt=" small boats following a ship at night"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea5}
          alt="two kids watching sunset at beach"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea6}
          alt="picture of a kid and boats"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea7}
          alt="sunset at river"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea8}
          alt="picture of a 'SMALL' boat "
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea9}
          alt="picture of small boats following a ship"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea10}
          alt="a kid holding a boy facing the sea"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea3}
          alt="sunset at sea"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea13}
          alt="moment of sunset"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea2}
          alt="moment of sunset"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea14}
          alt="moment of sunset"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea15}
          alt="moment of sunset"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green4}
          alt="tea plantation"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green6}
          alt="mountains"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green5}
          alt="path through the fields"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green3}
          alt="a house covered in fog"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green7}
          alt="picture of a hills"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green8}
          alt="picture of a hills"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green2}
          alt="picture of tea plantation covered in fog"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random8}
          alt="picture of a streetlights at night"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={green1}
          alt="coconut trees covering the sky"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random1}
          alt="picture of clock tower"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random3}
          alt="a small vendor at beach"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random4}
          alt="architecture of a masjid"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random6}
          alt="dusk through the windows"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random7}
          alt="traditional kerala house"
        />

        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random9}
          alt="a man walking on a hill"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random10}
          alt="a man walking on a hill"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue h-auto my-3"
          src={random2}
          alt="picture of a wall"
        />
        <Image
          loading="lazy"
          placeholder="blur"
          className="w-full shadow shadow-darkBlue my-3 h-auto"
          src={sea1}
          alt="picture of a boat"
        />
      </section>
      <Footer image="bg-darkBlue" />
    </main>
  );
};

export default Gallery;
