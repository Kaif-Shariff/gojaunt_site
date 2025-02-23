import {useState} from "react";
import {NavLink} from "react-router-dom";
import {buttonVariants} from "@/components/ui/button.jsx";
import {motion} from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex items-center justify-between p-4">

                {/* Logo */}
                <div className="flex items-center space-x-2 text-2xl font-bold">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img src="assets/logo.svg" alt="Logo" width={50}/>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center">
                    <div
                        className="flex items-center bg-gray-100 rounded-xl py-2 px-6 space-x-2 text-[#56585E] text-lg">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `${buttonVariants({variant: "ghost"})} px-4 py-2 font-medium ${
                                    isActive ? "bg-[#3A74FF] text-white rounded-lg" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `${buttonVariants({variant: "ghost"})} px-4 py-2 font-medium ${
                                    isActive ? "bg-[#3A74FF] text-white rounded-lg" : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({isActive}) =>
                                `${buttonVariants({variant: "ghost"})} px-4 py-2 font-medium ${
                                    isActive ? "bg-[#3A74FF] text-white rounded-lg" : ""
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `${buttonVariants({variant: "ghost"})} px-4 py-2 font-medium ${
                                    isActive ? "bg-[#3A74FF] text-white rounded-lg" : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setMenuOpen(true)}
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Overlay (When Menu is Open) */}
            {menuOpen && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setMenuOpen(false)}
                ></motion.div>
            )}

            {/* Mobile Drawer (Fixed Height & Scroll Issue Resolved) */}
            <motion.div
                initial={{x: "-100%"}}
                animate={{x: menuOpen ? "0%" : "-100%"}}
                transition={{type: "spring", stiffness: 100, damping: 20}}
                className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 overflow-y-auto"
            >
                <div className="flex flex-col h-full p-4">

                    {/* Drawer Header (Logo + Close Button) */}
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <img src="assets/logo.svg" alt="Logo" width={50}/>
                        </NavLink>
                        <button className="text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-2 mt-6 text-lg">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `px-4 py-3 rounded-md transition-all ${
                                    isActive ? "bg-[#3A74FF] text-white" : "hover:bg-gray-200"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `px-4 py-3 rounded-md transition-all ${
                                    isActive ? "bg-[#3A74FF] text-white" : "hover:bg-gray-200"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({isActive}) =>
                                `px-4 py-3 rounded-md transition-all ${
                                    isActive ? "bg-[#3A74FF] text-white" : "hover:bg-gray-200"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `px-4 py-3 rounded-md transition-all ${
                                    isActive ? "bg-[#3A74FF] text-white" : "hover:bg-gray-200"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
