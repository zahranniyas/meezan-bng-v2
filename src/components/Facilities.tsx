import { servOne, servThree, servTwo } from "../assets";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  // Loading
  useGSAP(() => {
    gsap.from(".serv-text", {
      x: -25,
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#servMain",
        start: "bottom, bottom",
      },
    });
    gsap.from(".serv-img", {
      y: 25,
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#servMain",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      id="servMain"
      className="mt-[100px] w-full overflow-clip lg:px-20 px-10 max-sm:px-5 mb-20"
    >
      <h1 className="w-[160px] max-sm:w-[140px] font-quicksand text-4xl  max-sm:text-[30px] font-thin pb-1 border-b-[1px] border-[#b5953d] serv-text">
        Facilities
      </h1>
      <h2 className="lg:mt-8 mt-4 text-[100px] leading-[100px] serv-text max-sm:text-[40px] max-sm:leading-[45px]">
        Relaxation & <br /> Adventure Await
      </h2>
      <p className="font-quicksand serv-text max-sm:text-sm">
        Relish the charm of our spacious rooms and separate houses, blending
        modern elegance with the tranquility of the surrounding forest park and
        natural oasis.
      </p>
      <div className="flex lg:flex-row flex-col mt-20 max-sm:mt-10 gap-10 w-full justify-center items-center">
        <div className="w-[400px] relative h-[590px] serv-img max-sm:w-[300px] max-sm:h-[490px]">
          <img
            src={servOne}
            alt=""
            className="rounded-xl w-[400px] max-sm:[300px] max-sm:h-[490px] h-[590px] lg:h-[400px] object-cover transition-all duration-300 lg:hover:h-[590px] peer"
          />
          <div className="p-4 max-sm:p-2 absolute w-[400px] max-sm:w-[300px] bottom-0 max-sm:text-white lg:peer-hover:text-white transition-colors duration-300">
            <h3 className="text-3xl">Spa & Pool</h3>
            <p className="font-quicksand text-lg mt-2">
              Enhance your getaway with our spa services, ensuring a truly
              revitalizing and soothing experience throughout your stay with us.
            </p>
          </div>
        </div>

        <div className="w-[400px] relative h-[590px] flex flex-col justify-end serv-img max-sm:w-[300px] max-sm:h-[490px]">
          <img
            src={servTwo}
            alt=""
            className="rounded-xl w-[400px] h-[590px] lg:h-[400px] max-sm:[300px] max-sm:h-[490px] object-cover transition-all duration-300 lg:hover:h-[590px] peer"
          />
          <div className="p-4 max-sm:p-2 absolute w-[400px] max-sm:w-[300px] max-sm:bottom-0 max-sm:top-auto max-sm:text-white top-0 lg:peer-hover:text-[#b5953d] transition-colors duration-300">
            <h3 className="text-3xl">Hiking & Cycling</h3>
            <p className="font-quicksand text-lg mt-2">
              Whether you seek adventure or relaxation, there's something for
              everyone. Explore the mountainous terrain on a hike or enjoy a
              scenic bike ride
            </p>
          </div>
        </div>

        <div className="w-[400px] relative h-[590px] serv-img max-sm:w-[300px] max-sm:h-[490px]">
          <img
            src={servThree}
            alt=""
            className="rounded-xl w-[400px] h-[590px] lg:h-[400px] max-sm:[300px] max-sm:h-[490px] object-cover transition-all duration-300 lg:hover:h-[590px] peer"
          />
          <div className="p-4 max-sm:p-2 absolute w-[400px] max-sm:w-[300px] max-sm:text-white bottom-0 lg:peer-hover:text-white transition-colors duration-300">
            <h3 className="text-3xl">Fine Dining</h3>
            <p className="font-quicksand text-lg mt-2">
              Indulge in exquisite dishes while enjoying the enchanting tunes,
              creating a harmonious fusion of exceptional cuisine and musical
              artistry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
