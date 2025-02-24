import { Link } from "react-router-dom";

export default function NavbarLink({ icon, name }) {
  return (
    <Link to="#" className="flex flex-row lg:flex-col items-center lg:gap-4 gap-2 text-gray-700 hover:text-blue-500 transition">
      {/* İkonu resim olarak render et ve boyutunu ayarla */}
      {icon}
      <span className="text-sm">{name}</span>
    </Link>
  );
}
