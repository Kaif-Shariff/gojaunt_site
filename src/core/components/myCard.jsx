import {Button} from "@/components/ui/button.jsx";
import {MapPin} from 'lucide-react';
import OptimizedImage from "@/core/components/optimizeimage.jsx";

export default function MyCard({title, location, image}) {
    return (
        <div className="relative w-80 h-52 md:w-[28rem] md:h-80 max-w-md rounded-2xl shadow-lg overflow-hidden">
            {/* Background Image */}
            <OptimizedImage
                src={image}
                alt={title}
                className="w-full object-cover"
            />

            {/* Stained Glass Effect */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent mix-blend-multiply"/>

            {/* Overlay Content */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-4 flex justify-between items-center">
                <div>
                    <h2 className="text-white text-xl">{title}</h2>
                    <p className="text-gray-300 text-sm inline-flex items-center gap-1">
                        <MapPin size={14}/> {location}
                    </p>
                </div>

                <Button
                    className="px-6 py-2 border border-[#B5A1A1] text-white font-medium rounded-lg bg-transparent hover:bg-white hover:text-gray-900 transition"
                >
                    Enquire
                </Button>
            </div>
        </div>
    );
}
