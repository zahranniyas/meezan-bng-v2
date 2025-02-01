import { heroBg } from "../assets";
import SubHeader from "../components/SubHeader";

const HeroHatale = () => {
  return (
    <div
      className="h-[calc(30dvh-60px)]  items-center w-full bg-black flex flex-col text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#e6d199",
      }}
    >
      <SubHeader />
      <h1 className="text-4xl text-center mt-[120px] max-sm:mt-[110px] max-sm:text-xl">
        Hatale Tea Estate Bungalow
      </h1>
    </div>
  );
};

export default HeroHatale;
