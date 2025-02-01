import ImageSlider from "../components/ImageSlider";
import { TbBedFilled } from "react-icons/tb";
import { TbBedFlatFilled } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { worldAbout } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const AboutWorld = () => {
  // Loading
  useGSAP(() => {
    gsap.from(".about-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#haAboutMain",
        start: "bottom, bottom",
      },
    });
    gsap.from("#aboutslider", {
      x: 25,
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#haAboutMain",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      className="mt-[100px] max-sm:mt-[50px] max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-5"
      id="haAboutMain"
    >
      <div className="basis-[1/2]" id="aboutslider">
        <ImageSlider gallery={worldAbout} />
      </div>
      <div className="lg:basis-[1/2] lg:items-start lg:text-left text-center flex flex-col items-center">
        <h2 className="font-quicksand text-lg about-text">About Us</h2>
        <div className="border-b-[1px] border-secondary w-[100px] about-text"></div>
        <p className="mt-5 text-3xl max-sm:text-xl about-text">
          Explore Nature’s Beauty
        </p>
        <p className="mt-5 max-w-[30em] font-quicksand text-sm max-sm:text-xs max-sm:px-2 about-text">
          A tranquil escape in the heart of the Dumbara Valley. Perched at an
          elevation of 3,000 feet, this serene retreat enjoys a refreshing
          climate, making it an ideal getaway for those seeking respite from the
          heat. The bungalow is conveniently located just 24 km from Pallekele
          International Cricket Stadium and 30 km from Kandy City Center
          Shopping Mall. Victoria Reservoir Kandy Seaplane Base Airport is 26 km
          away.
        </p>
        <h2 className="mt-5 about-text">Rooms & Amenities</h2>
        <div className="border-b-[1px] border-secondary w-[150px] mt-[-2px] about-text"></div>
        <div className="mt-2 flex flex-col gap-2 ">
          <div className="flex items-center gap-2 about-text">
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <p className="text-white font-quicksand font-thin">10</p>
            </div>
            <p>x</p>
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <TbBedFilled color="white" />
            </div>
            <p className="font-quicksand text-xs">Single Beds</p>
          </div>
          <div className="flex items-center gap-2 about-text">
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <p className="text-white font-quicksand font-thin">02</p>
            </div>
            <p>x</p>
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <TbBedFlatFilled color="white" />
            </div>
            <p className="font-quicksand text-xs">Folding Beds</p>
          </div>
          <div className="flex items-center gap-2 about-text">
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <p className="text-white font-quicksand font-thin">02</p>
            </div>
            <p>x</p>
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <TbBedFlatFilled color="white" />
            </div>
            <p className="font-quicksand text-xs">Camp Beds</p>
          </div>
          <div className="flex items-center gap-2 about-text">
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <p className="text-white font-quicksand font-thin">20</p>
            </div>
            <p>x</p>
            <div className="bg-primary rounded-full flex justify-center items-center w-7 h-7">
              <IoIosPeople color="white" />
            </div>
            <p className="font-quicksand text-xs">Max Occupants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWorld;
