import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("home");
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActivePage("home");
    } else if (currentPath === "/destination") {
      setActivePage("destination");
    } else if (currentPath === "/crew") {
      setActivePage("crew");
    } else if (currentPath === "/technology") {
      setActivePage("technology");
    }
  }, [location.pathname]);
  return (
    <header className="w-full sm:h-28  text-white  flex justify-between items-center font-barlow">
      <div className="ml-8 sm:ml-0 lg:ml-4 text-center sm:basis-0 md:basis-1/12 md:flex-shrink-0">
        <img src="../assets/shared/logo.svg" alt="LOGO" className="mx-auto" />
      </div>
      <div className=" md:basis-2/12 md:-mr-12  lg:-mr-28 lg:basis-3/12 z-20  h-[1px] opacity-50 bg-white"></div>
      <div className="sm:hidden cursor-pointer p-2 z-20">
        <div
          className="mr-8 h-1 w-8 relative bg-white before:content-[''] before:h-1 before:absolute before:bottom-2 before:w-8 before:bg-white after:content-[''] after:h-1 after:absolute after:top-2 after:w-8 after:bg-white"
          onClick={() => setSidebar((prev) => !prev)}
        ></div>
      </div>
      <nav
        className={` fixed z-10 top-0 right-0 w-[80%] h-full sm:relative bg-gray-500 bg-opacity-50    sm:visible sm:pl-6 md:pl-10 lg:pl-48 sm:pr-6 sm:w-full md:basis-8/12 sm:h-full sm:flex sm:items-center sm:bg-gradient-to-r from-[#131522] via-[#55637d] to-[#112a50] duration-500 ${
          sidebar ? "" : "translate-x-full"
        }`}
      >
        <ul className="mt-48 ml-20 sm:mt-0 sm:flex uppercase sm:mx-auto">
          <li className="mb-6 sm:mb-0 ">
            <NavLink
              to="/"
              className={`tracking-widest text-sm pb-1 sm:pb-10 ${
                activePage === "home" ? "border-b-4 border-white" : ""
              }`}
            >
              <span className="mr-3 font-semibold tracking-normal text-base">
                00
              </span>
              Home
            </NavLink>
          </li>
          <li className="mb-6 sm:mb-0 sm:ml-10 md:ml-20">
            <NavLink
              to="/destination"
              className={`tracking-widest text-sm pb-1 sm:pb-10 ${
                activePage === "destination" ? "border-b-4 border-white" : ""
              }`}
            >
              <span className="mr-3 font-semibold tracking-normal text-base">
                01
              </span>
              Destination
            </NavLink>
          </li>
          <li className="mb-6 sm:mb-0 sm:ml-10  md:ml-20">
            <NavLink
              to="/crew"
              className={`tracking-widest text-sm pb-1 sm:pb-10 ${
                activePage === "crew" ? "border-b-4 border-white" : ""
              }`}
            >
              <span className="mr-3 font-semibold tracking-normal text-base">
                02
              </span>
              Crew
            </NavLink>
          </li>
          <li className="sm:ml-10  md:ml-20">
            <NavLink
              to="/technology"
              className={`tracking-widest text-sm pb-1 sm:pb-10 ${
                activePage === "technology" ? "border-b-4 border-white" : ""
              }`}
            >
              <span className="mr-3 font-semibold tracking-normal text-base">
                03
              </span>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
