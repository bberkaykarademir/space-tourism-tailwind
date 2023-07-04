import React, { useState } from "react";
import { data } from "../data";

const Member = () => {
  const [memberId, setMemberId] = useState(0);
  const { name, images, role, bio } = data.crew[memberId];
  return (
    <div className=" lg:p-0 p-10 h-3/4  flex flex-col md:flex-row  justify-between items-center">
      <div className="relative h-full flex flex-col  items-center justify-center">
        <div className="max-w-[35rem] mb-8 md:mb-36 text-center md:text-left">
          <span className="uppercase lg:text-2xl font-barlow opacity-60 ">
            {role}
          </span>
          <h3 className="font-makasar  text-white text-3xl md:text-5xl my-6 uppercase">
            {name}
          </h3>
          <p className="tracking-wide leading-7 mt-12 font-open w-3/4  text-center md:text-left mx-auto md:mx-0 text-[#D0D6F9]">
            {bio}
          </p>
        </div>
        <div className="md:absolute mb-6 md:mb-0 bottom-6 left-0 flex gap-4">
          <div
            className={`w-2 h-2 md:w-6 md:h-6  border-none  rounded-full ${
              memberId === 0 ? "bg-white" : "bg-[#35363E]"
            } `}
            onClick={() => setMemberId(0)}
          ></div>
          <div
            className={`w-2 h-2 md:w-6 md:h-6 border border-none rounded-full ${
              memberId === 1 ? "bg-white" : "bg-[#35363E]"
            } `}
            onClick={() => setMemberId(1)}
          ></div>
          <div
            className={`w-2 h-2 md:w-6 md:h-6 border border-none rounded-full ${
              memberId === 2 ? "bg-white" : "bg-[#35363E]"
            } `}
            onClick={() => setMemberId(2)}
          ></div>
          <div
            className={`w-2 h-2 md:w-6 md:h-6 border border-none rounded-full ${
              memberId === 3 ? "bg-white" : "bg-[#35363E]"
            } `}
            onClick={() => setMemberId(3)}
          ></div>
        </div>
      </div>
      <div className="h-full">
        <img src={images.png} alt="member" className=" h-44 md:h-full " />
      </div>
    </div>
  );
};

export default Member;
