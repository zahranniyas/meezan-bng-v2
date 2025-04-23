import { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";

const HeroHat = () => {
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
          backgroundImage: "url('/hatale/6620.jpg')",
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
          backgroundImage: "url('/hatale/6605.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "#99c6e6",
        }}
      ></div>
      <SubHeader
        primaryColor="rgba(55, 50, 37, 1)"
        secondaryColor="#e6d199"
        thirdColor="#b69747"
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen w-full items-center justify-center">
        <h1 className="text-6xl text-center max-sm:text-3xl mt-[360px] opacity-80">
          Hatale Tea Estate <br /> Bungalow
        </h1>
      </div>
    </div>
  );
};

export default HeroHat;
