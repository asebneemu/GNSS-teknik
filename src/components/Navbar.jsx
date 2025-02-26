import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import data from "../data.json";
import NavbarLink from "./NavbarLink";

export default function NavbarMain() {
  const [activeMainPath, setActiveMainPath] = useState(null); // 🔑 Aktif navbar butonunun yolu
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!activeMainPath && location.pathname) {
      // Eğer aktif bir path yoksa ve sayfa yenilenirse, location'dan aktif path'i belirle
      const matchedItem = data.mainNavbar.find(item => location.pathname.startsWith(item.path));
      if (matchedItem) setActiveMainPath(matchedItem.path);
    }
  }, [location.pathname, activeMainPath]);

  const handleMainNavClick = (path) => {
    setActiveMainPath(path); // 🔒 Tıklayınca aktif path olarak belirle
  };

  return (
    <nav
      ref={navbarRef}
      className="bg-white shadow-md border-b border-gray-300 transition-all duration-300 lg:sticky lg:top-0 lg:w-full lg:z-50 lg:backdrop-blur-md lg:bg-opacity-50 mb-8"
    >
      <div
        className={`w-[80%] mx-auto grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 justify-start items-start py-4`}
      >
        {data.mainNavbar.map((item, index) => {
          const isActive = activeMainPath === item.path; // ✅ Aktif path kontrolü

          return (
            <div key={index} className="flex flex-col items-start justify-center text-left">
              <NavbarLink
                icon={<img src={`/${item.icon}`} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-all" />}
                name={item.name}
                path={item.path}
                onClick={() => handleMainNavClick(item.path)} // 👈 Tıklama fonksiyonu
                className={`text-sm lg:text-lg text-left transition-all 
                  ${isActive ? 'text-yellow-400 font-bold border-2 border-yellow-400 rounded-lg shadow-md shadow-yellow-400' : 'text-gray-700'} 
                  px-8 py-4 hover:text-gray-700`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
