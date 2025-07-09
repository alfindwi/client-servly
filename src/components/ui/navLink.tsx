import { Link, useLocation } from "react-router-dom";

export function NavbarLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`relative text-md font-medium text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
    >
      {label}
    </Link>
  );
}
