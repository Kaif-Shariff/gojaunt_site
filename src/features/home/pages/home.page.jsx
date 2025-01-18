import LeftSide from "../components/leftSide.jsx";
import RightSide from "../components/rightSide.jsx";
import {ServicesSection} from "@/features/home/components/ourService.jsx";
import TestimonialSection from "@/features/home/components/testimonialSection.jsx";

function HomePage() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-center lg:px-12">
                <LeftSide/>
                <RightSide/>
            </div>

            <ServicesSection/>
            <TestimonialSection/>

        </div>
    );
}

export default HomePage;
