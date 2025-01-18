import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonial.js";

// Reusable TestimonialCard Component
const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-2">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
        </div>
        <p className="text-gray-700 text-sm">{testimonial.content}</p>
    </div>
);

// Reusable TestimonialColumn Component
const TestimonialColumn = ({ testimonials, duration, columnKey }) => {
    const animationSettings = {
        initial: { y: 0 },
        animate: { y: ["0%", "-100%"] },
        transition: { duration, repeat: Infinity, ease: "linear" },
    };

    return (
        <div className="relative flex-1 mask-image-gradient overflow-hidden">
            <motion.div {...animationSettings} className="flex flex-col gap-6">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard
                        key={`${columnKey}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const TestimonialSection = () => {
    return (
        <section className="py-16 bg-gray-100 relative overflow-hidden h-[32rem]">
            <h2 className="text-3xl font-bold text-center mb-12">
                What Our Customers Says about us
            </h2>

            {/* Responsive Wrapper */}
            <div className="relative max-w-7xl mx-auto flex gap-6 flex-col lg:flex-row">
                {/* Column 1 (Visible on Mobile) */}
                <TestimonialColumn
                    testimonials={testimonials}
                    duration={25}
                    columnKey="mobile"
                    className="lg:hidden"
                />

                {/* Columns for Desktop */}
                <div className="hidden lg:flex gap-6 w-full">
                    {/* Column 1 */}
                    <TestimonialColumn
                        testimonials={testimonials}
                        duration={20}
                        columnKey="col1"
                    />

                    {/* Column 2 */}
                    <TestimonialColumn
                        testimonials={testimonials}
                        duration={25}
                        columnKey="col2"
                    />

                    {/* Column 3 */}
                    <TestimonialColumn
                        testimonials={testimonials}
                        duration={22}
                        columnKey="col3"
                    />
                </div>

                {/* Cloudy Blur Effect */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
