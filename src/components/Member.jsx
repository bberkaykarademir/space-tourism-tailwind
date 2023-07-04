import React from "react";

const Member = () => {
  return (
    <div className=" lg:p-0 p-10 h-3/4  flex flex-col md:flex-row  justify-between items-center">
      <div className="relative h-full flex flex-col  items-center">
        <div className="max-w-[35rem] mb-8 md:mb-36 text-center md:text-left">
          <span className="uppercase lg:text-2xl font-barlow opacity-60 ">
            COMMANDER
          </span>
          <h3 className="font-makasar  text-white text-5xl my-6 uppercase">
            Douglas Gerald
          </h3>
          <p className="tracking-wide leading-7 mt-12 font-open w-3/4  text-center md:text-left mx-auto md:mx-0 text-[#D0D6F9]">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className="md:absolute mb-6 md:mb-0 bottom-6 left-0 flex gap-4">
          <div className="w-2 h-2 md:w-6 md:h-6 bg-white  border-none  rounded-full"></div>
          <div className="w-2 h-2 md:w-6 md:h-6 border bg-[#35363E] border-none rounded-full"></div>
          <div className="w-2 h-2 md:w-6 md:h-6 border bg-[#35363E] border-none rounded-full"></div>
          <div className="w-2 h-2 md:w-6 md:h-6 border bg-[#35363E] border-none rounded-full"></div>
        </div>
      </div>
      <div className="h-full">
        <img
          src="/assets/crew/image-douglas-hurley.png"
          alt="member"
          className=" h-44 md:h-full "
        />
      </div>
    </div>
  );
};

export default Member;
