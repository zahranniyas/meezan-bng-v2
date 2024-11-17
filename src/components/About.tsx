import { useGSAP } from "@gsap/react";
import { aboutImg01, aboutImg02 } from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaChevronRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.to("#imgOne", {
      x: -579,
      duration: 3,
      delay: 2,
      ease: "power4.out",
      yoyo: true,
      repeat: 1,
      repeatDelay: 1,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to("#imgTwo", {
      x: -866,
      scale: 1,
      duration: 3,
      delay: 1.8,
      ease: "power4.out",
      yoyo: true,
      repeat: 1,
      repeatDelay: 1.35,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
    });
    gsap.from("#textTwo", {
      opacity: 0,
      delay: 3,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power1.inOut",
    });
    gsap.to("#textTwo", {
      opacity: 0,
      x: 55,
      delay: 7.5,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power1.inOut",
    });
  }, []);

  // small image
  useGSAP(() => {
    gsap.to("#smallImg01", {
      x: -231,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power4.out",
      duration: 3,
      delay: 2,
      yoyo: true,
      repeat: 1,
      repeatDelay: 1,
    });
    gsap.to("#smallImg02", {
      x: -231,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power4.out",
      duration: 3,
      delay: 1.8,
      yoyo: true,
      repeat: 1,
      repeatDelay: 1.35,
    });
  }, []);

  // Rotate button

  useGSAP(() => {
    gsap.to("#rotateBtn", {
      x: 210,
      scale: 0.5,
      rotate: 225,
      borderRadius: "100%",
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power4.out",
      duration: 3,
      delay: 2,
      yoyo: true,
      repeat: 1,
      repeatDelay: 1,
    });
  }, []);

  // Load animation

  useGSAP(() => {
    gsap.from(".about-text", {
      y: 25,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(".about-img", {
      x: -25,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
    });
    gsap.from("#textOne", {
      opacity: 0,
      delay: 1,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power1.inOut",
    });
    gsap.from("#rotateBtn", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#aboutHead",
        start: "bottom, bottom",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div id="aboutMain" className=" flex h-[900px]">
      <div className="w-[40%] flex flex-col justify-center ml-10">
        <h1 className="font-quicksand about-text">About Us</h1>
        <div className="border-[1px] border-b-orange-400 w-[100px] about-text"></div>
        <div className="text-[100px] leading-[100px] mt-5">
          <h2 id="aboutHead" className="about-text">
            Impeccably <br />
            Elegant
          </h2>
        </div>
        <p className="w-full mt-5 font-quicksand about-text">
          Four luxury estate bungalows in four exotic locations for you to
          choose from. Hatale Bungalow which was initially a plantation bungalow
          on the Hatale Tea Estate was transformed by the Management into a
          modern luxury villa. <br />
          <br /> Hatale Bungalow which was initially a plantation bungalow on
          the Hatale Tea Estate was transformed by the Management into a modern
          luxury villa.
        </p>
      </div>
      <div className="flex justify-end items-center w-[60%]">
        <div className="relative w-[579px] h-[612px] flex overflow-clip border-[1px] about-img">
          <img
            id="imgOne"
            src={aboutImg02}
            alt="about01"
            className="absolute w-[579px] h-[612px] object-cover"
          />
          <p
            id="textOne"
            className="text-white absolute bottom-10 left-10 text-6xl opacity-70"
          >
            Luxurious <br /> Comfort
          </p>
          <img
            id="imgTwo"
            src={aboutImg01}
            alt="about02"
            className="left-[150%] scale-150 absolute w-[579px] h-[612px] object-cover"
          />
          <p
            id="textTwo"
            className="text-white absolute bottom-10 left-10 text-6xl opacity-70"
          >
            Exquisite <br /> Furnishing
          </p>
        </div>
        <div className="ml-10 w-[231px] h-[408px] about-img flex overflow-clip">
          <img
            id="smallImg01"
            src={aboutImg01}
            alt="about01"
            className="w-[231px] h-[408px] object-cover"
          />
          <img
            id="smallImg02"
            src={aboutImg02}
            alt="about01"
            className="w-[231px] h-[408px] object-cover"
          />
        </div>
        <div
          id="rotateBtn"
          className="absolute bg-white px-8 py-8 rotate-45 right-[350px] shadow-md opacity-70"
        >
          <FaChevronRight className="rotate-[-225deg] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
