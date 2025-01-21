import { useGSAP } from "@gsap/react";
import Header from "./Header";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 25,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="bg-[url('./assets/images/hero-bg-05.jpg')] min-h-[100vh] bg-cover flex justify-center">
      <Header />
      <div className="text-white text-center flex flex-col h-full min-h-[100vh] items-center justify-center">
        <h1 className="text-3xl hero-text max-sm:text-xl">Where Nature</h1>
        <h1 className="text-6xl hero-text max-sm:text-4xl">Embraces Luxury</h1>
        <h1 className="text-6xl text-[#b69747] hero-text max-sm:text-4xl">
          in Sri Lanka
        </h1>
        <a
          href="#about"
          className="relative px-3 py-1 border-[1px] border-[#b69747] mt-5 text-[#b69747] hover:border-white hover:text-white transition-colors hero-text"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Hero;
