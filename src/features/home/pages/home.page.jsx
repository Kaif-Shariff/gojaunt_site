import {ServicesSection} from "@/features/home/components/sections/service.section.jsx";
import ExploreSection from "@/features/home/components/sections/explore.section.jsx";
import LandingSection from "@/features/home/components/sections/landing.section.jsx";
import TestimonialSection from "@/features/home/components/sections/testimonial.section.jsx";

function HomePage() {
    return (<div>
        <LandingSection/>
        <ExploreSection/>
        <ServicesSection/>
        <TestimonialSection/>
    </div>);
}

export default HomePage;
