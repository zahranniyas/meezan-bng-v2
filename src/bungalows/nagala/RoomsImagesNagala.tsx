import CarouselRoom from "../../components/CarouselRoom";

const imageArray = [
  "/nagala/room/DSC_7939take.jpg",
  "/nagala/room/DSC_7944take.jpg",
  "/nagala/room/DSC_7946take.jpg",
  "/nagala/room/DSC_7949take.jpg",
  "/nagala/room/DSC_7950take.jpg",
  "/nagala/room/DSC_7951take.jpg",
  "/nagala/room/DSC_7967take.jpg",
  "/nagala/room/DSC_7973take.jpg",
  "/nagala/room/DSC_7978take.jpg",
  "/nagala/room/DSC_7981take.jpg",
  "/nagala/room/DSC_7988take.jpg",
  "/nagala/room/DSC_8001take.jpg",
  "/nagala/room/DSC_8007take.jpg",
  "/nagala/room/DSC_8011take.jpg",
  "/nagala/room/DSC_8022take.jpg",
  "/nagala/room/DSC_8024take.jpg",
  "/nagala/room/DSC_8025take.jpg",
];

const RoomsImagesNagala = () => {
  return (
    <div className="mt-12 w-full" style={{ perspective: "1000px" }}>
      <CarouselRoom imageArray={imageArray} />
    </div>
  );
};

export default RoomsImagesNagala;
