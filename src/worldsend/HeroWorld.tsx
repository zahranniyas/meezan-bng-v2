import { heroBgWorld } from "../assets";
import SubHeader from "../components/SubHeader";

const HeroWorld = () => {
  return (
    <div
      className="h-[calc(30dvh-60px)]  items-center w-full bg-black flex flex-col text-white"
      style={{
        backgroundImage: `url(${heroBgWorld})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#99c6e6",
      }}
    >
      <SubHeader />
      <h1 className="text-4xl text-center mt-[120px] max-sm:mt-[110px] max-sm:text-xl">
        Mini World's End Bungalow
      </h1>
    </div>
  );
};

export default HeroWorld;
