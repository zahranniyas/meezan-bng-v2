import AttractionsWorld from "../bungalows/world/AttractionsWorld";
import ContactWorld from "../bungalows/world/ContactWorld";
import FacilitiesWorld from "../bungalows/world/FacilitiesWorld";
import FooterWorld from "../bungalows/world/FooterWorld";
import GalleryWorld from "../bungalows/world/GalleryWorld";
import HeroWorld from "../bungalows/world/HeroWorld";
import IndFacilitiesWorld from "../bungalows/world/IndFacilitiesWorld";
import QuoteWorld from "../bungalows/world/QuoteWorld";
import RoomsImagesWorld from "../bungalows/world/RoomsImagesWorld";
import RoomWorld from "../bungalows/world/RoomWorld";
import ViewWorld from "../bungalows/world/ViewWorld";
import MetaData from "../components/MetaData";

const WorldsEnd = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Mini World's End Bungalow" />
      <HeroWorld />
      <QuoteWorld />
      <ViewWorld />
      <RoomWorld />
      <RoomsImagesWorld />
      <FacilitiesWorld />
      <IndFacilitiesWorld />
      <AttractionsWorld />
      <GalleryWorld />
      <ContactWorld />
      <FooterWorld />
    </div>
  );
};

export default WorldsEnd;
