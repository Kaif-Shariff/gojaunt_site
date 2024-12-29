import {useState} from "react";
import {LuSearch} from "react-icons/lu";
import {rupeeSymbol} from "../../../core/constant.js";
import SearchControlDropdown from "./searchControlDropdown.jsx";

export default function SearchControl() {
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");

    const locations = ["Dubai", "Egypt", "India", "France", "USA", "Italy"];
    const priceRanges = [
        "10,000 - 20,000",
        "20,000 - 30,000",
        "30,000 - 40,000",
        "40,000+",
    ].map((range) => rupeeSymbol + range);

    return (
        <div className="bg-white shadow-md rounded-lg hidden md:block p-4 w-full max-w-4xl mx-auto lg:mt-6">
            <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center md:justify-between">
                <div className="col-span-1 md:flex-1">
                    <SearchControlDropdown
                        label="Location"
                        value={location}
                        options={locations}
                        onChange={setLocation}
                    />
                </div>
                <div className="col-span-1 md:flex-1">
                    <SearchControlDropdown
                        label="Destination"
                        value={destination}
                        options={locations}
                        onChange={setDestination}
                    />
                </div>
                <div className="col-span-1 md:flex-1">
                    <SearchControlDropdown
                        label="Date"
                        value={date}
                        type="date"
                        onChange={setDate}
                    />
                </div>
                <div className="col-span-1 md:flex-1">
                    <SearchControlDropdown
                        label="Price"
                        value={price}
                        options={priceRanges}
                        onChange={setPrice}
                    />
                </div>
                <div className="col-span-2 flex justify-center md:flex-1">
                    <button
                        className="bg-primary text-2xl text-white py-2 px-6 w-full md:w-auto rounded-lg flex items-center justify-center hover:bg-primary-dark focus:outline-none">
                        <LuSearch className="mr-2"/>
                        <span className="text-base md:hidden">Search</span>
                    </button>
                </div>

            </div>
        </div>

    );
}
