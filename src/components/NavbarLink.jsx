import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavbarLink({ icon, name }) {
  return (
    <Link to="#" className="flex flex-row lg:flex-col items-center lg:gap-4 gap-2 text-gray-700 hover:text-blue-500 transition">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <span className="text-sm">{name}</span>
    </Link>
  );
}
