import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Castle,
  Baby,
  BriefcaseBusiness,
  Workflow,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/images/profilepicture.jpg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  // Style for NavLinks
  const NavLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 text-lg transition-all duration-300 ${
      isActive
        ? "text-red-500 scale-105"
        : "text-white hover:text-red-400 hover:scale-105"
    }`;

  return (
    <nav className="select-none bg-gray-800 sm:min-w-full relative z-50 shadow-md">
      <div className="flex justify-between items-center p-3">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 object-cover shadow-2xl transition-transform duration-300 hover:scale-110 hover:rotate-6 animate-pulse rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className={NavLinkStyles}>
            <Castle />
            Home()
          </NavLink>
          <NavLink to="/services" className={NavLinkStyles}>
            <BriefcaseBusiness />
            MySkills()
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

      {/* Floating Menu Button (Top Right) */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 p-2 bg-gray-900 rounded-full shadow-lg border border-gray-600 transition-transform duration-300 hover:scale-110 focus:outline-none md:hidden z-[10000] ${
          isMenuOpen ? "bg-red-600" : "bg-gray-900"
        }`}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <X size={26} className="text-white" />
        ) : (
          <Menu size={26} className="text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[9999] flex justify-center items-center md:hidden"
          onClick={toggleMenu} // close when clicking outside
        >
          <div
            className="bg-gray-800 w-4/5 max-w-sm rounded-2xl shadow-xl p-8 flex flex-col gap-6 items-center text-center"
            onClick={(e) => e.stopPropagation()} // prevent closing on inside click
          >
            <NavLink to="/" className={NavLinkStyles} onClick={toggleMenu}>
              <Castle />
              Home()
            </NavLink>
            <NavLink
              to="/services"
              className={NavLinkStyles}
              onClick={toggleMenu}
            >
              <BriefcaseBusiness />
              MySkills()
            </NavLink>
            <NavLink to="/about" className={NavLinkStyles} onClick={toggleMenu}>
              <Baby />
              AboutMe()
            </NavLink>
            <NavLink
              to="/projects"
              className={NavLinkStyles}
              onClick={toggleMenu}
            >
              <Workflow />
              Projeks()
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
