"use client";

import { useState } from "react";
import { Modal1, Modal2 } from "..";

const GratitudeModals = () => {
  const [phase1Done, setPhaseOneDone] = useState(false);

  return (
    <section className=" bg-opacity-70 lg:px-28 py-20 flex justify-center items-center h-screen w-full absolute top-0 bottom-0 left-0 right-0 bg-black z-50">
      {phase1Done ? <Modal2 /> : <Modal1 setPhaseOneDone={setPhaseOneDone} />}
    </section>
  );
};

export default GratitudeModals;
