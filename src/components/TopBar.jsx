import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGlobe, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useActiveNav } from "../context/ActiveNavContext"; // ✅ Context ekledik
import data from "../data.json";
import logo from "../assets/1x/logo.png";

export default function TopBar() {
  const { navbarsVisible, setNavbarsVisible } = useActiveNav();
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = data.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex flex-col lg:flex-row items-center my-8 lg:px-24 py-10 lg:py-4 border-b border-gray-300 z-50">
      {/* 🔎 Arama Kutusu */}
      <div className="w-full max-w-lg mt-6 lg:mt-0 lg:w-1/3 lg:flex lg:justify-center relative">
        <div className="relative w-full max-w-md">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            className="w-full py-3 px-4 pl-10 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ürün, kategori veya marka..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setSearchActive(true);
              setNavbarsVisible(false); // 🔥 Navbarları gizle
            }}
            onBlur={() => {
              setTimeout(() => {
                setSearchActive(false);
                setNavbarsVisible(true); // 🔥 Arama boşsa navbarları geri aç
              }, 200);
            }}
          />
        </div>

        {/* 🔥 Sonuçları Göster */}
        {searchActive && searchQuery && filteredResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-gray-300 rounded-md z-[9999] max-h-60 overflow-y-auto">
            {filteredResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  navigate(`/${product.category}/${product.brand}/${product.id}`);
                  setSearchActive(false);
                  setNavbarsVisible(true); // ✅ Seçim yapınca navbarları geri aç
                }}
                className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <span className="text-gray-700">{product.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
