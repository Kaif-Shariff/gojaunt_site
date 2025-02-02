import {Button} from "@/components/ui/button.jsx";
const LandingSection = () => {
    return (
        <div className="mt-4 md:mt-0 md:flex md:items-center md:justify-center lg:px-2">
            <div>
                <div className="text-center flex flex-col items-center lg:items-start lg:text-left">
                    <h1 className=" font-stardom text-3xl font-semibold lg:text-[4.5rem]/[4.2rem] lg:py-3 lg:px-4">
                        Gojaunt, where Every Journey Brings Joy
                    </h1>
                    <h3 className="text-sm font-medium text-center mt-3 px-6 lg:pl-4 lg:pr-52 lg:text-left lg:text-3xl lg:mt-2">
                        Embark on a journey where every moment holds a chance for discovery. From lively city
                        streets to serene natural wonders
                    </h3>
                    <Button className="my-4 w-36 text-md md:w-40 md:text-lg lg:mx-0 lg:px-0 lg:ml-4">
                        Book a service
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <div className="p-4">
                    <div className="flex flex-row items-start">
                        {/* Left container */}
                        <div
                            className="w-64 h-[20rem] md:h-[28rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[3rem]"
                            style={{backgroundImage: "url('assets/eiffelTower.jpg')"}}></div>
                        {/* Right container */}
                        <div
                            className="w-64 h-[18rem] lg:h-[26rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[3rem] mt-[5rem] md:mt-28 -ml-10"
                            style={{backgroundImage: "url('assets/bigBen.jpg')"}}></div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default LandingSection;
