const TeaTable = () => {
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
            A serene garden sanctuary framed by misty mountains, inviting
            gentle, peaceful pauses amidst lush greenery
          </h1>
          <img
            src="/public/text-q-bottom.png"
            alt="text-top"
            className="w-[50%] mt-5"
          />
        </div>
      </div>
      <div className="md:w-[60%] w-full">
        <img src="/hatale/6817.jpg" alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default TeaTable;
