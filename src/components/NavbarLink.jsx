import { Link } from "react-router-dom";

export default function NavbarLink({ icon, name, path, className, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex flex-row lg:flex-col items-center justify-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${className}`}
      aria-label={name}
      title={name}
    >
      {/* İkon alanı */}
      {icon && <div className="w-12 h-12">{icon}</div>}

      {/* Başlık */}
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
}
