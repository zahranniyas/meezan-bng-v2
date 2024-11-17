import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaChevronDown, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  // Loading
  useGSAP(() => {
    gsap.from(".book-text", {
      y: 25,
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#bookMain",
        start: "bottom, bottom",
      },
    });
    gsap.from("#bookBar", {
      y: 25,
      opacity: 0,
      stagger: 0.4,
      ease: "power1.inOut",
      delay: 0.7,
      scrollTrigger: {
        trigger: "#bookMain",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      id="bookMain"
      className="mt-[200px] flex flex-col items-center mb-[100px]"
    >
      <h1 className="w-[130px] text-lg font-quicksand font-thin pb-1 border-b-[1px] border-[#b5953d] book-text">
        Bungalows
      </h1>
      <h2 className="text-[50px] leading-[100px] book-text">
        Plan Your Getaway Today
      </h2>

      <div
        id="bookBar"
        className=" bg-[#373225] border-[#e6d199] border-[3px] py-4 flex justify-center items-center px-6 text-white rounded-3xl shadow-2xl"
      >
        <div className="border-r-[1px] border-white border-opacity-60 pr-5 py-8">
          <p className="text-sm">Check-in</p>
          <div className="mt-1 flex items-end w-[180px] justify-between font-extralight opacity-80 border-b-[1px] pb-1">
            <p className="font-quicksand  text-2xl">Tue, Jun 25</p>
            <FaChevronDown className="text-xs mb-1" />
          </div>
        </div>
        <div className=" border-r-[1px] border-white border-opacity-60 pr-5 py-8 ml-5">
          <p className="text-sm">Check-out</p>
          <div className="mt-1 flex items-end w-[180px] justify-between font-extralight opacity-80 border-b-[1px] pb-1">
            <p className="font-quicksand  text-2xl">Sat, Jun 29</p>
            <FaChevronDown className="text-xs mb-1" />
          </div>
        </div>
        <div className="border-r-[1px] border-white border-opacity-60 pr-1 py-8 ml-5">
          <p className="text-sm">Adults</p>
          <div className="mt-2 flex items-center gap-2 w-[100px] font-extralight opacity-80">
            <FaCircleMinus className="text-xl" />
            <p className="border-[1px] rounded-sm px-2">2</p>
            <FaCirclePlus className="text-xl" />
          </div>
        </div>
        <div className="border-r-[1px] border-white border-opacity-60 pr-1 py-8 ml-5">
          <p className="text-sm">Children</p>
          <div className="mt-2 flex items-center gap-2 w-[100px] font-extralight opacity-80">
            <FaCircleMinus className="text-xl" />
            <p className="border-[1px] rounded-sm px-2">3</p>
            <FaCirclePlus className="text-xl" />
          </div>
        </div>
        <div className=" py-0 ml-5 flex flex-col justify-center items-center gap-4">
          <button className="font-quicksand font-thin rounded-md border-[1px] px-2 py-1">
            Anacoombra <FaChevronDown className="text-xs ml-1 inline" />
          </button>
          <button className="bg-[#e6d199] text-black font-thin rounded-md border-[1px] pb-[2px] w-[110px] pt-[4px]">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
