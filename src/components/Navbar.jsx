import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center p-4 bg-black bg-opacity-90">
      {/* University Icon as Home */}
      <Link to="/" className="relative p-2 pl-16">
        <img src="/coding.svg" alt="Logo" className="w-10 h-10" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/about"
          className="relative !text-[#56afe6] hover:!text-blue-600 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-600 hover:after:w-full hover:after:left-0"
        >
          Ohjelmointi
        </Link>
        <Link
          to="/services"
          className="relative !text-[#56afe6] hover:!text-blue-600 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-600 hover:after:w-full hover:after:left-0"
        >
          Alustat
        </Link>
        <Link
          to="/contact"
          className="relative !text-[#56afe6] hover:!text-blue-600 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-600 hover:after:w-full hover:after:left-0"
        >
          Forum
        </Link>
        <Link
          to="/contact"
          className="relative !text-[#56afe6] hover:!text-blue-600 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-600 hover:after:w-full hover:after:left-0"
        >
          Sanakirja
        </Link>
        <Link
          to="/contact"
          className="relative !text-[#56afe6] hover:!text-blue-600 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-600 hover:after:w-full hover:after:left-0"
        >
          Muistiinpanot
        </Link>
      </div>

      {/* Login/Signup */}
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600 !hover:text-blue-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600 !hover:!text-yellow-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
