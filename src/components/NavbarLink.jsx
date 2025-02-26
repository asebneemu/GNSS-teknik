import { Link } from "react-router-dom";

export default function NavbarLink({ icon, name, path, className, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick} // ✅ Navbar'daki aktif path'i güncelleyecek
      className={`flex flex-row lg:flex-col items-center lg:gap-4 gap-2 text-gray-700 hover:text-black transition-all ${className}`}
    >
      {icon}
      <span className="text-sm">{name}</span>
    </Link>
  );
}
