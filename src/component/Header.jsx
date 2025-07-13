import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    {path: "/gallery", label:"Gallery"},
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full pr-0 pl-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-3">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-3 transition-transform hover:scale-105"
        >
          <img
            src="/RMJ-LOGO_GIF.gif"
            alt="RMJ HALL Logo"
            className="h-16 w-16 md:h-20 md:w-20 rounded-x3 object-cover"
          />
          <div className="flex flex-col">
            <span
              className="text-2xl md:text-3xl font-bold font-sans	 tracking-wide"
              style={{ color: "#3B3B1A" }}
            >
              RMJ HALL
            </span>
            <span className="text-sm md:text-base text-gray-600 font-bold">
              From Celebrations to Conferences — We Host It All
            </span>
          </div>


        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === link.path
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
           
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
