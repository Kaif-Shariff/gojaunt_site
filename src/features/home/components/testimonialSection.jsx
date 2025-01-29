import Marquee from "react-fast-marquee";
import { testimonials } from "@/data/testimonial.js";

// Reusable TestimonialCard Component
const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mx-2">
        <div className="flex items-center gap-4 mb-2">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                {/* <p className="text-sm text-gray-600">{testimonial.role}</p> */}
            </div>
        </div>
        <p className="text-gray-700 text-sm">{testimonial.content}</p>
    </div>
);

const TestimonialSection = () => {
    return (
        <section className="py-16 bg-gray-100 relative overflow-hidden h-[32rem]">
            <h2 className="text-3xl font-bold text-center mb-12">
                Our customer reviews
            </h2>

            {/* Marquee Wrapper */}
            <Marquee
                gradient={false}
                speed={40} // Adjust speed for marquee
                direction="left" // Direction of scrolling
                className="flex items-center"
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Marquee>
        </section>
    );
};

export default TestimonialSection;
