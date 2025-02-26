import { useActiveNav } from "../context/ActiveNavContext";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import NavbarLink from "./NavbarLink";

export default function NavbarMain() {
  const { activeMainPath, setActiveMainPath, setActiveSecondaryPath } = useActiveNav(); // ✅ activeSecondaryPath ekledik
  const navigate = useNavigate();

  const handleMainNavClick = (path) => {
    if (activeMainPath === path) {
      setActiveMainPath(null); // ✅ Aynı butona tıklayınca ana path sıfırlanır
      setActiveSecondaryPath(null); // ✅ Seçili marka da sıfırlanır
      navigate("/"); // Anasayfaya yönlendirilir
    } else {
      setActiveMainPath(path); // ✅ Yeni kategori aktif olur
      setActiveSecondaryPath(null); // ✅ Marka seçimi sıfırlanır
      navigate(path); // Kategori sayfasına yönlendirilir
    }
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-300 lg:sticky lg:top-0 lg:w-full z-50">
      <div className="w-[80%] mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 py-4">
        {data.mainNavbar.map((item, index) => {
          const isActive = activeMainPath === item.path;

          return (
            <div key={index} className="flex flex-col items-start">
              <NavbarLink
                icon={<img src={`/${item.icon}`} alt={item.name} className="w-12 h-12 transition-all" />}
                name={item.name}
                path={item.path}
                onClick={() => handleMainNavClick(item.path)}
                className={`text-sm lg:text-lg px-8 py-4 transition-all
                  ${isActive ? 'text-yellow-400 border-2 border-yellow-400 rounded-lg shadow-md' : 'text-gray-700'}
                  hover:text-gray-700`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
