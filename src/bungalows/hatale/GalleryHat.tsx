import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface EventData {
  id: number;
  title: string;
  description?: string;
  date?: string;
  image: string;
  gallery: string[];
}

const eventsData: EventData[] = [
  {
    id: 1,
    title: "The breathtaking view around the Bungalow",
    image: "/hatale/gallery/view/view-1.jpg",
    gallery: [
      "/hatale/gallery/view/view-2.jpg",
      "/hatale/gallery/view/view-1.jpg",
      "/hatale/gallery/view/view-3.jpg",
      "/hatale/gallery/view/view-4.jpg",
      "/hatale/gallery/view/view-5.jpg",
      "/hatale/gallery/view/view-6.jpg",
      "/hatale/gallery/view/view-7.jpg",
      "/hatale/gallery/view/view-8.jpg",
      "/hatale/gallery/view/view-9.jpg",
      "/hatale/gallery/view/view-10.jpg",
    ],
  },
  {
    id: 2,
    title: "The beauty within the premises",
    description:
      "A celebration of creativity, passion, and talent! Our students showcased incredible skills in cake decorating, dressmaking, cookery, and henna artistry.",
    date: "February, 2025",
    image: "/hatale/gallery/out/out-1.jpg",
    gallery: [
      "/hatale/gallery/out/out-1.jpg",
      "/hatale/gallery/out/out-2.jpg",
      "/hatale/gallery/out/out-3.jpg",
      "/hatale/gallery/out/out-4.jpg",
      "/hatale/gallery/out/out-5.jpg",
      "/hatale/gallery/out/out-6.jpg",
      "/hatale/gallery/out/out-7.jpg",
      "/hatale/gallery/out/out-8.jpg",
      "/hatale/gallery/out/out-9.jpg",
      "/hatale/gallery/out/out-10.jpg",
    ],
  },
  {
    id: 3,
    title: "A view from inside the bungalow",
    description:
      "A celebration of creativity, passion, and talent! Our students showcased incredible skills in cake decorating, dressmaking, cookery, and henna artistry.",
    date: "February, 2025",
    image: "/hatale/gallery/in/in-1.jpg",
    gallery: [
      "/hatale/gallery/in/in-1.jpg",
      "/hatale/gallery/in/in-2.jpg",
      "/hatale/gallery/in/in-3.jpg",
      "/hatale/gallery/in/in-4.jpg",
      "/hatale/gallery/in/in-5.jpg",
      "/hatale/gallery/in/in-6.jpg",
      "/hatale/gallery/in/in-7.jpg",
      "/hatale/gallery/in/in-8.jpg",
      "/hatale/gallery/in/in-9.jpg",
      "/hatale/gallery/in/in-10.jpg",
    ],
  },
];

const GalleryHat: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openGallery = (event: EventData, index: number): void => {
    setSelectedEvent(event);
    setCurrentIndex(index);
  };

  const closeGallery = (): void => {
    setSelectedEvent(null);
  };

  const nextImage = (): void => {
    if (selectedEvent) {
      setCurrentIndex((prev) => (prev + 1) % selectedEvent.gallery.length);
    }
  };

  const prevImage = (): void => {
    if (selectedEvent) {
      setCurrentIndex((prev) =>
        prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1
      );
    }
  };

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

  useGSAP(() => {
    gsap.from(".events-text", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#events",
        start: "bottom bottom",
      },
    });
    gsap.from(".events-img", {
      x: -55,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#events",
        start: "bottom bottom",
      },
    });
  }, []);

  return (
    <div
      id="events"
      className="px-8 py-20 flex flex-col items-center bg-fixed bg-center bg-cover"
      style={{}}
    >
      <div className="flex flex-col items-center ">
        <h2 className="font-quicksand text-lg text-center">Gallery</h2>
        <div className="border-b-[1px] border-secondaryGreen w-[80px]" />
      </div>
      <p className="mt-5 text-5xl text-center max-sm:text-2xl ">
        Checkout our Full Gallery
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[150px]">
        {eventsData.flatMap((event) =>
          event.gallery.map((src, index) => (
            <div
              key={src + index}
              className={`relative cursor-pointer group overflow-hidden rounded-lg shadow-lg ${
                index % 7 === 0
                  ? "row-span-2 col-span-2"
                  : index % 5 === 0
                  ? "row-span-2"
                  : ""
              }`}
              onClick={() => openGallery(event, index)}
            >
              <img
                src={src}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))
        )}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300">
          <button
            onClick={closeGallery}
            className="absolute top-5 right-5 text-PRIMARY-200 bg-secondaryGreen rounded-full text-2xl p-2 hover:bg-secondaryGreen/70 active:scale-95 transition"
          >
            <FaXmark />
          </button>
          <div className="relative max-w-5xl mx-auto p-4 transition-all duration-500 transform scale-100">
            <img
              src={selectedEvent.gallery[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded shadow-xl"
            />
          </div>
          <div className="absolute bottom-5 flex justify-center gap-3">
            <button
              onClick={prevImage}
              className="bg-secondaryGreen rounded-full w-10 h-10 flex items-center justify-center  hover:bg-secondaryGreen/70 active:scale-95 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="bg-secondaryGreen rounded-full w-10 h-10 flex items-center justify-center  hover:bg-secondaryGreen/70 active:scale-95 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryHat;
