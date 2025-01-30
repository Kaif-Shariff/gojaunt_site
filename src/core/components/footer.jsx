import {Link} from "react-router-dom";
import {footerSections} from "@/data/footerdata.js";
import {privacyLink, termsLink} from "@/core/constant.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#3A74FF] ">
            <div className="text-center text-white">
                <section>
                    <div className="text-center md:text-left mt-5">
                        <div className="flex flex-wrap">
                            {footerSections.map((section, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto mb-4 mt-6"
                                >
                                    {section.title && (
                                        <h6 className="text-xl font-bold uppercase mb-4">
                                            {section.title}
                                        </h6>
                                    )}
                                    <ul>
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className="my-4">
                                                {link.to ? (
                                                    <Link
                                                        to={link.to}
                                                        className=" hover:font-semibold"
                                                    >
                                                        {link.text}
                                                    </Link>
                                                ) : (
                                                    <p>{link.text}</p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="text-center p-4 px-12 mt-8 flex flex-col md:flex-row justify-between">
                    © Gojaunt, {currentYear}. All rights reserved.

                    <div className="mt-4 flex flex-col md:flex-row md:mt-0 space-y-4 md:space-x-4 md:space-y-0">
                        <Link to={termsLink}>Terms & Conditions</Link>
                        <Link to={privacyLink}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
