import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              <span className="text-blue-500">di</span>Trinity
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Delivering AI, Cloud, ERP, PLM and Digital
              Transformation solutions for businesses worldwide.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/" className="text-gray-400 hover:text-blue-500">
                Home
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-blue-500">
                About
              </Link>

              <Link to="/services" className="text-gray-400 hover:text-blue-500">
                Services
              </Link>

              <Link to="/careers" className="text-gray-400 hover:text-blue-500">
                Careers
              </Link>

              <Link to="/contact" className="text-gray-400 hover:text-blue-500">
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <p>AI Solutions</p>
              <p>Cloud Services</p>
              <p>Digital Engineering</p>
              <p>ERP Solutions</p>
              <p>PLM Solutions</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Pune, Maharashtra</p>

              <p>info@ditrinity.com</p>

              <p>+91 XXXXX XXXXX</p>

            </div>

            <div className="flex gap-5 mt-8 text-2xl">

              <a href="#">
                <FaLinkedin className="text-gray-400 hover:text-blue-500" />
              </a>

              <a href="#">
                <FaFacebook className="text-gray-400 hover:text-blue-500" />
              </a>

              <a href="#">
                <FaInstagram className="text-gray-400 hover:text-pink-500" />
              </a>

              <a href="#">
                <FaGithub className="text-gray-400 hover:text-white" />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 diTrinity Technologies. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link
              to="/"
              className="text-gray-500 hover:text-blue-500"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="text-gray-500 hover:text-blue-500"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;