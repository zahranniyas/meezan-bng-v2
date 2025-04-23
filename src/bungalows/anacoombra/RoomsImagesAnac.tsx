import CarouselRoom from "../../components/CarouselRoom";

const imageArray = [
  "/anac/rooms/6230.jpg",
  "/anac/rooms/6287A.jpg",
  "/anac/rooms/6302A.jpg",
  "/anac/rooms/6328.jpg",
  "/anac/rooms/6366A.jpg",
  "/anac/rooms/6415.jpg",
  "/anac/rooms/6428A.jpg",
  "/anac/rooms/6435A.jpg",
  "/anac/rooms/6442A.jpg",
  "/anac/rooms/6507A.jpg",
  "/anac/rooms/6536A.jpg",
  "/anac/rooms/6538A.jpg",
  "/anac/rooms/6544A.jpg",
];

const RoomsImagesAnac = () => {
  return (
    <div className="mt-12 w-full" style={{ perspective: "1000px" }}>
      <CarouselRoom imageArray={imageArray} />
    </div>
  );
};

export default RoomsImagesAnac;
