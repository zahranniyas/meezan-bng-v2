import AttractionsHatale from "../bungalows/hatale/AttractionsHatale";
import ContactHatale from "../bungalows/hatale/ContactHatale";
import FacilitiesHatale from "../bungalows/hatale/FacilitiesHatale";
import FooterHatale from "../bungalows/hatale/FooterHatale";
import GalleryHat from "../bungalows/hatale/GalleryHat";
import HeroHat from "../bungalows/hatale/HeroHat";
import IndFacilitiesHatale from "../bungalows/hatale/IndFacilitiesHatale";
import QuoteHat from "../bungalows/hatale/QuoteHat";
import RoomHat from "../bungalows/hatale/RoomHat";
import RoomsImagesHat from "../bungalows/hatale/RoomsImagesHat";
import ViewHat from "../bungalows/hatale/ViewHat";
import MetaData from "../components/MetaData";

const Hatale = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Hatale Tea Estate Bungalow" />
      <HeroHat />
      <QuoteHat />
      <ViewHat />
      <RoomHat />
      <RoomsImagesHat />
      <FacilitiesHatale />
      <IndFacilitiesHatale />
      <AttractionsHatale />
      <GalleryHat />
      <ContactHatale />
      <FooterHatale />
    </div>
  );
};

export default Hatale;
