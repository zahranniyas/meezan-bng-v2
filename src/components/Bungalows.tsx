import gsap from "gsap";
import { bungFour, bungOne, bungThree, bungTwo } from "../assets";
import BungalowItem from "./BungalowItem";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const bungalowInfo = [
  {
    name: "Anacoombra Bungalow",
    desc: "Hatale Bungalow which was initially a plantation bungalow was transformed by the Management into a modern luxury villa.",
    img: bungOne,
    link: "#",
  },
  {
    name: "Hatale Bungalow",
    desc: "Hatale Bungalow which was initially a plantation bungalow was transformed by the Management into a modern luxury villa.",
    img: bungTwo,
    link: "#",
  },
  {
    name: "Dartry Cottage",
    desc: "Hatale Bungalow which was initially a plantation bungalow was transformed by the Management into a modern luxury villa.",
    img: bungThree,
    link: "#",
  },
  {
    name: "Nagala Bungalow",
    desc: "Hatale Bungalow which was initially a plantation bungalow was transformed by the Management into a modern luxury villa.",
    img: bungFour,
    link: "#",
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
    <div id="bungHead" className="h-[600px]">
      <div className="flex w-full flex-col items-center bg-[#373225] text-white h-[350px] pt-[30px]">
        <h1 className="text-lg font-quicksand font-thin pb-1 pr-5 border-b-[1px] border-[#b5953d] bung-text">
          Bungalows
        </h1>
        <div className="text-[50px] leading-[100px] bung-text">
          <h2>Comfort and Space Combined</h2>
        </div>
        <div id="bungImg" className="z-20 mt-5 flex gap-5 bung-img-set">
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
