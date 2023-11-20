import { Navbar, OptionTiles } from "../components";
import { optionTileInfo } from "../myData/optionTileInfo";

const Services = () => {
  return (
    <section className=" flex bg-cyan-800 flex-col items-center justify-center h-fit lg:h-screen w-full">
      <Navbar />
      <div className=" w-9/12 h-fit xl:h-[70vh] flex-col xl:flex-wrap flex justify-center items-center">
        {optionTileInfo.map((card) => (
          <OptionTiles
            key={card.title}
            img={card.img}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
