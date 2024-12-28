import LeftSide from "../components/leftSide.jsx";
import RightSide from "../components/rightSide.jsx";

function HomePage() {
    return (
        <div>

            <div className="md:flex md:items-center md:justify-center">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    );
}

export default HomePage;
