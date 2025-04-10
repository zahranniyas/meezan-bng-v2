import React, { useState, useCallback } from "react";
import { heroBgAnac } from "../assets";
import SubHeader from "../components/SubHeader";

const HeroWorld = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  // Increase movementFactor if you want more dramatic movement
  const movementFactor = 0.01;

  // Center the parallax around the middle of the screen
  const backgroundPosX = 50 + (mousePos.x - window.innerWidth / 2) * movementFactor;
  const backgroundPosY = 50 + (mousePos.y - window.innerHeight / 2) * movementFactor;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-screen items-center w-full bg-black flex flex-col text-white"
      style={{
        backgroundImage: `url(${heroBgAnac})`,
        // Scale up the background to allow for more movement in all directions
        // backgroundSize: "120%",
        backgroundSize: "cover",
        backgroundPosition: `${backgroundPosX}% ${backgroundPosY}%`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "#99c6e6",
      }}
    >
      <SubHeader
        primaryColor="rgba(25, 66, 40, 1)"
        secondaryColor="#C8FAD8"
        thirdColor="#47B65B"
      />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl text-center max-sm:text-xl">
          Ancoombura Tea Estate Bungalow
        </h1>
      </div>
    </div>
  );
};

export default HeroWorld;
