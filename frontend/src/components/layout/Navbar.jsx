import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `pb-2 transition-all duration-300 border-b-2 ${
      isActive
        ? "border-blue-500 text-white"
        : "border-transparent text-gray-300 hover:text-blue-500"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            <span className="text-blue-500">di</span>Trinity
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

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
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          Talk to Expert
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
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
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                Cloud Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/ai-solutions" onClick={() => setMenuOpen(false)}>
                Digital Solutions
              </NavLink>
            </li>

            <li>
              <NavLink to="/technologies" onClick={() => setMenuOpen(false)}>
                Healthcare Solutions
              </NavLink>
            </li>

            <li>
              <NavLink to="/industries" onClick={() => setMenuOpen(false)}>
                Industries
              </NavLink>
            </li>

            <li>
              <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
                Careers
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
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