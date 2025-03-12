import TestimonialCard from "@/features/home/components/testimonial.card.jsx";
import {testimonials} from "@/data/testimonial.js";
import Marquee from "react-fast-marquee";

const desktopCol1 = testimonials.filter((_, i) => i % 3 === 0);
const desktopCol2 = testimonials.filter((_, i) => i % 3 === 1);
const desktopCol3 = testimonials.filter((_, i) => i % 3 === 2);

const mobileRow1 = testimonials.filter((_, i) => i % 3 === 0);
const mobileRow2 = testimonials.filter((_, i) => i % 3 === 1);
const mobileRow3 = testimonials.filter((_, i) => i % 3 === 2);

export default function TestimonialSection() {
    return (
        <section className="py-4 overflow-hidden">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-6xl font-semibold text-black mb-8 lg:w-[50rem]">
                    What Our Customers Says About Us
                </h1>

                {/* Desktop View */}
                <div className="hidden md:flex gap-2 justify-between"> {/* Reduced gap */}
                    {/* Columns 1-3 */}
                    {[desktopCol1, desktopCol2, desktopCol3].map((column, colIndex) => (
                        <div
                            key={colIndex}
                            className="w-1/3 overflow-hidden relative"
                            style={{height: "400px"}}
                        >
                            <Marquee
                                pauseOnHover
                                speed={60} // Increased speed
                                direction="left"
                                style={{
                                    transform: colIndex === 1 ? "rotate(-90deg)" : "rotate(90deg)",
                                    overflow: "visible",
                                    width: "400px", // Match container height
                                    height: "var(--card-width)" // Add CSS variable for card width
                                }}
                            >
                                {/* Duplicate cards for seamless loop */}
                                {[...column, ...column].map((testimonial, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            transform: colIndex === 1 ? "rotate(90deg)" : "rotate(-90deg)",
                                            display: "inline-block",
                                            margin: "0 -2px", // Negative margin to reduce gap
                                            padding: "0",
                                            verticalAlign: "top"
                                        }}
                                    >
                                        <TestimonialCard
                                            testimonial={testimonial}
                                            className="mx-0" // Remove horizontal margin
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    ))}
                </div>


                {/* Mobile View */}
                <div className="md:hidden flex flex-col gap-4">
                    {/* Row 1: Right-to-left */}
                    <div className="w-full overflow-hidden">
                        <Marquee gradient={false} pauseOnHover speed={30} direction="right">
                            {mobileRow1.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            ))}
                        </Marquee>
                    </div>

                    {/* Row 2: Left-to-right */}
                    <div className="w-full overflow-hidden">
                        <Marquee gradient={false} pauseOnHover speed={30} direction="left">
                            {mobileRow2.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            ))}
                        </Marquee>
                    </div>

                    {/* Row 3: Right-to-left */}
                    <div className="w-full overflow-hidden">
                        <Marquee gradient={false} pauseOnHover speed={30} direction="right">
                            {mobileRow3.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
}
