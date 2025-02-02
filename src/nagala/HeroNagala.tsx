import { heroBgNagala } from "../assets";
import SubHeader from "../components/SubHeader";

const HeroNagala = () => {
  return (
    <div
      className="h-[calc(30dvh-60px)]  items-center w-full bg-black flex flex-col text-white"
      style={{
        backgroundImage: `url(${heroBgNagala})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#e6d199",
      }}
    >
      <SubHeader
        primaryColor="rgba(66, 25, 38, 1)"
        secondaryColor="#fac8d7"
        thirdColor="#b64766"
      />
      <h1 className="text-4xl text-center mt-[120px] max-sm:mt-[110px] max-sm:text-xl">
        Nagala Bungalow
      </h1>
    </div>
    // rgba(55,50,37,0)
  );
};

export default HeroNagala;
