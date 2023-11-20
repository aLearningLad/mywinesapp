import { myWallpaper } from "@/public/assets";
import { Care, Footer, Landing, Navbar, Services, Tiles } from "./components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <section className=" h-screen w-full relative">
        <div className=" absolute top-0 left-0 right-0 bottom-0 z-[-1]">
          <Image
            src={myWallpaper}
            fill
            alt="homeimg"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>

        <Navbar />
        <Landing />
      </section>
      <Services />
      <Tiles />
      <Care />
      <Footer />
    </main>
  );
}
