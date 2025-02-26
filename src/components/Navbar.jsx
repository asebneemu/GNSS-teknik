import { useState, useRef } from "react";
import { useLocation } from "react-router-dom"; 
import data from "../data.json";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      ref={navbarRef}
      className="bg-white shadow-md border-b border-gray-300 transition-all duration-300 lg:sticky lg:top-0 lg:w-full lg:z-50 lg:backdrop-blur-md lg:bg-opacity-50 mb-8"
    >
      <div className="lg:hidden absolute top-20 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 bg-white shadow-md rounded-md"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`w-[80%] mx-auto grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-start items-start py-4 ${isOpen ? "" : "hidden lg:grid"}`}
      >
        {data.mainNavbar.map((item, index) => {
          const isActive = location.pathname === item.path;
          const isNotHomePage = !isHomePage;

          return (
            <div key={index} className="flex flex-col items-start justify-center text-left">
              <NavbarLink
                icon={<img src={`/${item.icon}`} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all" />}
                name={item.name}
                path={item.path}
                className={`text-sm lg:text-lg text-left transition-all 
                  ${isActive ? 'text-yellow-400 font-bold border-2 border-yellow-400 rounded-lg shadow-md shadow-yellow-400' : 'text-gray-700'} 
                  ${isNotHomePage && !isActive ? 'opacity-50' : 'opacity-100'} 
                  px-8 py-4 hover:text-gray-700`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
