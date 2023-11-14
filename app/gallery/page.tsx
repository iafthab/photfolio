import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Photfolio",
  description: "Gallery Page of Photfolio",
};

const Gallery = () => {
  return (
    <main>
      <h1 className="font-cormorant text-9xl p-6 text-green">Gallery</h1>
      <section>
        <h2>Somewhere near the Arabian Sea</h2>
      </section>
      <section>
        <h2>Greenish Lavish blah blah...</h2>
      </section>
      <section>
        <h2>Random Stuff</h2>
      </section>
    </main>
  );
};

export default Gallery;
