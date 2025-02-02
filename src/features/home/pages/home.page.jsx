import {ServicesSection} from "@/features/home/components/ourService.jsx";
import ExploreSection from "@/features/home/components/explore.section.jsx";
import LandingSection from "@/features/home/components/landing.section.jsx";

function HomePage() {
    return (<div>
        <LandingSection/>
        <ExploreSection/>
        <ServicesSection/>
    </div>);
}

export default HomePage;
