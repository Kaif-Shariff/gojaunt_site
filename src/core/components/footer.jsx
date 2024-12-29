import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-primary text-white py-4">
            <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0">
                {/* Left Side */}
                <div className="text-sm font-semibold text-center sm:text-left">
                    <p>© {currentYear} GoJaunt Private Limited</p>
                </div>

                {/* Center */}
                <div className="space-y-2 sm:space-x-6 sm:space-y-0 font-semibold text-sm text-center">
                    <a href="/terms" className="block sm:inline">Terms & Conditions</a>
                    <a href="/privacy" className="block sm:inline">Privacy Policy</a>
                </div>

                {/* Right Side */}
                <div className="text-sm font-semibold text-center sm:text-right">
                    <Link to="https://github.com/Kaif-Shariff">
                        <p>Design & Developed by Kaif Shariff</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
