import AboutAnac from "../anacoombra/AboutAnac";
import AttractionsAnac from "../anacoombra/AttractionsAnac";
import ContactAnac from "../anacoombra/ContactAnac";
import FacilitiesAnac from "../anacoombra/FacilitiesAnac";
import FooterAnac from "../anacoombra/FooterAnac";
import HeroAnac from "../anacoombra/HeroAnac";
import IndFacilitiesAnac from "../anacoombra/IndFacilitiesAnac";
import MetaData from "../components/MetaData";

const Anacoombra = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Ancoombura Tea Estate Bungalow" />
      <HeroAnac />
      <AboutAnac />
      <FacilitiesAnac />
      <IndFacilitiesAnac />
      <AttractionsAnac />
      <ContactAnac />
      <FooterAnac />
    </div>
  );
};

export default Anacoombra;
