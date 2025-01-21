import gsap from "gsap";
import { bungFour, bungOne, bungThree, bungTwo } from "../assets";
import BungalowItem from "./BungalowItem";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const bungalowInfo = [
  {
    name: "Meezan Anacoombra Tea Estate Bungalow",
    desc: "This charming colonial-style bungalow, nestled amidst a serene tea plantation, offers a tranquil retreat surrounded by breathtaking mountain views and lush greenery.",
    img: bungOne,
    link: "/anacoombra/",
  },
  {
    name: "Meezan Hatale Tea Estate Bungalow",
    desc: "Originally a charming plantation bungalow on the Hatale Tea Estate, this bungalow has been thoughtfully transformed into a modern, comfortable villa.",
    img: bungTwo,
    link: "/hatale/",
  },
  {
    name: "Meezan Hatale Mini-World's End Bungalow",
    desc: "Perched at an elevation of 3,000 feet, this serene retreat enjoys a refreshing climate, making it an ideal getaway for those seeking respite from the heat.",
    img: bungThree,
    link: "/worldsend/",
  },
  {
    name: "Meezan Nagala Holiday Bungalow",
    desc: "Ideal for nature lovers and wildlife enthusiasts, this bungalow is perfect to explore the nearby Wasgamuwa National Park and experience authentic Sri Lankan wilderness.",
    img: bungFour,
    link: "/nagala/",
  },
];

const Bungalows = () => {
  // Load animation

  useGSAP(() => {
    gsap.from(".bung-text", {
      y: 25,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#bungHead",
        start: "bottom, bottom",
      },
    });
    gsap.from(".bung-img-set", {
      gap: 0,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#bungHead",
        start: "bottom, bottom",
      },
    });
    gsap.from("#bungItem", {
      y: -150,
      duration: 2,
      delay: 1,
      ease: "elastic",
      scrollTrigger: {
        trigger: "#bungImg",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div id="bungHead" className="mt-[100px] lg:h-[600px] h-auto">
      <div className="flex w-full flex-col items-center bg-[#373225] text-white lg:h-[350px] h-auto lg:pb-0 pb-[60px] pt-[30px]">
        <h1 className="text-lg font-quicksand font-thin pb-1 pr-5 border-b-[1px] border-[#b5953d] bung-text">
          Bungalows
        </h1>
        <div className="text-[50px] leading-[100px] bung-text max-sm:text-[25px] max-sm:leading-[65px]">
          <h2>Comfort and Space Combined</h2>
        </div>
        <div
          id="bungImg"
          className="z-20 mt-5 flex gap-5 bung-img-set flex-wrap lg:flex-nowrap justify-center max-sm:flex-col max-sm:gap-10"
        >
          {bungalowInfo.map((item, i) => (
            <BungalowItem
              key={i}
              name={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
              addCSS="hover:scale-95 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bungalows;
