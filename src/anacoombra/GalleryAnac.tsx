
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaXmark,
} from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    id: 1,
    title: "The breathtaking view around the Bungalow",
    image: "/gallery/view/view-1.jpg",
    gallery: [
      "/gallery/view/view-2.jpg",
      "/gallery/view/view-1.jpg",
      "/gallery/view/view-3.jpg",
      "/gallery/view/view-4.jpg",
      "/gallery/view/view-5.jpg",
      "/gallery/view/view-6.jpg",
      "/gallery/view/view-7.jpg",
      "/gallery/view/view-8.jpg",
      "/gallery/view/view-9.jpg",
      "/gallery/view/view-10.jpg",

    ],
  },
  {
    id: 2,
    title: "The beauty within the premises",
    description:
      "A celebration of creativity, passion, and talent! Our students showcased incredible skills in cake decorating, dressmaking, cookery, and henna artistry.",
    date: "February, 2025",
    image: "/gallery/out/out-1.jpg",
    gallery: [
      "/gallery/out/out-1.jpg",
      "/gallery/out/out-2.jpg",
      "/gallery/out/out-3.jpg",
      "/gallery/out/out-4.jpg",
      "/gallery/out/out-5.jpg",
      "/gallery/out/out-6.jpg",
      "/gallery/out/out-7.jpg",
      "/gallery/out/out-8.jpg",
      "/gallery/out/out-9.jpg",
      "/gallery/out/out-10.jpg",

    ],
  },
  {
    id: 3,
    title: "A view from inside the bungalow",
    description:
      "A celebration of creativity, passion, and talent! Our students showcased incredible skills in cake decorating, dressmaking, cookery, and henna artistry.",
    date: "February, 2025",
    image: "/gallery/in/in-1.jpg",
    gallery: [
      "/gallery/in/in-1.jpg",
      "/gallery/in/in-2.jpg",
      "/gallery/in/in-3.jpg",
      "/gallery/in/in-4.jpg",
      "/gallery/in/in-5.jpg",
      "/gallery/in/in-6.jpg",
      "/gallery/in/in-7.jpg",
      "/gallery/in/in-8.jpg",
      "/gallery/in/in-9.jpg",
      "/gallery/in/in-10.jpg",
    ],
  },
];

const GalleryAnac = () => {
  // selectedEvent holds the event whose gallery is open (or null)
  const [selectedEvent, setSelectedEvent] = useState(null);
  // currentIndex points to the currently displayed image in the gallery
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (selectedEvent) {
      // Loop back to the start or stop at the end as desired
      setCurrentIndex((prev) =>
        prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      // Loop back to the last image or stop at the beginning as desired
      setCurrentIndex((prev) =>
        prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1
      );
    }
  };

  // Prevent body scrolling when the modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup when component unmounts or when selectedEvent changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  // Parallax Effect BG
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //loading animation
  useGSAP(() => {
    gsap.from(".events-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#events",
        start: "bottom, bottom",
      },
    });
    gsap.from(".events-img", {
      x: -55,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#events",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      id="events"
      className="px-8 py-20 flex flex-col items-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/hero-bg-blur.jpg')",
        // backgroundColor: "rgba(248, 244, 241, 0.4)",
        // backgroundBlendMode: "screen",
        // Adjust the multiplier (0.5) to control the parallax effect
        backgroundPositionY: `${offsetY * 0.2}px`,
      }}
    >
      <div className="flex flex-col items-center text-white">
        <h2 className="font-quicksand text-lg text-center ">
          Gallery
        </h2>
        <div className="border-b-[1px] border-secondaryGreen w-[80px] "></div>
      </div>
      <p className="mt-5 text-5xl text-center max-sm:text-2xl text-white">
        Checkout our Full Gallery
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 events-img ">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="relative hover:scale-95 active:scale-90 cursor-pointer border max-w-[300px] rounded-lg bg-secondaryGreen overflow-hidden shadow hover:shadow-lg transition"
            onClick={() => openGallery(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="bottom-0 text-white p-3 flex w-full justify-between flex-col absolute">
                <h3 className="text-xs text-center font-semibold text-PRIMARY-300">
                  {event.title}
                </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Gallery */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeGallery}
            className="absolute top-5  right-5 text-PRIMARY-200 bg-secondaryGreen rounded-full text-2xl p-2 hover:bg-secondaryGreen/70 active:bg-secondaryGreen/70 active:scale-95 transition-all"
          >
            <FaXmark />
          </button>
          <div className="relative max-w-3xl mx-auto p-4">
            <img
              src={selectedEvent.gallery[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
          <div className="absolute bottom-5 flex justify-center gap-3">
            <button
              onClick={prevImage}
              className="bg-secondaryGreen rounded-full hover:bg-secondaryGreen/70 active:bg-secondaryGreen/70 w-10 h-10 flex items-center justify-center p-2 text-sm shadow active:scale-95 transition-all"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-secondaryGreen rounded-full text-PRIMARY-300 hover:bg-secondaryGreen/70 active:bg-secondaryGreen/70 w-10 h-10 flex items-center justify-center p-2 text-sm shadow active:scale-95 transition-all"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryAnac;
