// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { TbBedFilled } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const RoomNagala = () => {
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

  const [isMoved, setIsMoved] = useState(false);
  const buttonRef = useRef(null);
  // const boxRef = useRef(null);

  const toggleAnimation = () => {
    const distance = 220; // Distance to move in pixels

    if (isMoved) {
      // Move back to the original position
      gsap.to(buttonRef.current, {
        x: 0,
        duration: 1,
        rotation: "45deg",
        scale: 1,
        borderRadius: 0,
        ease: "power2.out",
      });
      gsap.to("#imgOneRoom", {
        x: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to("#imgTwoRoom", {
        x: 0,
        scale: 1.5,
        duration: 1,
        ease: "power2.in",
      });
      gsap.to("#textTwo", {
        opacity: 0,
        y: 10,
      });
      gsap.to("#smallImg01", {
        x: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.to("#smallImg02", {
        x: 0,
        duration: 1,
        ease: "power2.in",
      });
      // gsap.to(boxRef.current, { x: 0, duration: 0.5, ease: "power2.out" });
    } else {
      if (windowDimensions.width <= 1024 && windowDimensions.width > 640) {
        gsap.to("#imgOneRoom", {
          x: -445.38,
          duration: 1,
          ease: "power1.in",
        });
        gsap.to("#imgTwoRoom", {
          x: -665,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        });
        gsap.to("#smallImg01", {
          x: -177.69,
          duration: 1,
          ease: "power2.in",
        });
        gsap.to("#smallImg02", {
          x: -177.69,
          duration: 1,
          ease: "power2.out",
        });
        gsap.to("#textTwo", {
          opacity: 0.7,
          y: -5,
          delay: 1,
        });
        gsap.to(buttonRef.current, {
          x: 260,
          borderRadius: 40,
          rotation: "225deg",
          scale: 0.7,
          duration: 1,
          ease: "power2.out",
        });
      } else {
        if (windowDimensions.width <= 640) {
          gsap.to("#imgOneRoom", {
            x: -263.18,
            duration: 1,
            ease: "power1.in",
          });
          gsap.to("#imgTwoRoom", {
            x: -330,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to("#smallImg01", {
            x: -75,
            duration: 1,
            ease: "power2.in",
          });
          gsap.to("#smallImg02", {
            x: -75,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to(buttonRef.current, {
            x: 120,
            borderRadius: 40,
            rotation: "225deg",
            scale: 0.7,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to("#textTwo", {
            opacity: 0.7,
            y: -10,
            delay: 1,
          });
        } else {
          // Move to the right
          gsap.to(buttonRef.current, {
            x: distance,
            borderRadius: 40,
            rotation: "225deg",
            scale: 0.7,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to("#imgOneRoom", {
            x: -579,
            duration: 1,
            ease: "power1.in",
          });
          gsap.to("#imgTwoRoom", {
            x: -865,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to("#textTwo", {
            opacity: 0.7,
            y: -10,
            delay: 1,
          });
          gsap.to("#smallImg01", {
            x: -231,
            duration: 1,
            ease: "power2.in",
          });
          gsap.to("#smallImg02", {
            x: -231,
            duration: 1,
            ease: "power2.out",
          });
        }
        // gsap.to(boxRef.current, {
        //   x: distance,
        //   duration: 0.5,
        //   ease: "power2.out",
        // });
      }
    }

    setIsMoved(!isMoved);
  };

  return (
    <div
      id="aboutMain"
      className=" flex mt-[150px] max-sm:mt-[100px] flex-col lg:flex-row justify-between"
    >
      <div className=" flex flex-col justify-center pl-20 max-sm:px-2">
        <h1 className="font-quicksand font-thin text-2xl max-sm:text-[30px]">
          About Us
        </h1>
        <div className="border-[1px] border-b-secondaryRed w-[120px] max-sm:w-[150px]"></div>
        <div className="max-sm:text-[60px] max-sm:leading-[65px] leading-[100px] mt-5">
          <h2 id="aboutHead" className=" max-sm:text-2xl text-4xl">
            A Peaceful Retreat,
            <br />
            in the Heart of Nature
          </h2>
        </div>
        <p className="max-w-[40rem] mt-5 font-quicksand max-sm:text-sm">
          Escape to the tranquility of Nagala Bungalow, surrounded by a lush,
          private forest. Ideal for nature lovers and wildlife enthusiasts, this
          bungalow is the perfect base for exploring the nearby Wasgamuwa
          National Park. Immerse yourself in the park's diverse ecosystems, spot
          exotic wildlife, and experience the wonders of the Sri Lankan
          wilderness.
        </p>
        <div>
          <h2 className="mt-5 text-xl">Rooms & Amenities</h2>
          <div className="border-b-[1px] border-secondaryRed w-[150px] mt-[-2px] about-text"></div>
          <div className="mt-2 flex flex-col gap-2 ">
            <div className="flex items-center gap-2 about-text">
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <p className="text-white font-quicksand font-thin">10</p>
              </div>
              <p>x</p>
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <TbBedFilled color="white" />
              </div>
              <p className="font-quicksand text-xs">Single Beds</p>
            </div>
            <div className="flex items-center gap-2 about-text">
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <p className="text-white font-quicksand font-thin">02</p>
              </div>
              <p>x</p>
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <TbBedFilled color="white" />
              </div>
              <p className="font-quicksand text-xs">Folding Beds</p>
            </div>
            <div className="flex items-center gap-2 about-text">
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <p className="text-white font-quicksand font-thin">02</p>
              </div>
              <p>x</p>
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <TbBedFilled color="white" />
              </div>
              <p className="font-quicksand text-xs">Camp Beds</p>
            </div>
            <div className="flex items-center gap-2 about-text">
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <p className="text-white font-quicksand font-thin">20</p>
              </div>
              <p>x</p>
              <div className="bg-primaryRed rounded-full flex justify-center items-center w-7 h-7">
                <IoIosPeople color="white" />
              </div>
              <p className="font-quicksand text-xs">Max Occupants</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-end items-center mt-20 lg:mt-0">
        <div className="relative lg:min-w-[579px] lg:min-h-[612px] min-w-[445.38px] min-h-[470.77px] max-sm:min-w-[263.18px] max-sm:min-h-[278.18px] flex border-[1px] overflow-hidden">
          <img
            id="imgOneRoom"
            src="/nagala/room/room-2.jpg"
            alt="about01"
            className="absolute lg:min-w-[579px] lg:min-h-[612px] min-w-[445.38px] min-h-[470.77px] max-sm:min-w-[263.18px] max-sm:min-h-[278.18px] object-cover"
          />
          <p
            id="textOne"
            className="text-white absolute bottom-10 left-10 text-6xl opacity-70 max-sm:text-3xl max-sm:left-5 max-sm:bottom-5"
          >
            Luxurious <br /> Comfort
          </p>
          <img
            id="imgTwoRoom"
            src="/nagala/room/room-1.jpg"
            alt="about02"
            className="left-[150%] scale-150 absolute lg:w-[579px] lg:h-[612px] min-w-[445.38px] min-h-[470.77px] max-sm:min-w-[263.18px] max-sm:min-h-[278.18px] max-sm:left-[126.5%] object-cover"
          />
          <p
            id="textTwo"
            className="text-white absolute bottom-[30px] left-10 text-6xl opacity-0 max-sm:text-3xl max-sm:left-5 max-sm:bottom-[10px]"
          >
            Exquisite <br /> Furnishing
          </p>
        </div>
        <div className="ml-2 lg:w-[231px] lg:min-h-[408px] w-[177.69px] h-[313.85px] max-sm:w-[75px] max-sm:h-[185.45px] flex overflow-hidden">
          <img
            id="smallImg01"
            src="/nagala/room/room-1.jpg"
            alt="about01"
            className="lg:w-[231px] lg:h-[408px] w-[177.69px] h-[313.85px] max-sm:w-[75px] max-sm:h-[185.45px] object-cover  "
          />
          <img
            id="smallImg02"
            src="/nagala/room/room-2.jpg"
            alt="about01"
            className="lg:w-[231px] lg:h-[408px] w-[177.69px] h-[313.85px] max-sm:w-[75px] max-sm:h-[185.45px] object-cover"
          />
        </div>
        <button
          ref={buttonRef}
          id="rotateBtn"
          onClick={toggleAnimation}
          className="absolute bg-white px-8 py-8 max-sm:p-4 rotate-45 right-[350px] shadow-md opacity-70 max-sm:right-[140px]"
        >
          <FaChevronRight className="rotate-[-225deg] text-xl" />
        </button>
      </div>
    </div>
  );
};

export default RoomNagala;
