import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlustatOpen, setIsAlustatOpen] = useState(false);
  const [isMobileAlustatOpen, setIsMobileAlustatOpen] = useState(false);
  const [isOhjelmointiOpen, setIsOhjelmointiOpen] = useState(false);
  const [isMobileOhjelmointiOpen, setIsMobileOhjelmointiOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black bg-opacity-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-0">
        {/* Left Section: Logo */}
        <Link to="/" className="p-2 flex-shrink-0 group" onClick={() => setIsOpen(false)}> 
          <img
            src="/coding.svg"
            alt="Logo"
            className="w-10 h-10 transition duration-300 ease-in-out group-hover:filter group-hover:brightness-200"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Center Section: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 relative">
          {/* Ohjelmointi Dropdown */}
          <div
             className="relative"
             onMouseEnter={() => {
               setIsOhjelmointiOpen(true);
               setIsAlustatOpen(false);
             }}
             onMouseLeave={() => setIsOhjelmointiOpen(false)}
           >
            <Link to="#" className="nav-link py-2 px-4">
              Ohjelmointi
            </Link>

            {/* Dropdown Menu - Two Columns with Icons */}
            {isOhjelmointiOpen && (
              <div
                className="absolute top-full left-0 mt-0 w-64 bg-gray-800 bg-opacity-90 border border-gray-500 shadow-md rounded-lg p-3 dropdown-menu transition-opacity duration-300 opacity-90"
                onMouseEnter={() => setIsOhjelmointiOpen(true)}
                onMouseLeave={() => setIsOhjelmointiOpen(false)}
              >
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/csharp"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/csharp.svg" alt="C#" className="w-5 h-5" />
                    C#
                  </Link>
                  <Link
                    to="/javascript"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img
                      src="/javascript.svg"
                      alt="JavaScript"
                      className="w-5 h-5"
                    />
                    JavaScript
                  </Link>
                  <Link
                    to="/python"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/python.svg" alt="Python" className="w-5 h-5" />
                    Python
                  </Link>
                  <Link
                    to="/sql"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/sql.svg" alt="SQL" className="w-5 h-5" />
                    SQL
                  </Link>
                  <Link
                    to="/html"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/html.svg" alt="HTML" className="w-5 h-5" />
                    HTML
                  </Link>
                  <Link
                    to="/css"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/css.svg" alt="CSS" className="w-5 h-5" />
                    CSS
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Alustat Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setIsAlustatOpen(true);
              setIsOhjelmointiOpen(false);
            }}
            onMouseLeave={() => setIsAlustatOpen(false)}
          >
            <Link to="#" className="nav-link py-2 px-4">
              Alustat
            </Link>

            {/* Dropdown Menu - Two Columns with Icons */}
            {isAlustatOpen && (
              <div
                className="absolute top-full left-0 mt-0 w-64 bg-gray-800 bg-opacity-100 border border-gray-500 shadow-md rounded-lg p-3 dropdown-menu transition-opacity duration-300 opacity-90"
                onMouseEnter={() => setIsAlustatOpen(true)}
                onMouseLeave={() => setIsAlustatOpen(false)}
              >
                <div className="grid grid-cols-2 gap-3">
                  {/* Column 1 */}
                  <Link
                    to="/visual-studio"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/visualstudio.svg" alt="VS" className="w-5 h-5" />
                    Visual Studio
                  </Link>
                  <Link
                    to="/vscode"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/vscode.svg" alt="VS Code" className="w-5 h-5" />
                    VS Code
                  </Link>
                  <Link
                    to="/git"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/git.svg" alt="Git" className="w-5 h-5" />
                    Git
                  </Link>

                  {/* Column 2 */}
                  <Link
                    to="/dotnet"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/dotnet.svg" alt=".NET" className="w-5 h-5" />
                    .NET
                  </Link>
                  <Link
                    to="/django"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/django.svg" alt="Django" className="w-5 h-5" />
                    Django
                  </Link>
                  <Link
                    to="/azure"
                    className="flex items-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                  >
                    <img src="/azure.svg" alt="Azure" className="w-5 h-5" />
                    Azure
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/forum" className="nav-link">
            Forum
          </Link>
          <Link to="/dictionary" className="nav-link">
            Sanakirja
          </Link>
          <Link to="/notes" className="nav-link">
            Muistiinpanot
          </Link>
        </div>

        {/* Right Section: Login & Signup */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black bg-opacity-95 p-4 flex flex-col space-y-4 text-center`}
      >
        {/* Mobile Ohjelmointi Dropdown */}
        <div className="relative">
          <button
            className="nav-link w-full text-center flex justify-center items-center px-4 py-2 bg-gray-800 rounded"
            onClick={() => setIsMobileOhjelmointiOpen(!isMobileOhjelmointiOpen)}
          >
            Ohjelmointi ▾
          </button>
          {isMobileOhjelmointiOpen && (
            <div className="bg-gray-900 p-2 rounded mt-2">
              <Link
                to="/csharp"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
                
              >
                <img src="/csharp.svg" alt="VS" className="w-5 h-5" />
                C#
              </Link>
              <Link
                to="/javascript"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/javascript.svg" alt="VS Code" className="w-5 h-5" />
                JavaScript
              </Link>
              <Link
                to="/html"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/html.svg" alt="Git" className="w-5 h-5" />
                HTML
              </Link>
              <Link
                to="/sql"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/sql.svg" alt=".NET" className="w-5 h-5" />
                SQL
              </Link>
              <Link
                to="/python"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/python.svg" alt="Django" className="w-5 h-5" />
                Python
              </Link>
              <Link
                to="/css"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/css.svg" alt="Azure" className="w-5 h-5" />
                CSS
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Alustat Dropdown */}
        <div className="relative">
          <button
            className="nav-link w-full text-center flex justify-center items-center px-4 py-2 bg-gray-800 rounded"
            onClick={() => setIsMobileAlustatOpen(!isMobileAlustatOpen)}
          >
            Alustat ▾
          </button>
          {isMobileAlustatOpen && (
            <div className="bg-gray-900 p-2 rounded mt-2">
              <Link
                to="/visual-studio"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/visualstudio.svg" alt="VS" className="w-5 h-5" />
                Visual Studio
              </Link>
              <Link
                to="/vscode"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/vscode.svg" alt="VS Code" className="w-5 h-5" />
                VS Code
              </Link>
              <Link
                to="/git"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/git.svg" alt="Git" className="w-5 h-5" />
                Git
              </Link>
              <Link
                to="/dotnet"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/dotnet.svg" alt=".NET" className="w-5 h-5" />
                .NET
              </Link>
              <Link
                to="/django"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/django.svg" alt="Django" className="w-5 h-5" />
                Django
              </Link>
              <Link
                to="/azure"
                className="flex items-center justify-center gap-2 p-2 text-white hover:bg-gray-700 rounded"
                onClick={() => {
                  setIsMobileOhjelmointiOpen(false)
                  setIsOpen(false)  
                }}
              >
                <img src="/azure.svg" alt="Azure" className="w-5 h-5" />
                Azure
              </Link>
            </div>
          )}
        </div>

        <Link to="/forum" className="nav-link" onClick={() => setIsOpen(false)}>
          Forum
        </Link>
        <Link
          to="/dictionary"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Sanakirja
        </Link>
        <Link to="/notes" className="nav-link" onClick={() => setIsOpen(false)}>
          Muistiinpanot
        </Link>

        {/* Mobile Login/Signup */}
        <div className="flex flex-col space-y-2">
          <Link
            to="/login"
            className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-[#56afe6] !text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
