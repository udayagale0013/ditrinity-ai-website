import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `pb-2 transition-all duration-300 border-b-2 whitespace-nowrap ${
      isActive
        ? "border-blue-500 text-white"
        : "border-transparent text-gray-300 hover:text-blue-500"
    }`;

  return (
    <nav className="w-full bg-[#111827] border-b border-gray-800">

      {/* Desktop Navbar */}
      <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center gap-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex flex-col items-start shrink-0"
        >
          <img
            src="/blob-1f93b35.png"
            alt="diTrinity"
            className="h-11 w-auto object-contain"
          />

          <span className="text-[9px] text-white whitespace-nowrap mt-0.5">
            Enriching Lives with Digital Transformation
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-5 text-gray-300 font-medium whitespace-nowrap flex-1 min-w-0">

          <li>
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navClass}>
              Cloud Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-solutions" className={navClass}>
              Digital Solutions
            </NavLink>
          </li>

          <li>
            <NavLink to="/technologies" className={navClass}>
              Healthcare Solutions
            </NavLink>
          </li>

          <li>
            <NavLink to="/industries" className={navClass}>
              Industries
            </NavLink>
          </li>

          <li>
            <NavLink to="/careers" className={navClass}>
              Careers
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Desktop Button */}
        <Link
          to="/contact"
          className="hidden md:block shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition duration-300 whitespace-nowrap"
        >
          Talk to Expert
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden ml-auto text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#111827] border-t border-gray-700 px-6 py-5">

          <ul className="flex flex-col gap-5 text-gray-300 font-medium">

            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                Cloud Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ai-solutions"
                onClick={() => setMenuOpen(false)}
              >
                Digital Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technologies"
                onClick={() => setMenuOpen(false)}
              >
                Healthcare Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/industries"
                onClick={() => setMenuOpen(false)}
              >
                Industries
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/careers"
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Mobile Talk to Expert */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Talk to Expert
          </Link>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;