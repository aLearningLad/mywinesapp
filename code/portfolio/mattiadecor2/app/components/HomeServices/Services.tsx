import { ServiceRight, ServicesLeft, TopTabs } from "..";

const Services = () => {
  return (
    <section className=" h-fit lg:h-[125vh] pt-20 gap-8 w-full flex flex-col px-20 items-center servicesBg">
      <TopTabs />
      <div className="h-[80%] w-full hidden lg:flex justify-center">
        <ServicesLeft />
        <ServiceRight />
      </div>
    </section>
  );
};

export default Services;
