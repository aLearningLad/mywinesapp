import { CareForm, Navbar } from "../components";

const CarePage = () => {
  return (
    <section className=" w-full h-screen flex flex-col bg-cyan-800">
      <Navbar />
      <div className=" w-full h-full px-2 py-1 lg:px-20 lg:py-12">
        <CareForm />
      </div>
    </section>
  );
};

export default CarePage;
