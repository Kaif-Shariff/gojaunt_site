import Marquee from "react-fast-marquee";
import TestimonialCard from "@/features/home/components/testimonial.card.jsx";
import { testimonials } from "@/data/testimonial.js";

export default function TestimonialSection() {
    const half = Math.ceil(testimonials.length / 2);
    const firstRow = testimonials.slice(0, half);
    const secondRow = testimonials.slice(half);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
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
                        Client Stories
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
                        Building trust through seamless journeys and unforgettable global adventures
                    </p>

                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-10">
                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {firstRow.map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                    ))}
                    {firstRow.map((testimonial, index) => (
                        <TestimonialCard key={`row1-dup-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>

                <Marquee speed={50} gradient={false} direction="right" pauseOnHover={true}>
                    {secondRow.map((testimonial, index) => (
                        <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                    ))}
                    {secondRow.map((testimonial, index) => (
                        <TestimonialCard key={`row2-dup-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}