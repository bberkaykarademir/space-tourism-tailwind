import React from "react";
import Header from "../components/Header";
import Destination from "../components/Destination";

const Destinations = () => {
  return (
    <div className=" overflow-hidden bg-[url(/public/assets/destination/background-destination-tablet.jpg/)] md:bg-[url(/public/assets/destination/background-destination-desktop.jpg/)] bg-cover bg-no-repeat bg-center h-screen sm:h-screen w-full text-white  lg:p-14">
      <Header />
      <main className="h-[calc(100%-3.5rem)]  w-full flex justify-center items-center  ">
        <div className="w-full h-full lg:w-5/6 lg:h-4/5 flex flex-col">
          <h2 className="uppercase mx-auto w-full text-center text-base sm:text-2xl h-20 items-end flex opacity-80 tracking-widest">
            <span className="text-[#4D515B] mr-6 ">01</span> pick your
            destination
          </h2>
          <Destination />
        </div>
      </main>
    </div>
  );
};

export default Destinations;
