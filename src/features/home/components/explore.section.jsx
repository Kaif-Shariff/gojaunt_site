import {useState, useEffect, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {destinations} from "@/data/destinations.js";
import MyCard from "@/core/components/myCard.jsx";

export default function ExploreSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        breakpoints: {
            '(max-width: 767px)': {align: 'start'}
        }
    })

    const handlePrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            const index = emblaApi.selectedScrollSnap()
            setCurrentIndex(index % destinations.length)
        }

        emblaApi.on('select', onSelect)
        return () => emblaApi.off('select', onSelect)
    }, [emblaApi])

    return (
        <section className="w-full px-4 py-8 relative">
            {/* Heading & Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-8 space-y-4 sm:space-y-0">
                <h1 className="text-3xl sm:text-6xl font-semibold text-black text-left">
                    Dive Into The Beauty<br/>Of The World
                </h1>

                <div className="flex gap-12">
                    <button
                        className=" text-black rounded-full hover:bg-[#3A74FF] hover:text-white p-2"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        className="bg-[#3A74FF] text-white rounded-full p-2"
                        onClick={handleNext}
                    >
                        <ChevronRight size={40}/>
                    </button>
                </div>
            </div>

            {/* Carousel Wrapper */}
            <div className="relative w-full overflow-hidden">
                {/* Fade effect on the sides */}
                <div
                    className="absolute top-0 left-0 w-52 h-full bg-gradient-to-r from-white to-transparent pointer-events-none hidden sm:block z-10"/>
                <div
                    className="absolute top-0 right-0 w-52 h-full bg-gradient-to-l from-white to-transparent pointer-events-none hidden sm:block z-10"/>

                {/* Embla Carousel */}
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {destinations.map((item, index) => (
                            <div className="embla__slide" key={index}>
                                <div>
                                    <MyCard title={item.title} location={item.location} image={item.image}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {destinations.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? "bg-[#3A74FF]" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
