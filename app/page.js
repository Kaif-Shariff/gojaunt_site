"use client";
import { WavyBackground } from "./components/ui/wavy-background";
import { FlipWords } from "./components/ui/flip-words";
const HomePage = () => {
  const words = ["delight", "wonder"];
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Gojaunt
      </p>

      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Where every journey is a<FlipWords words={words} /> <br />
      </p>
    </WavyBackground>
  );
};

export default HomePage;
