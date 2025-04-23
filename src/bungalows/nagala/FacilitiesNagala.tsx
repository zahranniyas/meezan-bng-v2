import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { outdoorListNagala } from "../../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const FacilitiesNagala = () => {
  const btnList = ["Compact Grounds", "Children's Play area"];

  const [active, setActive] = useState(0);

  // Loading
  useGSAP(() => {
    gsap.from(".fac-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#outdoor",
        start: "bottom, bottom",
      },
    });
    gsap.from("#btn", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#outdoor",
        start: "bottom, bottom",
      },
    });
    gsap.from("#imgOne", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#outdoor",
        start: "bottom, bottom",
      },
    });
    gsap.from("#imgTwo", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      delay: 1.2,
      scrollTrigger: {
        trigger: "#outdoor",
        start: "bottom, bottom",
      },
    });
    gsap.from(".fac-subtext", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#outdoor",
        start: "bottom, bottom",
      },
    });
  });

  const toggleAnim = () => {
    gsap.from("#facContent", {
      x: -25,
      scale: 1.1,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      className="mt-[100px] max-sm:mt-[10px] max-sm:mb-[0px] px-[100px] max-sm:px-[20px] mb-[100px] flex flex-col lg:items-start items-center  pt-[70px] pb-[180px] max-sm:pb-[100px]"
      id="outdoor"
    >
      <h2 className="font-quicksand text-lg fac-text">Facilities</h2>
      <div className="border-b-[1px] border-secondaryRed w-[100px] fac-text"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center w-full">
        <p className="mt-5 text-5xl max-sm:text-2xl fac-text">
          Outdoor Activities
        </p>
        <div
          id="btn"
          className="flex gap-3 text-sm lg:mt-0 mt-2 max-sm:text-xs max-sm:gap-2"
        >
          {btnList.map((item, i) => (
            <button
              onClick={() => {
                setActive(i);
                toggleAnim();
              }}
              key={i}
              className={` px-[10px] pt-[6px] pb-[4px] rounded-lg shadow-lg transform active:scale-75 transition-transform ${
                active == i ? "bg-primaryRed text-white" : "bg-secondaryRed"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {outdoorListNagala.map((item, i) => (
        <div
          id="facContent"
          key={i}
          className={` ${active == i ? "flex" : "hidden"}  items-center w-full`}
        >
          <div className="relative flex flex-col w-[600px] mt-10">
            <img
              id="imgOne"
              src={item.img01}
              alt=""
              className="w-[600px] h-[500px] object-cover rounded-xl"
            />
            <div className="absolute z-20 bg-primaryRed text-white w-[450px] max-sm:w-[300px] self-center bottom-[-100px] max-sm:bottom-[-10px] lg:left-auto left-[-10px] p-5 rounded-xl fac-subtext">
              <h2 className="text-3xl mb-2 max-sm:text-xl fac-subtext">
                {item.title}
              </h2>
              <p className="font-quicksand font-thin text-lg border-b-[1px] pb-5 border-white max-sm:text-sm fac-subtext">
                {item.desc01}
              </p>
              <p className="text-secondaryRed font-quicksand font-thin text-lg mt-5 max-sm:text-sm fac-subtext">
                {item.desc02}
              </p>
            </div>
          </div>
          <img
            id="imgTwo"
            src={item.img02}
            alt=""
            className="lg:w-[calc(100%-600px)] w-[50%] max-sm:w-[40%] h-[350px] lg:ml-5 ml-2 rounded-xl object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default FacilitiesNagala;
