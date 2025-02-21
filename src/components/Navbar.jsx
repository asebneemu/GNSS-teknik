import { useState, useEffect, useRef } from "react";
import data from "../data.json";
import NavbarLink from "./NavbarLink";
import { faBook, faCoffee, faHome, faUser, faCar, faPhone, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const icons = { faBook, faCoffee, faHome, faUser, faCar, faPhone, faHeart, faStar };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      const offsetTop = navbarRef.current.offsetTop;
      if (window.scrollY > offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-white shadow-md border-b border-gray-300 transition-all duration-300 
      ${isSticky ? "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:z-50 lg:shadow-lg" : "relative"}`}
    >
      {/* Hamburger Menüsü - Sadece Mobilde Görünecek */}
      <div className="lg:hidden fixed top-16 left-4 z-50">
        <button onClick={toggleMenu} className="p-2 bg-white shadow-md rounded-md">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navbar İçeriği */}
      <div className={`flex flex-wrap lg:flex-row justify-center items-center py-4 lg:gap-6 ${isOpen ? "" : "hidden lg:flex"}`}>
        {data.map((item, index) => (
          <div key={index} className="w-[30%] px-2 py-3 lg:w-auto lg:px-6">
            <NavbarLink icon={icons[item.icon]} name={item.name} className="lg:text-lg lg:gap-4" />
          </div>
        ))}
      </div>
    </nav>
  );
}
