import { logoWhite } from "../assets";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    gsap.to("#scrollBar", {
      backgroundColor: "rgba(55,50,37,1)",
      width: "50%",
      marginTop: 10,
      scale: 0.8,
      paddingRight: 40,
      paddingLeft: 40,
      opacity: 0.9,
      borderRadius: 20,
      borderWidth: "1px",
      borderColor: "#e6d199",
      scrollTrigger: {
        trigger: "#scrollBar",
        start: "bottom",
        scrub: 1,
      },
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#scrollBar", {
      y: -80,
      ease: "elastic",
      duration: 2,
    });
  }, []);

  return (
    <div
      id="scrollBar"
      className="z-30 fixed bg-[rgba(55,50,37,0)] flex text-white font-quicksand font-thin justify-between w-full px-20 py-5 mx-auto"
    >
      <a href="">
        <img src={logoWhite} alt="logo" className="w-20" />
      </a>
      <div className="flex items-center justify-center gap-5 transition-colors">
        <a href="" className="hover:text-[#e6d199] transition-colors">
          About
        </a>
        <a href="" className="hover:text-[#e6d199] transition-colors">
          Bungalow
        </a>
        <a href="" className="hover:text-[#e6d199] transition-colors">
          Services
        </a>
        <a href="" className="hover:text-[#e6d199] transition-colors">
          Booking
        </a>
        <button className="px-3 py-1 border-[1px] border-white hover:text-[#e6d199] hover:border-[#e6d199] transition-colors">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
