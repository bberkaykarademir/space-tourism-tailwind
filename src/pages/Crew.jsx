import React from "react";
import Header from "../components/Header";
import Member from "../components/Member";

const Crew = () => {
  return (
    <div className=" bg-[url(/public/assets/crew/background-crew-tablet.jpg/)] md:overflow-hidden md:bg-[url(/public/assets/crew/background-crew-desktop.jpg/)] bg-cover bg-no-repeat bg-center min-h-screen w-full text-white  lg:p-14">
      <Header />
      <main className="h-[calc(100%-3.5rem)] flex justify-center   ">
        <div className="w-full h-full lg:w-5/6 flex flex-col justify-between">
          <h2 className="uppercase md:text-2xl justify-center md:justify-normal h-20 items-end flex opacity-80 tracking-widest">
            <span className="text-[#4D515B] mr-6 ">02</span> meet your crew
          </h2>
          <Member />
        </div>
      </main>
    </div>
  );
};

export default Crew;
