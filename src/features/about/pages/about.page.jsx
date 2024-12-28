import {LuSearch} from "react-icons/lu";

export default function AboutPage() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-6xl font-bold">Our Company</h1>
                <h2 className="text-xl px-64 mt-6">Whether it&#39;s your first
                    adventure or your next escape,
                    we bring you experiences that make every journey unforgettable. Explore, enjoy, and repeat!</h2>
            </div>

            <div
                className="p-16"
            >
                <img src="/map.jpg" alt="Map" className="rounded-xl"/>
            </div>

            {/* Dreams section */}
            <div
                className="flex items-center justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4">
                {/* Image */}
                <div className="w-full md:w-96 flex justify-center">
                    <img src="/dream.jpg" alt="Map" className="w-full md:w-96"/>
                </div>

                {/* Call to action */}
                <div className="text-center md:text-left space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Dream Until Your <br/>
                        Dream Comes True
                    </h1>
                    <h3 className="text-lg md:text-xl">
                        Our services will help you achieve your travel dreams in no time!
                    </h3>

                    <button
                        className="bg-primary text-md text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none">
                        See more
                    </button>
                </div>
            </div>

        </div>
    );
}

