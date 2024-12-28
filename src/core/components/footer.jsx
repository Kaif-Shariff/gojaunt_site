import {Link} from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-primary text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side */}
                <div className="text-sm font-semibold">
                    <p>GoJaunt all rights reserved {currentYear}</p>
                </div>

                {/* Center */}
                <div className="space-x-6 font-semibold text-sm">
                    <a href="/terms">Terms & Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>

                {/* Right Side */}
                <div className="text-sm text-right font-semibold">
                    <Link to="https://github.com/Kaif-Shariff">
                        <p>Design & Developed by Kaif Shariff</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
