import { Metadata } from "next";
import Footer from "../components/Footer";
import { cormorant_uni } from "../lib/fonts";
import profileImg from "@/public/img/profile.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Photfolio",
  description: "Contact Page of Photfolio",
};

const Contact = () => {
  return (
    <main>
      {/* <h1 className={`${cormorant_uni.className} px-4 text-9xl text-darkGreen`}>
        CONTACT
      </h1> */}
      <section className="flex flex-col w-full justify-between px-6 xl:px-20 gap-10 my-4 lg:my-10">
        <section className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-3">
          <Image
            className="w-4/5 md:w-1/2 lg:h-fit lg:my-auto mx-auto animate-fadeIn shadow shadow-brown"
            src={profileImg}
            alt="photo of me ;)"
            height={450}
            width={360}
            placeholder="blur"
            property={"true"}
          />
          <div>
            <h2 className="text-3xl md:text-5xl xl:text-7xl mb-2 tracking-wide lg:tracking-wider text-darkGreen font-semibold">
              AFTHAB IQBAL
            </h2>
            <p className="text-[14px] lg:text-base">
              Ever since i was a child, Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Maxime ipsa distinctio culpa aliquam, sunt
              voluptates vel dolorum necessitatibus veniam at quos nulla neque
              delectus earum enim.
            </p>
            <div className="w-2/3 mx-auto my-2 lg:my-4">
              <q className="text-[15px] font-medium md:text-lg xl:text-xl text-balance">
                My Motto is to capture everlasting memories, So that even your
                most miserable moment will last an Eternity
              </q>
            </div>
            <p className="text-[14px] lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa distinctio culpa aliquam, sunt voluptates vel dolorum
              necessitatibus veniam at quos nulla neque delectus earum enim.
            </p>
            <div className="w-2/3 mx-auto my-2 lg:my-4">
              <q className="text-[15px] font-medium md:text-lg xl:text-xl text-balance">
                At your highest moment, my pictures will remind you-THIS TOO
                SHALL PASS
              </q>
            </div>
            <p className="text-[14px] lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              iusto excepturi adipisci officiis et reprehenderit tenetur
              provident nulla dolores veritatis? Cupiditate ex tempore
              perferendis porro!
            </p>
            <div className="w-2/3 mx-auto my-2 lg:my-4">
              <q className="text-[15px] font-medium md:text-lg xl:text-xl text-balance">
                You know what is worse than a bad picture of a good memory, a
                good picture of a bad memory
              </q>
            </div>
            <p className="text-[14px] lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              iusto excepturi adipisci officiis et reprehenderit tenetur
              provident!
            </p>
          </div>
        </section>
        <section className="p-6 w-full mx-auto bg-lightOrange/50 shadow-md shadow-brown">
          <h2 className="text-2xl lg:text-4xl text-darkGreen font-semibold">
            Let&apos;s Work Together
          </h2>
          <form
            className={`${cormorant_uni.className} flex flex-col lg:flex-row gap-6 text-xl lg:text-2xl`}
          >
            <div className="flex flex-col w-full">
              <label className="mt-5 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="bg-inherit border-b-[1.5px] w-full border-r-[1.5px] h-8 outline-none  border-lightGreen"
                id="name"
                name="name"
                type="text"
              />
              <label className="mt-5 mb-2" htmlFor="e-mail">
                E-Mail
              </label>
              <input
                className="bg-inherit border-b-[1.5px] w-full border-r-[1.5px] h-8 outline-none  border-lightGreen"
                id="e-mail"
                name="e-mail"
                type="email"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mt-5 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="bg-inherit border-b-[1.5px] w-full border-r-[1.5px] h-8 outline-none  border-lightGreen"
                id="phone"
                name="phone"
                type="number"
              />
              <label className="mt-5 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="bg-inherit border-b-[1.5px] w-full border-r-[1.5px] h-8 outline-none  border-lightGreen"
                id="subject"
                name="subject"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mt-5 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                rows={4}
                className="bg-inherit border-b-[1.5px] resize-none outline-none border-r-[1.5px]  border-lightGreen"
              />
              <button
                className="bg-brown hover:bg-darkGreen text-creme my-5 p-2 border-[1.5px] border-darkGreen hover:border-brown"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
      <Footer image="bg-black" />
    </main>
  );
};
export default Contact;
