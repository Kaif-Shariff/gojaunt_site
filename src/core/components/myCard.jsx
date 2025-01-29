export default function  MyCard() {
    return (
        <div className="relative w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
            {/* Background Image */}
            <img
                src="eiffelTower.jpg"
                alt="Eiffel Tower"
                className="w-full h-64 object-cover"
            />

            {/* Stained Glass Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent mix-blend-multiply" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4 flex justify-between items-center">
                <div>
                    <h2 className="text-white text-lg font-semibold">Eiffel Tower</h2>
                    <p className="text-gray-300 text-sm">Paris, France</p>
                </div>
                <button className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg shadow-md hover:bg-gray-100 transition">
                    Enquire
                </button>
            </div>
        </div>
    );
}
