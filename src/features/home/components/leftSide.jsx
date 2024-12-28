import SearchControl from "./searchControl.jsx";

export default function LeftSide() {
    return (
        <div>
            <div className="text-2xl font-bold text-center px-2 lg:text-5xl lg:text-left">
                <h1>
                    Explore . Enjoy . Repeat
                </h1>
                <h1 className="lg:py-3">
                    Where every journey is a delight
                </h1>
            </div>

            <SearchControl/>
        </div>
    );
}
