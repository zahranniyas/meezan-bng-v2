import { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";

const HeroNagala = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center overflow-hidden text-white bg-black">
      {/* Background 1 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showFirst ? "opacity-100 z-0" : "opacity-0 z-0"
        }`}
        style={{
          backgroundImage: "url('/nagala/0033.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundBlendMode: "multiply",
          backgroundColor: "#99c6e6",
        }}
      ></div>

      {/* Background 2 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          !showFirst ? "opacity-100 z-0" : "opacity-0 z-0"
        }`}
        style={{
          backgroundImage: "url('/nagala/7808.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundBlendMode: "multiply",
          backgroundColor: "#99c6e6",
        }}
      ></div>
      <SubHeader
        primaryColor="rgba(66, 25, 38, 1)"
        secondaryColor="#fac8d7"
        thirdColor="#b64766"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen w-full items-center justify-center">
        <h1 className="text-6xl text-center max-sm:text-3xl mt-[360px] opacity-80">
          Nagala <br /> Bungalow
        </h1>
      </div>
    </div>
  );
};

export default HeroNagala;
