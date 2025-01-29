export default function  MyCard() {
    return (
        <div className="relative w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
            {/* Background Image */}
            <img
                src="assets/eiffel.jpg"
                alt="Background"
                className="w-full h-64 object-cover"
            />

            {/* Stained Glass Effect Card */}
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-lg backdrop-blur-sm bg-white/30 border border-white/20 shadow-md">
                {/* Stained Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A8A8A9] via-[#6EBFF4]/30 to-[B7C0C9]/0 rounded-lg mix-blend-overlay"></div>

                {/* Content */}
                <h2 className="text-xl font-bold text-white drop-shadow-md">Eiffel Tower</h2>
                <p className="text-sm text-white/80 drop-shadow-md">Enquire</p>
                <p className="text-sm text-white/80 drop-shadow-md">Paris, France</p>
            </div>
        </div>
    );
};
