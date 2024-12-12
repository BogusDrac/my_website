import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Castle, Baby, BriefcaseBusiness, Workflow, Menu, X } from "lucide-react";
import logo from "../assets/images/profilepicture.jpg"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinkStyles =
    "flex items-center gap-2 text-white hover:text-red-500 hover:scale-105 focus:scale-110 focus:text-red-600 transition-all";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="select-none bg-gray-700 sm:min-w-full overflow-hidden">
        <div className="flex justify-between items-center p-3">
          {/* Logo */}
          <div className="">
            <img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 object-cover shadow-2xl transition-transform duration-300 hover:scale-110 hover:rotate-6 animate-pulse rounded-full " />
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300 z-50" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 z-50" />
              )}
          </button>

          {/* Nav Links for Desktop */}
          <div className="hidden md:flex gap-4">
            <NavLink to="/home" className={NavLinkStyles}>
              <Castle />
              Home()
            </NavLink>
            <NavLink to="/services" className={NavLinkStyles}>
              <BriefcaseBusiness />
              MyServices()
            </NavLink>
            <NavLink to="/about" className={NavLinkStyles}>
              <Baby />
              AboutMe()
            </NavLink>
            <NavLink to="/projects" className={NavLinkStyles}>
              <Workflow />
              Projeks()
            </NavLink>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
              <div className="bg-gray-800 flex flex-col gap-4 items-center h-full space-y-8 p-4 mt-16">
              <NavLink
                to="/home"
                className={NavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                <Castle />
                Home()
              </NavLink>
              <NavLink
                to="/services"
                className={NavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                <BriefcaseBusiness />
                MyServices()
              </NavLink>
              <NavLink
                to="/about"
                className={NavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                <Baby />
                AboutMe()
              </NavLink>
              <NavLink
                to="/projects"
                className={NavLinkStyles}
                onClick={() => setIsMenuOpen(false)}
              >
                <Workflow />
                Projeks()
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
