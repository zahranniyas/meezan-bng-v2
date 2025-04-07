import { heroBgAnac } from "../assets";
import SubHeader from "../components/SubHeader";

const HeroWorld = () => {
  return (
    <div
      className="h-[calc(30dvh-60px)]  items-center w-full bg-black flex flex-col text-white"
      style={{
        backgroundImage: `url(${heroBgAnac})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#99c6e6",
      }}
    >
      <SubHeader
        primaryColor="rgba(25, 66, 40, 1)"
        secondaryColor="#C8FAD8"
        thirdColor="#47B65B"
      />
      <h1 className="text-4xl text-center mt-[120px] max-sm:mt-[110px] max-sm:text-xl">
        Ancoombura Tea Estate Bungalow
      </h1>
    </div>
  );
};

export default HeroWorld;
