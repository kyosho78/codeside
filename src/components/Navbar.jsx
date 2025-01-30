import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center p-4 bg-black bg-opacity-90 text-white">
      {/* University Icon as Home */}
      <Link to="/" className="relative text-2xl p-2 !text-green-700 hover:!text-green-400 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
        <FaUniversity />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/about" className="relative !text-green-700 hover:!text-green-400 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
        Ohjelmointi</Link>
        <Link to="/services" className="relative !text-green-700 hover:!text-green-400 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
        Alustat</Link>
        <Link to="/contact" className="relative !text-green-700 hover:!text-green-400 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
        Forum</Link>
        <Link to="/contact" className="relative !text-green-700 hover:!text-green-400 after:block after:absolute after:left-1/2 after:w-0 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
        Muistiinpanot</Link>
      </div>

      {/* Login/Signup */}
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-green-700 !text-white rounded hover:bg-green-600 !hover:text-green-300">
          Login
        </Link>
        <Link to="/signup" className="px-4 py-2 bg-green-700 !text-white rounded hover:bg-green-800 !hover:text-yellow-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
