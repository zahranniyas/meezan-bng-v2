import Slideshow from "../../components/Slideshow";

const ViewWorld = () => {
  // Example arrays of 5 images per container
  const imagesForBigContainer = [
    "/world/welcome/view-1-1.jpg",
    "/world/welcome/view-1-2.jpg",
  ];

  const imagesForSmallContainer = [
    "/world/welcome/view-2-1.jpg",
    "/world/welcome/view-2-2.jpg",
  ];

  return (
    <div className="mt-32">
      <div className="md:pl-40 pl-5 uppercase mb-5 md:mb-20">
        <h1 className="text-md md:text-6xl">Welcome to</h1>
        <h1 className="text-2xl md:text-8xl">Mini World's End</h1>
      </div>

      <div className="px-5 md:px-20">
        <div className="py-2 w-full">
          <img
            src="/world/view-main.jpg"
            alt="wel"
            className="object-cover w-full"
          />
        </div>
        <div className="flex gap-2 w-full overflow-clip">
          {/* First Slideshow (larger container) */}
          <div className="w-[65%] aspect-video">
            <Slideshow images={imagesForBigContainer} interval={3000} />
          </div>

          {/* Second Slideshow (smaller container) */}
          <div className="w-[35%] aspect-auto">
            <Slideshow images={imagesForSmallContainer} interval={3000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewWorld;
