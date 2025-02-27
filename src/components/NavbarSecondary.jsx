import { useActiveNav } from "../context/ActiveNavContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import NavbarLink from "./NavbarLink";

export default function NavbarSecondary() {
  const { activeMainPath, activeSecondaryPath, setActiveSecondaryPath, navbarsVisible } = useActiveNav(); // ✅ Navbar görünürlüğünü al
  const [filteredBrands, setFilteredBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeMainPath) {
      const brands = data.newNavbar.filter((brand) =>
        brand.filter.includes(activeMainPath)
      );
      setFilteredBrands(brands);
    } else {
      setFilteredBrands([]); // Kategori seçili değilse markaları gizle
    }
  }, [activeMainPath]);

  const handleSecondaryNavClick = (brandPath) => {
    if (activeMainPath) {
      const targetPath = `${activeMainPath}${brandPath}`;
      if (activeSecondaryPath === brandPath) {
        setActiveSecondaryPath(null); // ✅ Aynı markaya tıklanırsa seçim kalkar
        navigate(activeMainPath); // Kategoriye geri dön
      } else {
        setActiveSecondaryPath(brandPath); // ✅ Yeni marka aktif
        navigate(targetPath); // Kategori + marka sayfasına git
      }
    }
  };

  // 🛑 Navbar görünmüyorsa bileşeni saklamak yerine "boş bir div" render et (early return hatasını önler)
  if (!navbarsVisible) {
    return <div className="hidden"></div>;
  }

  if (filteredBrands.length === 0) return null;

  return (
    <nav className="bg-white shadow-md border-b border-gray-300 lg:sticky lg:top-0 lg:w-full z-50">
      <div className="w-[80%] mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 py-4">
        {filteredBrands.map((item, index) => {
          const isActive = activeSecondaryPath === item.path;

          return (
            <div key={index} className="flex flex-col items-start">
              <NavbarLink
                icon={<img src={`/${item.icon}`} alt={item.name} className="w-12 h-12 object-contain transition-all" />}
                name={item.name}
                path={`${activeMainPath}${item.path}`}
                onClick={() => handleSecondaryNavClick(item.path)}
                className={`text-base lg:text-lg font-medium px-8 py-4 transition-all
                  ${isActive ? 'text-yellow-400 border-2 border-yellow-400 rounded-lg shadow-md' : 'text-gray-800'}
                  hover:text-gray-600`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
