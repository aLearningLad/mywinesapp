import { AboutTile, Navbar, OptionTiles } from "../components";
import { aboutData } from "../myData/aboutData";

const AboutApp = () => {
  return (
    <section className=" flex bg-cyan-800 flex-col items-center justify-center h-fit lg:h-screen w-full">
      <Navbar />
      <div className=" w-full gap-6 lg:gap-0 lg:w-9/12 h-fit xl:h-[70vh] flex-col xl:flex-wrap flex justify-center items-center">
        {aboutData.map((card) => (
          <AboutTile
            key={card.title}
            cat={card.cat}
            img={card.img}
            title={card.title}
            desc={card.desc}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutApp;
