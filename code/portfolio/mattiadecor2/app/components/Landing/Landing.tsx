import { LandingBlurb, LandingSearch, LandingText, MobileContact } from "..";

const Landing = () => {
  return (
    <section className=" h-fit lg:h-[85vh] w-full flex flex-col pt-9 items-center">
      <div className=" w-full lg:w-9/12 h-full flex flex-col">
        <LandingText />
        <LandingBlurb />
        <div className=" w-full h-[25vh] flex items-center justify-center mt-8">
          <LandingSearch />
        </div>
        <MobileContact />
      </div>
      <div className=" topEnding lg:flex hidden h-[25vh] w-full"></div>
    </section>
  );
};

export default Landing;
