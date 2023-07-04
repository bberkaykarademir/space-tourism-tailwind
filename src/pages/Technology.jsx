import React from "react";
import Header from "../components/Header";
import Tech from "../components/Tech";

const Technology = () => {
  return (
    <div className="md:flex md:flex-col bg-[url(/public/assets/technology/background-technology-tablet.jpg/)] md:bg-[url(/public/assets/technology/background-technology-desktop.jpg/)] bg-cover bg-no-repeat bg-center h-full min-h-screen w-full text-white  lg:p-14">
      <Header />
      <main className="h-[calc(100%-3.5rem)] md:my-auto flex justify-end ">
        <div className="w-full h-full xl:w-[90%]  lg:h-[90%] flex flex-col justify-between">
          <h2 className="uppercase md:text-2xl justify-center lg:justify-normal h-20 items-end flex opacity-80 tracking-widest">
            <span className="text-[#4D515B] mr-6 ">03</span> space launch
          </h2>
          <Tech />
        </div>
      </main>
    </div>
  );
};

export default Technology;
