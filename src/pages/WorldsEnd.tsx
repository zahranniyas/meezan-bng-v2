import MetaData from "../components/MetaData";
import AboutWorld from "../worldsend/AboutWorld";
import AttractionsWorld from "../worldsend/AttractionsWorld";
import ContactWorld from "../worldsend/ContactWorld";
import FacilitiesWorld from "../worldsend/FacilitiesWorld";
import FooterWorld from "../worldsend/FooterWorld";
import HeroWorld from "../worldsend/HeroWorld";
import IndFacilitiesWorld from "../worldsend/IndFacilitiesWorld";

const WorldsEnd = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Mini World's End Bungalow" />
      <HeroWorld />
      <AboutWorld />
      <FacilitiesWorld />
      <IndFacilitiesWorld />
      <AttractionsWorld />
      <ContactWorld />
      <FooterWorld />
    </div>
  );
};

export default WorldsEnd;
