import React from "react";

const BBQCollage = () => {
  const bbqImages = [
    "/hatale/7607.jpg",
    "/hatale/7610.jpg",
    "/hatale/7627.jpg",
    "/hatale/7641.jpg",
  ];
  const rotations = ["-3deg", "2deg", "-2deg", "3deg"];

  return (
    <section className="py-12 bg-gray-50 mt-24">
      {/* Heading & Promo */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
          Grill & Chill Moments
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Savor the taste of our premium barbeque—grilled to perfection and
          enjoyed under the open sky.
        </p>
      </div>

      {/* Responsive Collage Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {bbqImages.map((src, idx) => (
            <div
              key={idx}
              className="w-full aspect-[4/3] bg-white rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:z-10"
              style={{ transform: `rotate(${rotations[idx]})` }}
            >
              <img
                src={src}
                alt={`BBQ shot ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBQCollage;
