import {Link} from "react-router-dom";
import {email, phone} from "@/core/constant.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="">
            <div className="text-center text-black">
                <section>
                    <div className="text-center md:text-left mt-5">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto">
                                <div className="flex justify-center md:justify-start">
                                    <Link
                                        to="/"
                                        className="text-red-500 text-lg font-bold uppercase no-underline"

                                    >
                                        <img
                                            src="logo.svg"
                                            alt="S1MEDIA"
                                            className="w-20"
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    Welcome to GoJaunt, your go-to destination for extraordinary adventures and
                                    immersive travel experiences. Discover the world with us, and let your incredible
                                    journey commence!
                                </p>
                            </div>

                            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto mb-4">
                                <h6 className="text-lg font-bold uppercase mb-4">Our Service</h6>
                                <ul>
                                    <li className="mb-2">
                                        <Link
                                            to="/"
                                            className="text-black hover:text-gray-700"

                                        >
                                            Plane Ticket Booking
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link
                                            to="/"
                                            className="text-black hover:text-gray-700"

                                        >
                                            Visa
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link
                                            to="/"
                                            className="text-black hover:text-gray-700"

                                        >
                                            Travel Package
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-black hover:text-gray-700"

                                        >
                                            Railway Ticket Booking
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 mx-auto mb-4">
                                <h6 className="text-lg font-bold uppercase mb-4">Contact</h6>
                                <p>Shop No.1, 152, Bapu Khote Street</p>
                                <p>Surthiwala building, Mumbai - 400003</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © Gojaunt, {currentYear}. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
