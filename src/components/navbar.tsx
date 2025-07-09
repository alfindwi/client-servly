import { Link } from "react-router-dom";
import { AuthModalContainer } from "./modal/AuthModalContainer";
import { NavbarLink } from "./ui/navLink";

export function Navbar() {
  return (
    <nav className="bg-transparent px-10">
      <div className=" mx-auto flex justify-between items-center py-6">
        <Link to="/" className="font-bold text-black">
          <img src="./src/assets/logo.png" className="w-30" alt="" />
        </Link>

        <div className="hidden md:flex gap-9 items-center">
          <NavbarLink to="/" label="Home" />

          <NavbarLink to="/services" label="Services" />

          <NavbarLink to="/how-it-works" label="How It Works" />

          <NavbarLink to="/providers" label="For Providers" />

          <AuthModalContainer />
        </div>
      </div>
    </nav>
  );
}
