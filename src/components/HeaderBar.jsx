import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

export default function HeaderBar() {
  return (
    <div className="w-full bg-gray-800 text-white text-sm">
      <div className="max-w-[80%] mx-auto flex items-center justify-start py-3 px-4">
        {/* Telefon Bilgisi */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>+90 555 555 55 55</span>
        </div>

        {/* Boşluk */}
        <div className="w-6"></div>

        {/* Hakkımızda */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBook} />
          <span>Hakkımızda</span>
        </div>
      </div>
    </div>
  );
}
