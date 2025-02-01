import MetaData from "../components/MetaData";
import AboutNagala from "../nagala/AboutNagala";
import AttractionsNagala from "../nagala/AttractionsNagala";
import ContactNagala from "../nagala/ContactNagala";
import FacilitiesNagala from "../nagala/FacilitiesNagala";
import FooterNagala from "../nagala/FooterNagala";
import HeroNagala from "../nagala/HeroNagala";
import IndFacilitiesNagala from "../nagala/IndFacilitiesNagala";

const Nagala = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Nagala Bungalow" />
      <HeroNagala />
      <AboutNagala />
      <FacilitiesNagala />
      <IndFacilitiesNagala />
      <AttractionsNagala />
      <ContactNagala />
      <FooterNagala />
    </div>
  );
};

export default Nagala;
