import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlobe, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/1x/logo.png";

export default function TopBar() {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="relative flex flex-col lg:flex-row items-center my-8 lg:px-24 py-10 lg:py-4 border-b border-gray-300 ">
      
      {/* Sabitlenmiş Dil & Tema Butonları */}
      <div className="absolute top-0 right-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <FontAwesomeIcon icon={faGlobe} className="text-xl text-gray-700" />
          <span className="text-gray-700 text-sm">TR</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FontAwesomeIcon icon={faSun} className="text-xl text-gray-700" />
          <span className="text-gray-700 text-sm">Light Mode</span>
        </div>
      </div>

      {/* Logo (Sadece sağa kaydırıldı, bul butonu ortada kaldı) */}
      <div className="lg:flex lg:items-center lg:w-1/3 lg:justify-center lg:space-x-6">
        <img src={logo} alt="Logo" className="h-28 lg:h-32 object-contain" />
      </div>

      {/* Arama Kutusu (Tam ortada olacak) */}
      <div className="w-full max-w-lg mt-6 lg:mt-0 lg:w-1/3 lg:flex lg:justify-center">
        <div className="relative w-full max-w-md">
          {!searchActive && (
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          )}
          {!searchActive && (
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              Ürün, kategori veya marka...
            </span>
          )}
          <input
            type="text"
            className="w-full py-3 px-4 pl-10 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
        </div>
      </div>

      {/* Boşluk için eklenen div */}
      <div className="hidden lg:block lg:w-1/3"></div>

    </div>
  );
}
