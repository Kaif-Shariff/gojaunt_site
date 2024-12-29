import LeftSide from "../components/leftSide.jsx";
import RightSide from "../components/rightSide.jsx";

function HomePage() {
    return (
        <div>
            <div className="md:flex md:items-center md:justify-center">
                <LeftSide/>
                <RightSide/>
            </div>
            <section className="mt-10">
                <div className="text-center">
                    <h1 className="text-3xl md:text-6xl font-bold">Our Company</h1>
                    <h2 className="text-lg px-4 md:text-xl md:px-64 mt-6">Whether it&#39;s your first
                        adventure or your next escape,
                        we bring you experiences that make every journey unforgettable. Explore, enjoy, and repeat!</h2>
                </div>

                <div className="p-4 md:p-16">
                    <img src="/map.jpg" alt="Map" className="rounded-xl"/>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
