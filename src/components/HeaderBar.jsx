import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook } from "@fortawesome/free-solid-svg-icons";

export default function HeaderBar() {
  return (
    <div className="w-full min-h-[70px] py-3 bg-gray-800 text-white text-sm flex items-center justify-start pl-16">
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
  );
}
