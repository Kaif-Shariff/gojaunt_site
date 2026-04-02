import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [{ name: "Contact", path: "/" }];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for a solid background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white py-3 shadow-sm" : "bg-white py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="relative z-[110] group">
          <div
            className="
      w-12 h-12 rounded-full overflow-hidden
      transition-all duration-500
      group-hover:shadow-[0_0_35px_rgba(58,116,255,0.65)]
    "
          >
            <img
              src="assets/logo.svg"
              alt="Logo"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    px-5 py-2 text-sm font-medium transition-colors duration-300 relative z-10
                    ${isActive ? "text-white" : "text-gray-600 hover:text-black"}
                  `}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#3A74FF] rounded-full z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[110] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-6">
              <span className="text-gray-400 text-sm font-mono tracking-widest uppercase">
                Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-black hover:text-[#3A74FF] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-100">
              <p className="text-gray-500 mb-4">Follow us</p>
              <div className="flex gap-6 font-medium">
                <a href="#" className="hover:text-[#3A74FF]">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#3A74FF]">
                  Twitter
                </a>
                <a href="#" className="hover:text-[#3A74FF]">
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
