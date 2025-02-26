import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import data from "../data.json";
import NavbarLink from "./NavbarLink";

export default function NavbarSecondary() {
  const [filteredBrands, setFilteredBrands] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const activePath = location.pathname; // Ana navbar'dan tıklanan path
    const brands = data.newNavbar.filter(brand => brand.filter.includes(activePath) || activePath === brand.path); // Markalar daima görünsün
    setFilteredBrands(brands);
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md border-b border-gray-300 transition-all duration-300 lg:sticky lg:top-0 lg:w-full lg:z-50 lg:backdrop-blur-md lg:bg-opacity-50 mb-8">
      <div className="w-[80%] mx-auto grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-start items-start py-4">
        {filteredBrands.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <div key={index} className="flex flex-col items-start justify-center text-left">
              <NavbarLink
                icon={<img src={`/${item.icon}`} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain transition-all" />}
                name={item.name}
                path={item.path}
                className={`text-base lg:text-lg font-medium text-gray-800 transition-all 
                  ${isActive ? 'text-yellow-400 border-2 border-yellow-400 rounded-lg shadow-md shadow-yellow-400' : 'text-gray-800'} 
                  px-8 py-4 hover:text-gray-600`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
