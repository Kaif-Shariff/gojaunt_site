import {useState} from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <div className="flex items-center space-x-2 text-2xl font-bold">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="Logo" width={50}/>
                        <h2>GoJaunt</h2>
                    </NavLink>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-14">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/packages"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                    >
                        Packages
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-20`}
            >
                <div className="flex flex-col items-start p-6 space-y-4">
                    <button
                        className="self-end text-black focus:outline-none"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/packages"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Packages
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                            `text-black font-medium hover:text-primary ${
                                isActive ? "text-primary" : ""
                            }`
                        }
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
