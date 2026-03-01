import {services} from "@/data/services.js";
import ServiceCard from "@/features/home/components/service.card.jsx";

export function ServicesSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">

                <div className="mb-16 md:mb-24 max-w-5xl">

                    <h2 className="
                        text-[2.2rem]
        sm:text-2xl
        md:text-5xl
        lg:text-6xl
        xl:text-7xl
        font-black
        md:font-semibold
        text-black
        tracking-tight
        leading-[1.1]
                    ">
                        Our Expertise
                    </h2>

                    <p className="
                         text-[1rem]
        sm:text-xl
        md:text-3xl
        lg:text-3xl
        xl:text-5xl
        font-black
        md:font-semibold
        text-gray-500
        tracking-tight
        leading-[1.1]
        mt-3
                    ">
                        Providing seamless transitions and curated travel experiences
                        across the globe.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}