const FoodAnac = () => {
  const images = [
    "/food/001.jpg",
    // "/food/002.jpg",
    "/food/003.jpg",
    "/food/004.jpg",
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 mt-[100px]">
      {/* Heading (optional) */}
      <h2 className="text-3xl font-semibold text-center mb-6">
        Culinary Delights
      </h2>

      {/* Promo Text */}
      <p className="text-lg text-center text-gray-700 mb-10">
        Enjoy the convenience of a skilled in-house cook ready to prepare
        delicious meals tailored to your preferences. Indulge in a delightful
        barbeque experience amidst the scenic surroundings
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Delicious meal ${idx + 1}`}
              className="w-full h-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodAnac;
