import AttractionsAnac from "../bungalows/anacoombra/AttractionsAnac";
import ContactAnac from "../bungalows/anacoombra/ContactAnac";
import FacilitiesAnac from "../bungalows/anacoombra/FacilitiesAnac";
import FooterAnac from "../bungalows/anacoombra/FooterAnac";
import GalleryAnac from "../bungalows/anacoombra/GalleryAnac";
import HeroAnac from "../bungalows/anacoombra/HeroAnac";
import IndFacilitiesAnac from "../bungalows/anacoombra/IndFacilitiesAnac";
import QuoteAnac from "../bungalows/anacoombra/QuoteAnac";
import RoomAnac from "../bungalows/anacoombra/RoomAnac";
import RoomsImagesAnac from "../bungalows/anacoombra/RoomsImagesAnac";
import ViewAnac from "../bungalows/anacoombra/ViewAnac";
import FoodAnac from "../components/FoodAnac";
import HeliPad from "../components/HeliPad";
import MetaData from "../components/MetaData";

const Anacoombra = () => {
  return (
    <div className="font-el-messiri">
      <MetaData title="Ancoombura Tea Estate Bungalow" />
      <HeroAnac />
      <QuoteAnac />
      <ViewAnac />
      <RoomAnac />
      <RoomsImagesAnac />
      <HeliPad />
      <FoodAnac />
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
