import React from "react";

const Destination = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="md:basis-1/2 mt-8 md:mt-0 flex justify-center items-center lg:items-end max-h-full ">
        <img src="/public/assets/destination/image-mars.png" alt="planet" className="w-60 h-60 md:w-auto md:h-auto" />
      </div>
      <div className="p-4  flex  basis-1/2">
        <div className="w-full lg:h-5/6 my-auto  flex flex-col justify-between">
          <div>
            <ul className="flex uppercase text-[#D0D6F9]">
              <li>
                <a href="#" className="tracking-widest text-sm  pb-4">
                  Moon
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className="text-white tracking-widest text-sm border-b-4 border-white pb-4"
                >
                  Mars
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className="tracking-widest text-sm  pb-4"
                >
                  Europa
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className="tracking-widest text-sm  pb-4"
                >
                  TITAN
                </a>
              </li>
            </ul>
          </div>

          <h3 className="font-makasar text-white text-4xl sm:text-8xl mt-8">MARS</h3>
          <p className="max-w-lg text-[#D0D6F9] leading-7">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div className="flex mt-5 sm:mt-0 -mb-6">
            <div className="flex flex-col basis-1/2">
              <h4 className="text-[#D0D6F9] text-sm">AVG. DISTANCE</h4>
              <span className="text-base sm:text-2xl">225 MIL. KM</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <h4 className="text-[#D0D6F9] text-sm">EST. TRAVEL TIME</h4>
              <span className="text-base sm:text-2xl">9 MONTHS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
