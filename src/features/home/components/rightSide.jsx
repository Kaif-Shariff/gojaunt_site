export default function RightSide() {
    return (
        <div className="p-4">
            <div className="flex flex-row items-start">
                {/* Left container */}
                <div
                    className="w-64 h-[28rem] bg-cover bg-center rounded-[3rem]"
                    style={{backgroundImage: "url('eifelTower.jpg')"}}
                >
                </div>

                {/* Right container */}
                <div
                    className="w-64 h-[26rem] bg-cover bg-center rounded-[3rem] mt-28 -ml-10"
                    style={{backgroundImage: "url('bigBen.jpg')"}}
                >
                </div>

            </div>
        </div>
    );
}
