import heroImg from "@/public/img/heroImg.jpg";
import secondaryImg from "@/public/img/8.jpg";
import grid1 from "@/public/img/11.jpg";
import grid2 from "@/public/img/16.jpg";
import grid3 from "@/public/img/21.jpg";
import grid4 from "@/public/img/22.jpg";
import grid5 from "@/public/img/26.jpg";
import grid6 from "@/public/img/29.jpg";
import grid7 from "@/public/img/31.jpg";
import grid8 from "@/public/img/32.jpg";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={`h-screen`}>
      <section
        id="hero-section"
        className="h-fit xl:h-5/6 mx-4 lg:flex lg:flex-row lg:mb-36 items-center relative text-blue-50 lg:text-darkGreen justify-center gap-8"
      >
        <div className="absolute lg:static top-32 bottom-[0] right-[0] left-[0] m-auto lg:m-0 w-40 md:w-80 lg:w-fit">
          <h1 className="text-3xl md:text-6xl xl:text-8xl lg:text-end font-medium tracking-wide">
            AFTHAAB
          </h1>
          <p className="text-center lg:text-end text-[10px] md:text-[14px] lg:text-xl">
            Rarely based photographer
          </p>
        </div>
        <Image
          className="w-fit animate-fadeIn mx-auto lg:mx-0 block shadow shadow-darkBlue xl:w-[35%]"
          src={heroImg}
          alt="man facing the sea"
          height={500}
          width={400}
          placeholder="blur"
          property={"true"}
        />
      </section>
      <section className="h-2/5 px-10 lg:px-20 gap-2 my-6 md:my-16 lg:gap-10 bg-[#45B1E8]/70 text-darkGreen justify-center flex items-center">
        <Image
          className="shadow shadow-darkBlue w-1/2 sm:w-1/3 lg:w-full xl:w-1/3"
          src={secondaryImg}
          alt="picture of a small boat"
          height={400}
          width={300}
          placeholder="blur"
        />
        <p className="text-[12px] md:text-xl lg:text-2xl xl:text-3xl font-light text-balance">
          Every Picture contains a story. How that frame came to be. The moment
          of the snap. What transpired before and after.
          {/* I am not saying this because iam a sh!tty photographer,or maybe i am, But more than lighting or composition, a picture should capture the spirit of the
          moment. While looking at these pictures, i feel like i am back at that particular moment- reliving it. */}
        </p>
      </section>
      <section className="my-6 lg:my-32 columns-2 md:columns-3 lg:columns-4 gap-0 shadow shadow-darkBlue overflow-hidden">
        <Image
          src={grid3}
          alt="sunset at sea"
          height={2759}
          width={4197}
          placeholder="blur"
        />
        <Image
          src={grid6}
          alt="picture of mountains"
          height={2007}
          width={3567}
          placeholder="blur"
        />

        <Image
          src={grid2}
          alt="small boats following a ship"
          height={2209}
          width={3924}
          placeholder="blur"
        />
        <Image
          src={grid5}
          alt="path through the fields"
          height={2119}
          width={3468}
          placeholder="blur"
        />
        <Image
          src={grid4}
          alt="small boats following a ship at night"
          height={4624}
          width={2601}
          placeholder="blur"
        />
        <Image
          src={grid8}
          alt="man walking on a hill"
          height={2117}
          width={3762}
          placeholder="blur"
        />
        <Image
          src={grid1}
          alt="sunset at river"
          height={4483}
          width={3209}
          placeholder="blur"
        />

        <Image
          src={grid7}
          alt="another picture of a mountain row"
          height={2601}
          width={4624}
          placeholder="blur"
        />
      </section>
      <Footer image="bg-lightGreen" />
    </main>
  );
}
