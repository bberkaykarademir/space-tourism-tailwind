import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="md:flex md:flex-col bg-[url(/public/assets/home/background-home-tablet.jpg/)] md:bg-[url(/public/assets/home/background-home-desktop.jpg/)] bg-cover bg-no-repeat bg-center  min-h-screen w-full text-white lg:py-14">
      <Header />
      <main className="h-full my-auto flex flex-col ">
        <div className="w-full max-h-full sm:w-3/4 lg:h-4/6 my-auto lg:my-0 mx-auto text-center lg:text-start flex flex-col items-center lg:flex-row lg:items-end justify-between">
          <div className=" max-w-[26rem] max-h-full  text-[#D0D6F9] tracking-widest mt-10">
            <span className="uppercase md:text-2xl font-barlow ">
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className="font-makasar text-white text-4xl md:text-9xl my-6 lg:my-12">
              SPACE
            </h1>
            <p className="tracking-wide font-open md:text-2xl lg:text-lg">
              Let's face it: if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relaxe because we'll give you a truly out
              of this world experience.
            </p>
          </div>
          <button className="bg-white z-0  relative after:content-[''] after:bg-white after:opacity-25 after:rounded-full after:block after:absolute hover:after:w-48 lg:hover:after:w-72 hover:after:h-48 lg:hover:after:h-72 after:inset-y-1/2 after:-translate-y-1/2 after:inset-x-1/2 after:-translate-x-1/2   font-makasar text-black text-opacity-80 text-3xl w-36 lg:w-64 h-36 lg:h-64 rounded-full mt-4">
            EXPLORE
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
