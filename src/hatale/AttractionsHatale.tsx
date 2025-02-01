import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { placesVidList } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const AttractionsHatale = () => {
  const [open, setOpen] = useState(3);

  // Loading
  useGSAP(() => {
    gsap.from(".att-AnimTxt", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#attractions",
        start: "bottom, bottom",
      },
    });
    gsap.from(".att-cont", {
      y: 25,
      opacity: 0,
      delay: 0.6,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#attractions",
        start: "bottom, bottom",
      },
    });
  }, []);

  //On click text animation
  useGSAP(() => {
    gsap.from(".show-fullTxt", {
      opacity: 0,
      y: 10,
      delay: 0.5,
    });
  }, [open]);

  return (
    <div
      className=" lg:px-[100px] px-[20px] bg-primary py-[100px] max-sm:pt-[40px] max-sm:pb-[50px] text-white"
      id="attractions"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-quicksand text-lg text-center att-AnimTxt">
          Attractions
        </h2>
        <div className="border-b-[1px] border-secondary w-[100px] att-AnimTxt"></div>
      </div>
      <p className="mt-5 text-5xl text-center max-sm:text-2xl att-AnimTxt">
        Places to Visit
      </p>
      <div className="att-cont flex h-[600px] max-sm:flex-col-reverse max-sm:items-center max-md:max-w-full gap-5 justify-center max-sm:mt-4 mt-10 max-w-[1000px] mx-auto cursor-pointer">
        {placesVidList.map((item, i) => (
          <div
            key={i}
            onClick={() => setOpen(i)}
            className={`relative h-full transition-all duration-500 ease-in-out ${
              open == i
                ? "w-[70%] max-sm:w-[100%] max-sm:h-[70%]"
                : "w-[10%] max-sm:h-[10%] max-sm:w-[100%]"
            } rounded-xl overflow-hidden text-white`}
          >
            <h2
              className={`att-text ${
                open != i ? "flex" : "hidden"
              } absolute bottom-5 max-sm:bottom-3 left-5 align-text-top text-3xl max-sm:text-xl`}
            >
              {item.name}
            </h2>
            <div
              className={`${
                open != i ? "hidden" : "show-fullTxt"
              } absolute bottom-5 px-5 align-text-top text-xl`}
            >
              <h2 className="text-xl">{item.name}</h2>
              <p className=" font-quicksand text-sm">{item.desc}</p>
              <a
                href="/"
                className="bg-secondary flex justify-center items-center w-[80px] mt-2 h-[30px] rounded-lg"
              >
                <p className="font-quicksand text-xs text-black">Directions</p>
              </a>
            </div>
            <img
              key={i}
              src={item.vid}
              alt=""
              className={`object-cover h-full w-full`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsHatale;
