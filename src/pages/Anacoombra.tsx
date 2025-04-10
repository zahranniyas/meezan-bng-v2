import AboutAnac from "../anacoombra/AboutAnac";
import AttractionsAnac from "../anacoombra/AttractionsAnac";
import ContactAnac from "../anacoombra/ContactAnac";
import FacilitiesAnac from "../anacoombra/FacilitiesAnac";
import FooterAnac from "../anacoombra/FooterAnac";
import GalleryAnac from "../anacoombra/GalleryAnac";
import HeroAnac from "../anacoombra/HeroAnac";
import IndFacilitiesAnac from "../anacoombra/IndFacilitiesAnac";
import Quote from "../anacoombra/Quote";
import RoomAnac from "../anacoombra/RoomAnac";
import View from "../anacoombra/View";
import ViewAnac from "../anacoombra/ViewAnac";
import MetaData from "../components/MetaData";

const Anacoombra = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Ancoombura Tea Estate Bungalow" />
      <HeroAnac />
      <Quote />
      <ViewAnac />
      {/* <AboutAnac /> */}
      <RoomAnac />
      <FacilitiesAnac />
      <IndFacilitiesAnac />
      <AttractionsAnac />
      <GalleryAnac />
      <ContactAnac />
      <FooterAnac />
    </div>
  );
};

export default Anacoombra;
