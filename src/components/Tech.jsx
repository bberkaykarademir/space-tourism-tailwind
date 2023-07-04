import React from "react";

const Tech = () => {
  return (
    <div className=" h-full flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col lg:flex-row  items-center text-center lg:text-left  ">
        <div className="flex lg:m-16 gap-4 lg:flex-col ">
          <div className="my-6 bg-white text-black rounded-full flex justify-center items-center text-4xl w-12 h-12 xl:w-20 xl:h-20 border border-white">
            1
          </div>
          <div className="my-6 rounded-full flex justify-center items-center text-4xl w-12 h-12  xl:w-20 xl:h-20 border border-white">
            2
          </div>
          <div className="my-6 rounded-full flex justify-center items-center text-4xl w-12 h-12 xl:w-20 xl:h-20 border border-white">
            3
          </div>
        </div>
        <div className=" max-w-[30rem]  text-[#D0D6F9] tracking-widest ">
          <span className="uppercase  font-barlow ">THE TERMINOLOGY...</span>
          <h1 className="font-makasar text-white text-3xl xl:text-5xl my-6 xl:mb-12">
            LAUNCH VEHICLE
          </h1>
          <p className="tracking-wide font-open">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
      <div className="h-64 mt-12 lg:mt-0 lg:h-full">
        <img
          src="/public/assets/technology/image-launch-vehicle-portrait.jpg"
          alt="rocket"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default Tech;
