import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Left Section: Logo */}
        <Link to="/" className="p-2 flex-shrink-0">
          <img src="/coding.svg" alt="Logo" className="w-10 h-10" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Center Section: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/about" className="text-[#56afe6] hover:text-blue-600">
            Ohjelmointi
          </Link>
          <Link to="/services" className="text-[#56afe6] hover:text-blue-600">
            Alustat
          </Link>
          <Link to="/contact" className="text-[#56afe6] hover:text-blue-600">
            Forum
          </Link>
          <Link to="/contact" className="text-[#56afe6] hover:text-blue-600">
            Sanakirja
          </Link>
          <Link to="/contact" className="text-[#56afe6] hover:text-blue-600">
            Muistiinpanot
          </Link>
        </div>

        {/* Right Section: Login & Signup */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600 !hover:text-blue-300">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600 !hover:text-yellow-300">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black bg-opacity-95 p-4 flex flex-col space-y-4 text-center`}>
        {/* Navigation Links (Stacked) */}
        <Link to="/about" className="text-[#56afe6] hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Ohjelmointi
        </Link>
        <Link to="/services" className="text-[#56afe6] hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Alustat
        </Link>
        <Link to="/contact" className="text-[#56afe6] hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Forum
        </Link>
        <Link to="/contact" className="text-[#56afe6] hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Sanakirja
        </Link>
        <Link to="/contact" className="text-[#56afe6] hover:text-blue-600" onClick={() => setIsOpen(false)}>
          Muistiinpanot
        </Link>

        {/* Mobile Login/Signup (Stacked) */}
        <div className="flex flex-col space-y-2">
          <Link to="/login" className="px-4 py-2 bg-[#56afe6] text-white rounded hover:bg-blue-600 hover:text-blue-300">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-[#56afe6] text-white rounded hover:bg-blue-600 hover:text-yellow-300">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
