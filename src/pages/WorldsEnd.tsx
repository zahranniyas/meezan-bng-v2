import Footer from "../components/Footer";
import MetaData from "../components/MetaData";
import AboutWorld from "../worldsend/AboutWorld";
import AttractionsWorld from "../worldsend/AttractionsWorld";
import ContactWorld from "../worldsend/ContactWorld";
import FacilitiesWorld from "../worldsend/FacilitiesWorld";
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
      <Footer />
    </div>
  );
};

export default WorldsEnd;
