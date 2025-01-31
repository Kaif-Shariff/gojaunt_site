import {NavLink} from "react-router-dom";
import {buttonVariants} from "@/components/ui/button.jsx";

const Navbar = () => {
    return (
        <nav className="bg-white sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center space-x-2 text-2xl font-bold">
                    <NavLink to="/" className="flex items-center space-x-2">
                        <img src="assets/logo.svg" alt="Logo" width={50}/>
                    </NavLink>
                </div>

                <div className="flex space-x-4">
                    <NavLink
                        to="/contact"
                        className={buttonVariants()}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
