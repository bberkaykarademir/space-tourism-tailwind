import React, { useState } from "react";
import { data } from "../data";

const Tech = () => {
  const [technologyId, setTechnologyId] = useState(0);
  const { name, images, description } = data.technology[technologyId];
  return (
    <div className=" h-full flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col lg:flex-row  items-center text-center lg:text-left  ">
        <div className="flex lg:m-16 gap-4 lg:flex-col ">
          <div
            className={`my-6  rounded-full flex justify-center items-center text-4xl w-12 h-12 xl:w-20 xl:h-20 border border-white ${
              technologyId === 0 ? "bg-white text-black" : ""
            } `}
            onClick={() => setTechnologyId(0)}
          >
            1
          </div>
          <div
            className={`my-6 rounded-full flex justify-center items-center text-4xl w-12 h-12  xl:w-20 xl:h-20 border border-white ${
              technologyId === 1 ? "bg-white text-black" : ""
            } `}
            onClick={() => setTechnologyId(1)}
          >
            2
          </div>
          <div
            className={`my-6 rounded-full flex justify-center items-center text-4xl w-12 h-12 xl:w-20 xl:h-20 border border-white ${
              technologyId === 2 ? "bg-white text-black" : ""
            } `}
            onClick={() => setTechnologyId(2)}
          >
            3
          </div>
        </div>
        <div className=" max-w-[30rem]  text-[#D0D6F9] tracking-widest ">
          <span className="uppercase  font-barlow ">THE TERMINOLOGY...</span>
          <h3 className="font-makasar uppercase text-white text-3xl xl:text-5xl my-6 xl:mb-12">
            {name}
          </h3>
          <p className="tracking-wide font-open">{description}</p>
        </div>
      </div>
      <div className="h-64 mt-12 lg:mt-0 lg:h-full">
        <img src={images.portrait} alt="rocket" className="h-full" />
      </div>
    </div>
  );
};

export default Tech;
