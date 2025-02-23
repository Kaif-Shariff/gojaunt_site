import { services } from "@/data/services.js";
import ServiceCard from "@/features/home/components/service.card.jsx";

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-6xl font-semibold text-black mb-8">
          Tailored Travel Solutions <br /> for Every Adventure
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
