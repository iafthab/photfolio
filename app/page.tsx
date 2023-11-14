import profileImg from "@/public/img/profile.jpg";
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
      <section className="h-4/5 px-4 flex items-center text-green justify-evenly">
        <div>
          <h1 className="text-9xl text-end font-medium tracking-wide">
            AFTHAB
            <br /> IQBAL
          </h1>
          <p className="text-end text-lg">Rarely based photographer</p>
        </div>
        <Image
          // className="border-[10px] border-brown"
          src={profileImg}
          alt="baby holding boy's hand at the beach"
          height={550}
          width={440}
          placeholder="blur"
        />
      </section>
      <section className="h-2/5 px-20 gap-10 bg-lightOrange/80 text-green justify-center flex items-center">
        <Image
          // className="border-[10px] border-brown"
          src={secondaryImg}
          alt="picture of a small boat"
          height={400}
          width={300}
          placeholder="blur"
        />
        <p className="text-3xl font-light text-balance">
          Every Picture contains a story. How that frame came to be. The moment
          of the snap. What transpired before and after.
          {/* I am not saying this because iam a sh!tty photographer, But more than
          lighting or composition, a picture should capture the spirit of the
          moment. While looking at these pictures, i feel like i am back at that
        particular moment- reliving it. */}
        </p>
      </section>
      <section className="my-32 grid grid-cols-4 overflow-hidden">
        <Image
          src={grid3}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid2}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid4}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid1}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid6}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid5}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid8}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
        <Image
          src={grid7}
          alt="two kids watching sunset"
          // height={400}
          // width={225}
          placeholder="blur"
        />
      </section>
      <Footer />
    </main>
  );
}
