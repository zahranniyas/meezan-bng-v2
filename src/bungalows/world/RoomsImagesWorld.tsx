import CarouselRoom from "../../components/CarouselRoom";

const imageArray = [
  "/world/room/DSC_7273take.jpg",
  "/world/room/DSC_7278take.jpg",
  "/world/room/DSC_7281take.jpg",
  "/world/room/DSC_7284take.jpg",
  "/world/room/DSC_7299take.jpg",
  "/world/room/DSC_7327take.jpg",
  "/world/room/DSC_7328take.jpg",
  "/world/room/DSC_7339.jpg",
];

const RoomsImagesWorld = () => {
  return (
    <div className="mt-12 w-full" style={{ perspective: "1000px" }}>
      <CarouselRoom imageArray={imageArray} />
    </div>
  );
};

export default RoomsImagesWorld;
