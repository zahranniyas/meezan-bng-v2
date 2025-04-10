import { useState, useEffect, useRef } from 'react';

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
    if (intervalRef.current) return; // Avoid multiple intervals
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
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full shrink-0">
            <img
              src={src}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
