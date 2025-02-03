import TestimonialCard from "@/features/home/components/testimonial.card.jsx";
import {testimonials} from "@/data/testimonial.js";
import Marquee from "react-fast-marquee";

// Assume you have a testimonials array available
// Here we split testimonials into 3 arrays for both desktop and mobile.
const desktopCol1 = testimonials.filter((_, i) => i % 3 === 0);
const desktopCol2 = testimonials.filter((_, i) => i % 3 === 1);
const desktopCol3 = testimonials.filter((_, i) => i % 3 === 2);

// For mobile, you might distribute them similarly into rows:
const mobileRow1 = testimonials.filter((_, i) => i % 3 === 0);
const mobileRow2 = testimonials.filter((_, i) => i % 3 === 1);
const mobileRow3 = testimonials.filter((_, i) => i % 3 === 2);

export default function TestimonialSection() {
    return (
        <section className="py-4 overflow-hidden">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-6xl font-semibold text-black mb-8">
                    What our customers say about us
                </h1>

                {/*
          ─── DESKTOP VIEW ──────────────────────────────
          Render 3 columns with vertical (rotated) marquees.
        */}
                <div className="hidden md:flex gap-4">
                    {/* Column 1 – Animate from bottom-to-top */}
                    <div className="w-1/3 overflow-hidden relative" style={{height: "400px"}}>
                        {/* Rotate the marquee container 90° so that its left-to-right motion becomes bottom-to-top */}
                        <Marquee
                            gradient={false}
                            pauseOnHover
                            speed={30}
                            direction="left"
                            style={{transform: "rotate(90deg)", overflow: "visible"}}
                        >
                            {desktopCol1.map((testimonial, index) => (
                                // Rotate each card back by -90° to appear upright.
                                <div key={index} style={{transform: "rotate(-90deg)"}}>
                                    <TestimonialCard testimonial={testimonial}/>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Column 2 – Animate from top-to-bottom */}
                    <div className="w-1/3 overflow-hidden relative" style={{height: "400px"}}>
                        {/* Rotate the marquee container -90° so that left-to-right becomes top-to-bottom */}
                        <Marquee
                            gradient={false}
                            pauseOnHover
                            speed={30}
                            direction="left"
                            style={{transform: "rotate(-90deg)", overflow: "visible"}}
                        >
                            {desktopCol2.map((testimonial, index) => (
                                // Rotate each card back by 90° to appear upright.
                                <div key={index} style={{transform: "rotate(90deg)"}}>
                                    <TestimonialCard testimonial={testimonial}/>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Column 3 – Animate from bottom-to-top (same as Column 1) */}
                    <div className="w-1/3 overflow-hidden relative" style={{height: "400px"}}>
                        <Marquee
                            gradient={false}
                            pauseOnHover
                            speed={30}
                            direction="left"
                            style={{transform: "rotate(90deg)", overflow: "visible"}}
                        >
                            {desktopCol3.map((testimonial, index) => (
                                <div key={index} style={{transform: "rotate(-90deg)"}}>
                                    <TestimonialCard testimonial={testimonial}/>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/*
          ─── MOBILE VIEW ──────────────────────────────
          Render 3 rows with horizontal marquees.
          The first and third rows animate right-to-left (direction="right"),
          while the middle row animates left-to-right (default).
        */}
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
