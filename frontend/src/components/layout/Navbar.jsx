import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `pb-2 transition-all duration-300 border-b-2 ${
      isActive
        ? "border-blue-500 text-white"
        : "border-transparent text-gray-300 hover:text-blue-500"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-3xl font-bold text-white cursor-pointer">
            <span className="text-blue-500">di</span>Trinity
          </h1>
        </NavLink>

        {/* Menu */}
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

        {/* Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300">
          Talk to Expert
        </button>

      </div>
    </nav>
  );
}

export default Navbar;