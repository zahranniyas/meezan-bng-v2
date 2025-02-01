import { hataleAboutMain } from "../assets";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import debounce from "lodash.debounce";

interface Props {
  gallery: Array<string>;
}

const ImageSlider = ({ gallery }: Props) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [xValue, setXValue] = useState(0);
  const slideWidth = windowDimensions.width <= 640 ? 300 : 500;

  const handleLeftClick = () => {
    if (xValue > -(slideWidth * (hataleAboutMain.length - 1))) {
      setXValue((v) => v - slideWidth);
      console.log(xValue);
    }
  };

  const handleRightClick = () => {
    if (xValue < 0) {
      setXValue((v) => v + slideWidth);
    }
  };

  return (
    <div className="flex items-center w-full justify-end" id="sliderMain">
      <button
        onClick={handleLeftClick}
        disabled={xValue === -(slideWidth * (hataleAboutMain.length - 1))}
        className={`z-20 p-4 max-sm:p-2  rounded-full mr-[-25px] max-sm:mr-[-15px] shadow-lg transform active:scale-75 transition-transform ${
          xValue === -(slideWidth * (hataleAboutMain.length - 1))
            ? " cursor-not-allowed active:scale-100 text-white"
            : ""
        }`}
        style={{
          backgroundColor: `${
            xValue === -(slideWidth * (hataleAboutMain.length - 1))
              ? "#e5e7eb"
              : "#e6d199"
          }`,
        }}
      >
        <FaChevronLeft />
      </button>
      <div className="max-sm:w-[300px] max-sm:h-[300px] w-[500px] h-[500px] overflow-hidden rounded-lg flex">
        <div
          className={`flex transition-all`}
          style={{
            transform: `translateX(${xValue}px)`,
          }}
        >
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="mainabout"
              className="box max-sm:min-w-[300px] max-sm:min-h-[300px] min-w-[500px] min-h-[500px] z-10 object-cover"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleRightClick}
        disabled={xValue === 0}
        className={`z-20 p-4 max-sm:p-2  rounded-full ml-[-25px] max-sm:ml-[-15px] shadow-lg transform active:scale-75 transition-transform ${
          xValue === 0
            ? "cursor-not-allowed active:scale-100 text-gray-500"
            : ""
        }`}
        style={{
          backgroundColor: xValue === 0 ? "#e5e7eb" : "#e6d199",
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
