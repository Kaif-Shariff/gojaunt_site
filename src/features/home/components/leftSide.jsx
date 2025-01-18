import {Button} from "@/components/ui/button"

export default function LeftSide() {
    return (
        <div>
            <div className="text-center flex flex-col items-center lg:items-start lg:text-left">
                <h1 className=" font-stardom text-3xl font-bold lg:text-6xl lg:py-3 lg:px-4">
                    Gojaunt, where Every Journey Brings Joy
                </h1>
                <h3 className="text-sm font-medium text-center mt-3 px-6 lg:pl-4 lg:pr-56 lg:text-left lg:text-2xl lg:mt-2">
                    Embark on a journey where every moment holds a chance for discovery. From lively city streets to
                    serene natural wonders
                </h3>
                <Button className="my-4 w-36 text-md md:w-40 md:text-lg lg:mx-0 lg:px-0 lg:ml-4">
                    Book a service
                </Button>
            </div>
        </div>
    );
}
