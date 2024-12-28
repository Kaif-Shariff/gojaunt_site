import {useState} from "react";

export default function SearchControl()  {
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [dropdown, setDropdown] = useState("");

    const toggleDropdown = (section) => {
        setDropdown(dropdown === section ? "" : section);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mx-auto lg:mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Depart Section */}
                <div className="relative flex-1">
                    <button
                        className="w-full text-left py-2 px-4 focus:outline-none font-semibold"
                        onClick={() => toggleDropdown("location")}
                    >
                        {location || "Location"}
                    </button>
                    {dropdown === "location" && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            {["Dubai", "Egypt", "India", "France", "USA", "Italy"].map((loc) => (
                                <div
                                    key={loc}
                                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setLocation(loc);
                                        setDropdown("");
                                    }}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Destination Section */}
                <div className="relative flex-1">
                    <button
                        className="w-full text-left py-2 px-4 focus:outline-none font-semibold"
                        onClick={() => toggleDropdown("destination")}
                    >
                        {destination || "Destination"}
                    </button>
                    {dropdown === "destination" && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            {["Dubai", "Egypt", "India", "France", "USA", "Italy"].map((loc) => (
                                <div
                                    key={loc}
                                    className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setDestination(loc);
                                        setDropdown("");
                                    }}
                                >
                                    {loc}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Date Section */}
                <div className="relative flex-1">
                    <button
                        className="w-full text-left  py-2 px-4 focus:outline-none font-semibold"
                        onClick={() => toggleDropdown("date")}
                    >
                        {date || "Date"}
                    </button>
                    {dropdown === "date" && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            <input
                                type="date"
                                className="w-full py-2 px-4 border rounded-lg focus:outline-none"
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    setDropdown("");
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Price Section */}
                <div className="relative flex-1">
                    <button
                        className="w-full text-left px-4 focus:outline-none font-semibold"
                        onClick={() => toggleDropdown("price")}
                    >
                        {price || "Price"}
                    </button>
                    {dropdown === "price" && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            {["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"].map(
                                (range) => (
                                    <div
                                        key={range}
                                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setPrice(range);
                                            setDropdown("");
                                        }}
                                    >
                                        {range}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <div>
                    <button
                        className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark focus:outline-none">
                        Find
                    </button>
                </div>
            </div>
        </div>
    );
};

