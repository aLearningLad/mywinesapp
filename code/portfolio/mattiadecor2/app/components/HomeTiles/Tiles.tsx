import { TileSection, TilesHeading } from "..";

const Tiles = () => {
  return (
    <section className=" w-full h-[100vh] flex flex-col py-8 px-20">
      <div className=" h-fit w-full flex justify-center text-center flex-col pt-3 pb-8">
        <TilesHeading />
        <p className=" text-neutral-600 text-lg w-full justify-center h-fit text-center">
          Bespoke design palettes & suggestions, just for you
        </p>
      </div>
      <div className=" h-full w-full">
        <TileSection />
      </div>
    </section>
  );
};

export default Tiles;
