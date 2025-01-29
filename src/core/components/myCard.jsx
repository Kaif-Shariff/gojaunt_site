import {Button} from "@/components/ui/button.jsx";

export default function MyCard({ title, location, image }) {
    return (
        <div className="relative w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
            />

            {/* Stained Glass Effect */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent mix-blend-multiply"/>

            {/* Overlay Content */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4 flex justify-between items-center">
                <div>
                    <h2 className="text-white text-lg font-semibold">{title}</h2>
                    <p className="text-gray-300 text-sm">{location}</p>
                </div>
                <Button
                    className="px-4 py-2 border border-white text-white font-medium rounded-lg bg-transparent hover:bg-white hover:text-gray-900 transition"
                >
                    Enquire
                </Button>
            </div>
        </div>
    );
}
