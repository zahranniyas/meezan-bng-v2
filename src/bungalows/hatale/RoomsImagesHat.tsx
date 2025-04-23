import CarouselRoom from "../../components/CarouselRoom";

const imageArray = [
  "/hatale/room/DSC_6855take.jpg",
  "/hatale/room/DSC_6923take.jpg",
  "/hatale/room/DSC_6941take.jpg",
  "/hatale/room/DSC_6970take.jpg",
  "/hatale/room/DSC_6976take.jpg",
  "/hatale/room/DSC_6981take.jpg",
  "/hatale/room/DSC_7008take.jpg",
  "/hatale/room/DSC_7018take.jpg",
  "/hatale/room/DSC_7025take.jpg",
  "/hatale/room/DSC_7045take.jpg",
  "/hatale/room/DSC_7063take.jpg",
  "/hatale/room/DSC_7069take.jpg",
  "/hatale/room/DSC_7511take.jpg",
  "/hatale/room/DSC_7568take.jpg",
  "/hatale/room/DSC_7569take.jpg",
  "/hatale/room/DSC_7573take.jpg",
];

const RoomsImagesHat = () => {
  return (
    <div className="mt-12 w-full" style={{ perspective: "1000px" }}>
      <CarouselRoom imageArray={imageArray} />
    </div>
  );
};

export default RoomsImagesHat;
