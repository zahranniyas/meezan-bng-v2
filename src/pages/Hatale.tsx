import MetaData from "../components/MetaData";
import SubHeader from "../components/SubHeader";
import AboutHatale from "../hatale/AboutHatale";
import AttractionsHatale from "../hatale/AttractionsHatale";
import ContactHatale from "../hatale/ContactHatale";
import FacilitiesHatale from "../hatale/FacilitiesHatale";
import FooterHatale from "../hatale/FooterHatale";
import HeroHatale from "../hatale/HeroHatale";
import IndFacilitiesHatale from "../hatale/IndFacilitiesHatale";

const Hatale = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Hatale Tea Estate Bungalow" />
      <HeroHatale />
      <AboutHatale />
      <FacilitiesHatale />
      <IndFacilitiesHatale />
      <AttractionsHatale />
      <ContactHatale />
      <FooterHatale />
    </div>
  );
};

export default Hatale;
