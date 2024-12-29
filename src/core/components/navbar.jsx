import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center space-x-2 text-2xl font-bold">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="Logo" width={50}/>
                        <h2>GoJaunt</h2>
                    </NavLink>
                </div>

                <div className="flex space-x-4">
                    <NavLink
                        to="/contact"
                        className="px-4 py-2 rounded-lg font-medium transition-colors
                                bg-primary text-white hover:bg-primary-dark"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
