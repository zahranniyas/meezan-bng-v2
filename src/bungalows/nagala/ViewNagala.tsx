import Slideshow from "../../components/Slideshow";

const ViewNagala = () => {
  // Example arrays of 5 images per container
  const imagesForBigContainer = [
    "/nagala/welcome/view-1-1.jpg",
    "/nagala/welcome/view-1-2.jpg",
    "/nagala/welcome/view-1-3.jpg",
    "/nagala/welcome/view-1-4.jpg",
    "/nagala/welcome/view-1-5.jpg",
  ];

  const imagesForSmallContainer = [
    "/nagala/welcome/view-2-1.jpg",
    "/nagala/welcome/view-2-2.jpg",
    "/nagala/welcome/view-2-3.jpg",
    "/nagala/welcome/view-2-4.jpg",
    "/nagala/welcome/view-2-5.jpg",
  ];

  return (
    <div className="mt-32">
      <div className="md:pl-40 pl-5 uppercase mb-5 md:mb-20">
        <h1 className="text-md md:text-4xl">Welcome to</h1>
        <h1 className="text-2xl md:text-8xl">Nagala</h1>
      </div>

      <div className="px-5 md:px-20">
        <div className="py-2 w-full">
          <img
            src="/nagala/0027.jpg"
            alt="wel"
            className="w-full object-cover"
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

export default ViewNagala;
