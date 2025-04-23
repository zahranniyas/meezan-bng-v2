import AttractionsNagala from "../bungalows/nagala/AttractionsNagala";
import ContactNagala from "../bungalows/nagala/ContactNagala";
import FacilitiesNagala from "../bungalows/nagala/FacilitiesNagala";
import FooterNagala from "../bungalows/nagala/FooterNagala";
import GalleryNagala from "../bungalows/nagala/GalleryNagala";
import HeroNagala from "../bungalows/nagala/HeroNagala";
import IndFacilitiesNagala from "../bungalows/nagala/IndFacilitiesNagala";
import QuoteNagala from "../bungalows/nagala/QuoteNagala";
import RoomNagala from "../bungalows/nagala/RoomNagala";
import RoomsImagesNagala from "../bungalows/nagala/RoomsImagesNagala";
import ViewNagala from "../bungalows/nagala/ViewNagala";
import MetaData from "../components/MetaData";

const Nagala = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Nagala Bungalow" />
      <HeroNagala />
      <QuoteNagala />
      <ViewNagala />
      <RoomNagala />
      <RoomsImagesNagala />
      <FacilitiesNagala />
      <IndFacilitiesNagala />
      <AttractionsNagala />
      <GalleryNagala />
      <ContactNagala />
      <FooterNagala />
    </div>
  );
};

export default Nagala;
