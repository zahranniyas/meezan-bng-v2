import React, { useState, useEffect, useRef } from 'react';

const Slideshow = ({ images, interval = 3000, threshold = 0.2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef(null);
  const intervalRef = useRef(null);

  // Start the slideshow
  const startSlideshow = () => {
    if (intervalRef.current) return; // Avoid multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
  };

  // Stop the slideshow
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
          // If slideshow is in view, start sliding; otherwise stop
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
      stopSlideshow(); // Cleanup on unmount
    };
  }, [images, interval, threshold]);

  return (
    <div ref={slideshowRef} className="relative w-full h-full overflow-hidden">
      {/* The “track” that slides horizontally */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-full h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Render each image full-width, side by side */}
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
