import React, { useState } from "react";
import { data } from "../data";
const Destination = () => {
  const [destinationId, setDestinationId] = useState(0);
  const { name, images, description, distance, travel } =
    data.destinations[destinationId];
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="md:basis-1/2 mt-8 md:mt-0 flex justify-center items-center lg:items-end max-h-full ">
        <img
          src={images.png}
          alt="planet"
          className="w-60 h-60 md:w-auto md:h-auto"
        />
      </div>
      <div className="p-4  flex  basis-1/2">
        <div className="w-full lg:h-5/6 my-auto  flex flex-col justify-between">
          <div>
            <ul className="flex uppercase text-[#D0D6F9]">
              <li>
                <a
                  href="#"
                  className={`tracking-widest text-sm  pb-4 ${
                    destinationId === 0
                      ? "border-b-4 border-white text-white"
                      : ""
                  } `}
                  onClick={() => setDestinationId(0)}
                >
                  Moon
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className={` tracking-widest text-sm  pb-4 ${
                    destinationId === 1
                      ? "border-b-4 border-white text-white"
                      : ""
                  } `}
                  onClick={() => setDestinationId(1)}
                >
                  Mars
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className={` tracking-widest text-sm  pb-4 ${
                    destinationId === 2
                      ? "border-b-4 border-white text-white"
                      : ""
                  } `}
                  onClick={() => setDestinationId(2)}
                >
                  Europa
                </a>
              </li>
              <li className="ml-4 sm:ml-12">
                <a
                  href="#"
                  className={` tracking-widest text-sm  pb-4 ${
                    destinationId === 3
                      ? "border-b-4 border-white text-white"
                      : ""
                  } `}
                  onClick={() => setDestinationId(3)}
                >
                  TITAN
                </a>
              </li>
            </ul>
          </div>

          <h3 className="font-makasar text-white text-4xl sm:text-8xl mt-8 uppercase">
            {name}
          </h3>
          <p className="max-w-lg text-[#D0D6F9] leading-7">{description}</p>
          <div className="flex ">
            <div className="flex flex-col basis-1/2">
              <h4 className="text-[#D0D6F9] text-sm">AVG. DISTANCE</h4>
              <span className="text-base sm:text-2xl">225 MIL. KM</span>
            </div>
            <div className="flex flex-col basis-1/2">
              <h4 className="text-[#D0D6F9] text-sm uppercase">{distance}</h4>
              <span className="text-base sm:text-2xl uppercase">{travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
