import LeftSide from "../components/leftSide.jsx";
import RightSide from "../components/rightSide.jsx";
import {ServicesSection} from "@/features/home/components/ourService.jsx";
import ExploreSection from "@/features/home/components/explore.section.jsx";

function HomePage() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-center lg:px-12">
                <LeftSide/>
                <RightSide/>
            </div>
            <ExploreSection/>
            <ServicesSection/>
        </div>
    );
}

export default HomePage;
