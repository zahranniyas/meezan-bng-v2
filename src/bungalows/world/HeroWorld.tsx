import { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";

const HeroWorld = () => {
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
          backgroundImage: "url('/world/7247.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          backgroundImage: "url('/world/7364.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "#99c6e6",
        }}
      ></div>
      <SubHeader
        primaryColor="rgba(17, 36, 59, 1)"
        secondaryColor="#c3e3fa"
        thirdColor="#4786b6"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen w-full items-center justify-center">
        <h1 className="text-6xl text-center max-sm:text-3xl mt-[360px] opacity-80">
          Mini World's End <br /> Bungalow
        </h1>
      </div>
    </div>
  );
};

export default HeroWorld;
