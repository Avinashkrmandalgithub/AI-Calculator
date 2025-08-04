import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaLaptopCode, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyle =
    "flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors";

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Avinash<span className="text-indigo-600">.</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a href="https://avinashdev-portfolio.netlify.app" className={linkStyle}>
              <FaLaptopCode className="text-purple-500" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/avinash-kr-mandal-91569231a/" className={linkStyle}>
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Avinashkrmandalgithub" className={linkStyle}>
              <FaGithub className="text-black" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/avinashkrmandal/" className={linkStyle}>
              <SiLeetcode className="text-yellow-500" />
              LeetCode
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/____happysoleminity____/" className={linkStyle}>
              <FaInstagram className="text-pink-500" />
              Instagram
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden px-4 text-lg">
          <li>
            <a href="https://avinashdev-portfolio.netlify.app" className={linkStyle}>
              <FaLaptopCode className="text-purple-500" />
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/avinash-kr-mandal-91569231a/" className={linkStyle}>
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Avinashkrmandalgithub" className={linkStyle}>
              <FaGithub className="text-black" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/avinashkrmandal/" className={linkStyle}>
              <SiLeetcode className="text-yellow-500" />
              LeetCode
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/____happysoleminity____/" className={linkStyle}>
              <FaInstagram className="text-pink-500" />
              Instagram
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
