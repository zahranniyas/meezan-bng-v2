import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DesktopBook from "./DesktopBook";
import MobileBook from "./MobileBook";

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
      className="mt-[100px] lg:mt-[200px] flex flex-col items-center mb-[100px]"
    >
      <h1 className="w-[130px] text-lg font-quicksand font-thin pb-1 border-b-[1px] border-[#b5953d] book-text">
        Bungalows
      </h1>
      <h2 className="text-[50px] leading-[100px] book-text max-sm:text-[30px] max-sm:leading-[50px]">
        Plan Your Getaway Today
      </h2>
      {/* Desktop Booking Bar */}
      <DesktopBook />
      {/* Mobile Booking Bar */}
      <MobileBook />
    </div>
  );
};

export default Booking;
