import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Calendar, MapPin, ArrowRight, Info } from "lucide-react";

const spring = {
    type: "spring",
    stiffness: 120,
    damping: 18,
};

const allFlights = [
    {
        id: 1,
        airline: "Qatar Airways",
        origin: "NYC",
        destination: "LDN",
        price: "$940",
        dep: "10:00 AM",
        arr: "11:30 PM",
        duration: "13h 30m",
        visa: "e-Visa Required",
        fee: "$30",
    },
    {
        id: 2,
        airline: "Singapore Airlines",
        origin: "NYC",
        destination: "SIN",
        price: "$1,120",
        dep: "02:15 PM",
        arr: "06:45 AM",
        duration: "16h 30m",
        visa: "Free Entry",
        fee: "$0",
    },
    {
        id: 3,
        airline: "Emirates",
        origin: "DXB",
        destination: "NYC",
        price: "$880",
        dep: "09:00 AM",
        arr: "03:00 PM",
        duration: "14h 00m",
        visa: "Visa on Arrival",
        fee: "$20",
    },
    {
        id: 4,
        airline: "British Airways",
        origin: "LDN",
        destination: "DXB",
        price: "$720",
        dep: "07:45 PM",
        arr: "06:10 AM",
        duration: "7h 25m",
        visa: "Free Entry",
        fee: "$0",
    },
];

const ServicePage = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [snackbar, setSnackbar] = useState("");

    const showMessage = (msg) => {
        setSnackbar(msg);
        setTimeout(() => setSnackbar(""), 3000);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (!origin || !destination || !departure || !returnDate) {
            showMessage("Please complete all fields.");
            return;
        }

        if (new Date(returnDate) < new Date(departure)) {
            showMessage("Return date cannot be before departure date.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const filtered = allFlights.filter(
                (f) =>
                    f.origin.toLowerCase() === origin.toLowerCase() &&
                    f.destination.toLowerCase() === destination.toLowerCase()
            );

            setResults(filtered);
            setLoading(false);

            if (filtered.length === 0) {
                showMessage("No routes found for this selection.");
            }
        }, 900);
    };

    return (
        <div className="min-h-screen bg-white text-[#111] px-6 pt-[120px] pb-24 relative">
            <div className="max-w-[1300px] mx-auto">

                {/* HEADER */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className="mb-20 max-w-4xl"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
                        Search Flights
                        <span className="text-[#3A74FF]"> & Visa Pricing</span>
                    </h1>

                    <p className="text-gray-400 mt-6 max-w-xl text-xs">
                        *Fare availability, pricing, and visa information are subject to
                        third-party airline and regulatory updates. By proceeding, you
                        acknowledge our Privacy Policy and Terms of Service.
                    </p>
                </motion.header>

                {/* SEARCH FORM */}
                <motion.form
                    onSubmit={handleSearch}
                    layout
                    transition={spring}
                    className="border border-gray-100 rounded-3xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
                >
                    {/* ORIGIN */}
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase text-gray-400 mb-2">
                            Origin
                        </label>
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-3 focus-within:border-[#3A74FF] transition-colors">
                            <MapPin size={16} className="text-gray-300" />
                            <input
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                                placeholder="NYC / DXB"
                                className="w-full outline-none bg-transparent text-lg uppercase"
                            />
                        </div>
                    </div>

                    {/* DESTINATION */}
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase text-gray-400 mb-2">
                            Destination
                        </label>
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-3 focus-within:border-[#3A74FF] transition-colors">
                            <MapPin size={16} className="text-gray-300" />
                            <input
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder="LDN / SIN"
                                className="w-full outline-none bg-transparent text-lg uppercase"
                            />
                        </div>
                    </div>

                    {/* DEPARTURE */}
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase text-gray-400 mb-2">
                            Departure
                        </label>
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-3 focus-within:border-[#3A74FF] transition-colors">
                            <Calendar size={16} className="text-gray-300" />
                            <input
                                type="date"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                min={new Date().toISOString().split("T")[0]}
                                className="w-full outline-none bg-transparent text-sm"
                            />
                        </div>
                    </div>

                    {/* RETURN */}
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase text-gray-400 mb-2">
                            Return
                        </label>
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-3 focus-within:border-[#3A74FF] transition-colors">
                            <Calendar size={16} className="text-gray-300" />
                            <input
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                min={departure || new Date().toISOString().split("T")[0]}
                                className="w-full outline-none bg-transparent text-sm"
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:col-span-2 flex items-end">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={spring}
                            className="w-full h-[56px] bg-[#3A74FF] text-white text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-black transition-colors duration-300"
                        >
                            {loading ? "Searching..." : "Check Availability"}
                        </motion.button>
                    </div>
                </motion.form>

                {/* RESULTS */}
                <div className="mt-20 space-y-8">
                    <AnimatePresence>
                        {results.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={spring}
                                whileHover={{ y: -3 }}
                                className="border border-gray-100 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8"
                            >
                                <div className="lg:col-span-6">
                                    <p className="text-xs uppercase font-bold text-gray-400 mb-3">
                                        {item.airline}
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <div>
                                            <p className="text-2xl font-semibold">{item.dep}</p>
                                            <p className="text-xs text-gray-400 uppercase">
                                                {item.origin}
                                            </p>
                                        </div>

                                        <ArrowRight size={20} className="text-gray-200" />

                                        <div>
                                            <p className="text-2xl font-semibold">{item.arr}</p>
                                            <p className="text-xs text-gray-400 uppercase">
                                                {item.destination}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 flex items-center">
                                    <Info size={16} className="text-[#3A74FF] mr-2" />
                                    {item.visa}
                                </div>

                                <div className="lg:col-span-3 flex items-center justify-end gap-6">
                                    <div className="text-right">
                                        <p className="text-3xl font-semibold">{item.price}</p>
                                        <p className="text-xs text-gray-400 uppercase">
                                            Incl. Taxes
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={spring}
                                        className="border border-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                                    >
                                        Book
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* SNACKBAR */}
            <AnimatePresence>
                {snackbar && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={spring}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full text-sm tracking-wide"
                    >
                        {snackbar}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicePage;