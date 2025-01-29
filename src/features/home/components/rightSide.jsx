export default function RightSide() {
    return (
        <div className="p-4">
            <div className="flex flex-row items-start">
                {/* Left container */}
                <div
                    className="w-64 h-[20rem] md:h-[28rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[3rem]"
                    style={{backgroundImage: "url('assets/eiffelTower.jpg')"}}
                >
                </div>

                {/* Right container */}
                <div
                    className="w-64 h-[18rem] lg:h-[26rem] bg-cover bg-center rounded-[2.5rem] md:rounded-[3rem] mt-[5rem] md:mt-28 -ml-10"
                    style={{backgroundImage: "url('assets/bigBen.jpg')"}}
                >
                </div>

            </div>
        </div>
    );
}
