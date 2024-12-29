export default function AboutPage() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl md:text-6xl font-bold">Our Company</h1>
                <h2 className="text-lg px-4 md:text-xl md:px-64 mt-6">Whether it&#39;s your first
                    adventure or your next escape,
                    we bring you experiences that make every journey unforgettable. Explore, enjoy, and repeat!</h2>
            </div>

            <div className="p-4 md:p-16">
                <img src="/map.jpg" alt="Map" className="rounded-xl"/>
            </div>

            {/* Dreams section */}
            <div
                className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 mb-4">
                {/* Image */}
                <div className="w-full md:w-96 flex justify-center">
                    <img src="/dream.jpg" alt="Map" className="w-full md:w-96"/>
                </div>

                {/* Call to action */}
                <div className="text-center md:text-left space-y-4 px-4 md:px-0">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Dream Until Your <br/>
                        Dream Comes True
                    </h1>
                    <h3 className="text-base md:text-xl">
                        Our services will help you achieve your travel dreams in no time!
                    </h3>

                    <button
                        className="bg-primary text-sm md:text-md text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none">
                        See more
                    </button>
                </div>
            </div>
        </div>
    );
}

