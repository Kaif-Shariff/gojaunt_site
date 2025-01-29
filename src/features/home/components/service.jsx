import { Frame, Gauge, Download, Globe, Sparkles, LayoutDashboard, Palette } from "lucide-react";
import {FeatureHoverCard} from "@/features/home/components/featurehovercard.jsx";

export function ServiceSection2() {
    return (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
            <div className="flex flex-col gap-3">
                <span className="font-bold uppercase text-primary text-center">Features</span>
                <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
                    Build fast and stay flexible
                </h2>
            </div>
            <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
                Reweb brings the best of two worlds together: the speed of development of no-code tools, and
                the flexibility of code.
            </p>
            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
                <FeatureHoverCard
                    title="Plane Ticket Booking"
                    description="Effortless booking for domestic and international flights at competitive rates."
                    icon={Frame}
                    className="lg:border-l"
                />
                <FeatureHoverCard
                    title="Visa Service"
                    description="Streamlined visa application assistance for stress-free international travel."
                    icon={Gauge}
                />
                <FeatureHoverCard
                    title="Hotel Booking"
                    description="Find the perfect accommodation that matches your style and budget."
                    icon={Download}
                />
                <FeatureHoverCard
                    title="Tour Packages"
                    description="Customized packages that make your dream trips come true."
                    icon={Globe}
                />
                <FeatureHoverCard
                    title="Car Rental Services"
                    description="Convenient and affordable car rentals to explore your destinations freely."
                    icon={Sparkles}
                    className="lg:border-l lg:border-b-0 hover:bg-gradient-to-b"
                />
                <FeatureHoverCard
                    title="Travel Insurance"
                    description="Secure your trip with reliable protection against unexpected events."
                    icon={LayoutDashboard}
                    className="lg:border-b-0 hover:bg-gradient-to-b"
                />
                <FeatureHoverCard
                    title="Railway Ticket Booking"
                    description="
Easy booking for hassle-free train travel."
                    icon={Palette}
                    className="lg:border-b-0 hover:bg-gradient-to-b"
                />
            </div>
        </section>
    );
}
