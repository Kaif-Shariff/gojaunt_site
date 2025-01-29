import LeftSide from "../components/leftSide.jsx";
import RightSide from "../components/rightSide.jsx";
import TestimonialSection from "@/features/home/components/testimonialSection.jsx";
import {ServiceSection2} from "@/features/home/components/service.jsx";
import MyCard from "@/core/components/myCard.jsx";

function HomePage() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-center lg:px-12">
                <LeftSide/>
                <RightSide/>
            </div>


            <MyCard/>

            <ServiceSection2/>
            <TestimonialSection/>

        </div>
    );
}

export default HomePage;
