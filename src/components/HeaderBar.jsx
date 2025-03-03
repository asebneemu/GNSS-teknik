import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { useActiveNav } from "../context/ActiveNavContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderBar() {
  const { setActiveMainPath, setActiveSecondaryPath } = useActiveNav();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Mevcut sayfayı kontrol etmek için

  const handleHomeClick = () => {
    setActiveMainPath(null); // ✅ Ana navbar'ı sıfırla
    setActiveSecondaryPath(null); // ✅ Alt navbar'ı sıfırla

    if (location.pathname !== "/") {
      navigate("/"); // ✅ Eğer zaten anasayfadaysak tekrar yönlendirme yapma
    }
  };

  return (
    <div className="w-full bg-gray-800 text-white text-sm">
      <div className="max-w-[80%] mx-auto flex items-center justify-between py-3 px-4">
        {/* Sol Taraf - Anasayfa ve Hakkımızda */}
        <div className="flex items-center space-x-6">
          {/* ✅ Anasayfa Linki */}
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-2 hover:opacity-80 focus:outline-none"
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Anasayfa</span>
          </button>

          {/* Hakkımızda */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBook} />
            <span>Hakkımızda</span>
          </div>
        </div>

        {/* Sağ Taraf - Telefon Bilgisi */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>+90 555 555 55 55</span>
        </div>
      </div>
    </div>
  );
}
