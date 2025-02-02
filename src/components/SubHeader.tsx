import { logoWhite } from "../assets";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

type MutableRef<T> = {
  current: T;
};

interface Props {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
}

const SubHeader = ({ primaryColor, secondaryColor, thirdColor }: Props) => {
  const navList = [
    {
      name: "Bungalows",
    },
    {
      name: "Outdoor Facilities",
      url: "#outdoor",
    },
    {
      name: "Indoor Facilities",
      url: "#indoor",
    },
    {
      name: "Attractions",
      url: "#attractions",
    },
    {
      name: "Booking",
      url: "#contact",
    },
  ];

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px");

    const handleMediaChange = (
      event: MediaQueryListEvent | MediaQueryList
    ): void => {
      if (event.matches) {
        gsap.to("#scrollBar", {
          backgroundColor: primaryColor,
          width: "75%",
          marginTop: 10,
          scale: 0.8,
          paddingRight: 40,
          paddingLeft: 40,
          opacity: 1,
          borderRadius: 20,
          borderWidth: "1px",
          borderColor: secondaryColor,
          scrollTrigger: {
            trigger: "#scrollBar",
            start: "bottom",
            scrub: 1,
          },
          ease: "power1.inOut",
        });
      } else {
        gsap.to("#scrollBar", {
          backgroundColor: primaryColor,
          scrollTrigger: {
            trigger: "#scrollBar",
            start: "bottom",
            scrub: 1,
          },
          ease: "power1.inOut",
        });
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(
    null
  ) as MutableRef<gsap.core.Timeline | null>;

  const btnAnimation = (): void => {
    if (tl.current) {
      tl.current.reversed(!tl.current.reversed());
    }
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray<HTMLElement>(".box");
      if (boxes.length > 0) {
        tl.current = gsap
          .timeline()
          .to(boxes[0], {
            rotation: 45,
            scale: 1.5,
          })
          .to(
            boxes[1],
            {
              width: "200px",
              height: "290px",
              x: 15,
              y: -15,
              ease: "power1.inOut",
            },
            "<"
          )
          .from(boxes[2], {
            y: 10,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .from(boxes[3], {
            y: 10,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .from(boxes[4], {
            y: 10,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .from(boxes[5], {
            y: 10,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .from(boxes[6], {
            y: 10,
            opacity: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .reverse();
      }
    },
    { scope: container }
  );

  const [submenu, setSubmenu] = useState(false);

  const subList = [
    {
      name: "Hatale",
      url: "/hatale/",
    },
    {
      name: "Anacoombra",
      url: "/hatale/",
    },
    {
      name: "Mini-World's End",
      url: "/hatale/",
    },
    {
      name: "Nagala",
      url: "/hatale/",
    },
  ];

  useGSAP(() => {
    gsap.from("#subMenu", {
      x: 100,
      opacity: 0,
    });
  }, [submenu]);

  return (
    <section
      id="scrollBar"
      className="z-30 fixed bg-[rgba(55,50,37,0)] flex text-white font-quicksand font-thin justify-between w-full py-5 px-5 items-center"
    >
      <a href="/">
        <img src={logoWhite} alt="logo" className="w-20" />
      </a>
      <div className="lg:flex items-center justify-center gap-5 transition-colors hidden">
        <div
          className="relative"
          onMouseEnter={() => setSubmenu(true)}
          onMouseLeave={() => setSubmenu(false)}
        >
          <a href="#" className="hover:text-gray-200 transition-colors">
            Bungalows
            <FaChevronDown className="inline pl-2" />
          </a>
          {submenu && (
            <div className="absolute pt-1 w-[150px]">
              <div
                className=" flex flex-col mt-[5px]  px-2 border-[1px] rounded-lg"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: secondaryColor,
                }}
              >
                <a
                  href="/anacoombra/"
                  className="hover:text-gray-200 transition-colors border-b-[1px] py-2 "
                  style={{ borderColor: secondaryColor }}
                >
                  Anacoombra
                </a>
                <a
                  href="/hatale/"
                  className="hover:text-gray-200 transition-colors border-b-[1px] py-2 "
                  style={{ borderColor: secondaryColor }}
                >
                  Hatale
                </a>
                <a
                  href="/worldsend"
                  className="hover:text-gray-200 transition-colors border-b-[1px] py-2 "
                  style={{ borderColor: secondaryColor }}
                >
                  Mini-World's End
                </a>
                <a
                  href="/nagala/"
                  className="hover:text-gray-200 transition-colors py-2 "
                  style={{ borderColor: secondaryColor }}
                >
                  Nagala
                </a>
              </div>
            </div>
          )}
        </div>
        <a href="#outdoor" className="hover:text-gray-200 transition-colors">
          Outdoor Facilities
        </a>
        <a href="#indoor" className="hover:text-gray-200 transition-colors">
          Indoor Facilities
        </a>
        <a
          href="#attractions"
          className="hover:text-gray-200 transition-colors"
        >
          Attractions
        </a>
        <a
          href="#contact"
          className="px-3 py-1 border-[1px] border-white hover:text-gray-200 hover:border-gray-200 transition-colors"
        >
          Booking
        </a>
      </div>
      {/* MObile Nav */}
      <div
        ref={container}
        className=" relative flex justify-center items-center rounded-full w-[30px] h-[30px] lg:hidden"
        style={{ backgroundColor: thirdColor }}
      >
        <button
          onClick={() => {
            btnAnimation();
            setSubmenu(false);
          }}
          className="box z-30 rounded-full"
          style={{ backgroundColor: thirdColor }}
        >
          <LuPlus />
        </button>
        <div
          id="navCont"
          className="box z-20 rounded-xl absolute top-[4px] right-[4px] w-[0px] h-[0px] pl-5 overflow-hidden flex flex-col justify-center"
          style={{ backgroundColor: thirdColor }}
        >
          {navList.map((item, i) => (
            <div
              className="box flex items-center"
              key={i}
              onClick={() => {
                if (i == 0) {
                  setSubmenu(!submenu);
                }
              }}
            >
              <a href={item.url} className=" flex flex-col py-2 cursor-pointer">
                {item.name}
              </a>
              {i == 0 && <FaChevronDown className="cursor-pointer pl-2" />}
            </div>
          ))}
        </div>
      </div>
      {submenu && (
        <div
          id="subMenu"
          className="z-10 lg:hidden absolute bg-black text-white p-4 rounded-xl"
          style={{
            top: "70px",
            right: `${200}px`,
          }}
        >
          {subList.map((item, i) => (
            <a key={i} href={item.url} className="box flex flex-col py-2 ">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default SubHeader;
