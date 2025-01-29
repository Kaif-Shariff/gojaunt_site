import {useState} from "react";
import {destinations} from "@/data/destinations.js";
import {Button} from "@/components/ui/button.jsx";
import MyCard from "@/core/components/myCard.jsx";
import {ChevronLeft, ChevronRight} from 'lucide-react';

export default function ExploreSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="w-full px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl sm:text-6xl font-semibold text-black">
                    Dive Into The Beauty <br/> Of The World
                </h1>

                <div className="flex gap-4">
                    <Button
                        className="p-2 bg-gray-200 text-black rounded-full hover:bg-gray-300"
                        onClick={handlePrev}
                    >
                        <ChevronLeft/>
                    </Button>
                    <Button
                        className="text-white rounded-full hover:bg-gray-300"
                        onClick={handleNext}
                    >
                        <ChevronRight/>
                    </Button>
                </div>
            </div>

            <div className="relative">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    {destinations.map((item, index) => (
                        <div
                            key={item.id}
                            className={`snap-center transition-transform duration-500 ease-in-out transform ${
                                index === currentIndex ? "scale-100" : "scale-95 opacity-50"
                            }`}
                        >
                            <MyCard
                                title={item.title}
                                location={item.location}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
                {destinations.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? "bg-primary" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
