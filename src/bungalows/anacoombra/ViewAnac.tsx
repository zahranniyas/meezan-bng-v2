import Slideshow from "../../components/Slideshow";
import { FaLocationDot } from "react-icons/fa6";

const ViewAnac = () => {
  // Example arrays of 5 images per container
  const imagesForBigContainer = [
    "/welcome/view-1-1.jpg",
    "/welcome/view-1-2.jpg",
    "/welcome/view-1-3.jpg",
    "/welcome/view-1-4.jpg",
    "/welcome/view-1-5.jpg",
  ];

  const imagesForSmallContainer = [
    "/welcome/view-2-1.jpg",
    "/welcome/view-2-2.jpg",
    "/welcome/view-2-3.jpg",
    "/welcome/view-2-4.jpg",
    "/welcome/view-2-5.jpg",
  ];

  return (
    <div className="mt-32">
      <div className="md:px-40 px-5 uppercase mb-5 md:mb-20 flex items-center justify-between">
        <div>
          <h1 className="text-md md:text-4xl lg:text-6xl">Welcome to</h1>
          <h1 className="text-2xl md:text-6xl lg:text-8xl">Ancoombura</h1>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <div className="">
            <p className="text-[28px] leading-tight">60 mins</p>
            <p className="leading-tight">from Kandy</p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-20">
        <div className="py-2">
          <img src="/anac/welcome-2.jpg" alt="wel" />
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

export default ViewAnac;
