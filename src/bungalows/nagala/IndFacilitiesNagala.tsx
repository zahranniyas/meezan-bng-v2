import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { indoorListNagala } from "../../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const IndFacilitiesNagala = () => {
  // Loading
  useGSAP(() => {
    gsap.from(".facInd-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#indoor",
        start: "bottom, bottom",
      },
    });
    gsap.from(".bento", {
      width: "90%",
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: "#indoor",
        start: "bottom, bottom",
      },
    });
    gsap.from(".bento-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      delay: 0.4,
      scrollTrigger: {
        trigger: "#indoor",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      className="lg:px-[100px] px-[20px] mb-[120px] h-[1400px] w-full flex flex-col items-center lg:items-start"
      id="indoor"
    >
      <h2 className="font-quicksand text-lg facInd-text">Facilities</h2>
      <div className="border-b-[1px] border-secondaryRed w-[100px] facInd-text"></div>
      <p className="mt-5 lg:text-5xl text-2xl facInd-text">Indoor Activities</p>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 gap-5 mt-10 max-sm:mt-[20px] px-0 h-full w-full lg:text-3xl text-xl">
        {indoorListNagala.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundBlendMode: "multiply",
              backgroundImage: `url(${item.img})`,
              backgroundColor: "#ffe8ef",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className={`flex flex-col justify-between rounded-xl p-5 text-white bento ${item.style}`}
          >
            <p className="bento-text">{item.title}</p>
            <p className="font-quicksand text-sm max-sm:text-xs bento-text">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndFacilitiesNagala;
