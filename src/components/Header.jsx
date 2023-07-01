import React from "react";

const Header = () => {
  return (
    <header className="w-full h-28   flex justify-between items-center font-barlow">
      <div className="ml-8 sm:ml-0 lg:ml-4 text-center sm:basis-0 md:basis-1/12 md:flex-shrink-0">
        <img src="/public/assets/shared/logo.svg" className="mx-auto" />
      </div>
      <div className=" md:basis-2/12 md:-mr-12  lg:-mr-28 lg:basis-3/12 z-20  h-[1px] opacity-50 bg-white"></div>
      <div className="sm:hidden cursor-pointer p-2 z-20">
        <div className="mr-8 h-1 w-8 relative bg-white before:content-[''] before:h-1 before:absolute before:bottom-2 before:w-8 before:bg-white after:content-[''] after:h-1 after:absolute after:top-2 after:w-8 after:bg-white"></div>
      </div>
      <nav className="absolute z-10 top-0 right-0 w-[80%] min-h-[100%] sm:relative bg-gray-500 bg-opacity-50 backdrop-blur-xl sm:bg-opacity-100 sm:backdrop-blur-none  sm:visible sm:pl-6 md:pl-10 lg:pl-48 sm:pr-6 sm:w-full md:basis-8/12 sm:h-full sm:flex sm:items-center sm:bg-gradient-to-r from-[#131522] via-[#55637d] to-[#112a50]">
        <ul className="mt-48 ml-20 sm:mt-0 sm:flex uppercase sm:mx-auto">
          <li className="mb-6 sm:mb-0">
            <a
              href="#"
              className="tracking-widest text-sm border-b-4 border-white pb-1  sm:pb-10"
            >
              <span className="mr-3 font-semibold tracking-normal text-base">
                00
              </span>
              Home
            </a>
          </li>
          <li className="mb-6 sm:mb-0 sm:ml-10 md:ml-20">
            <a href="#" className="tracking-widest text-sm">
              <span className="mr-3 font-semibold tracking-normal text-base">
                01
              </span>
              Destination
            </a>
          </li>
          <li className="mb-6 sm:mb-0 sm:ml-10  md:ml-20">
            <a href="#" className="tracking-widest text-sm">
              <span className="mr-3 font-semibold tracking-normal text-base">
                02
              </span>
              Crew
            </a>
          </li>
          <li className="sm:ml-10  md:ml-20">
            <a href="#" className="tracking-widest text-sm">
              <span className="mr-3 font-semibold tracking-normal text-base">
                03
              </span>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
