import {services} from "@/data/services.js";
import ServiceCard from "@/features/home/components/service.card.jsx";

export function ServicesSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-6xl font-semibold text-black mb-8">
                    Tailored Travel Solutions <br/> for Every Adventure
                </h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
