import { useState, useEffect, useRef } from "react";

interface SlideshowProps {
  images: string[];
  interval?: number;
  threshold?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({
  images,
  interval = 3000,
  threshold = 0.2,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideshowRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSlideshow = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startSlideshow();
          } else {
            stopSlideshow();
          }
        });
      },
      { threshold }
    );

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current);
    }

    return () => {
      if (slideshowRef.current) {
        observer.unobserve(slideshowRef.current);
      }
      stopSlideshow();
    };
  }, [images, interval, threshold]);

  return (
    <div ref={slideshowRef} className="relative w-full h-full overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`slide-${idx}`}
          className={`absolute w-full h-full object-cover object-bottom transition-opacity duration-1000 ease-in-out transform transition-transform ${
            currentIndex === idx
              ? "opacity-100 scale-105 z-10"
              : "opacity-0 scale-100 z-0"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
