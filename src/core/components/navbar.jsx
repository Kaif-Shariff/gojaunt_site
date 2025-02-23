import { NavLink } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button.jsx";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="assets/logo.svg" alt="Logo" width={50} />
          </NavLink>
        </div>

        {/* Right: Links (Desktop) */}
        <div className="hidden md:flex items-center">
          {/* Pill-shaped container */}
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 space-x-2">
            <NavLink
              to="/"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (collapsible) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 rounded-b-lg mx-4 mb-2">
          <div className="flex flex-col space-y-1 py-2">
            <NavLink
              to="/"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={`${buttonVariants({ variant: "ghost" })} px-4 py-2`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
