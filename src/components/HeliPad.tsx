const HeliPad = () => {
  return (
    <div className="flex md:flex-row flex-col mt-36">
      <div className="md:w-[40%] w-full flex flex-col justify-center  items-center">
        <div className="p-10 flex flex-col items-center">
          <img
            src="/public/text-q-top.png"
            alt="text-top"
            className="w-[50%] mb-5"
          />
          <h1 className="text-center text-xl md:text-xl lg:text-3xl text-gray-700">
            Indulge in a breathtaking 40-minute helicopter ride that transforms
            your travel experience into an unforgettable memory
          </h1>
          <img
            src="/public/text-q-bottom.png"
            alt="text-top"
            className="w-[50%] mt-5"
          />
        </div>
      </div>
      <div className="md:w-[60%] w-full">
        <img src="/anac/heli.jpg" alt="" />
      </div>
    </div>
  );
};

export default HeliPad;
