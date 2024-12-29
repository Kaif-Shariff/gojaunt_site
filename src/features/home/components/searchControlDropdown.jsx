import {useState} from "react";

export default function SearchControlDropdown({label, value, options, onChange, type = "button"}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative lg:flex-1">
            <button
                className="w-full text-left py-2 px-4 focus:outline-none font-semibold"
                onClick={toggleDropdown}
            >
                {value || label}
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                    {type === "button" ? (

                        options.map((option) => (
                            <div
                                key={option}
                                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))
                    ) : (
                        <input
                            type={type}
                            className="w-full py-2 px-4 border rounded-lg focus:outline-none"
                            onChange={(e) => handleSelect(e.target.value)}
                        />
                    )}
                </div>
            )}
        </div>
    );
}



