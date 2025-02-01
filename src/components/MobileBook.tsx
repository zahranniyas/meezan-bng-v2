import { useEffect, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "./border-style.css";

interface DropdownOption {
  value: string;
  label: string;
}

const MobileBook = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  // Adult & Children count
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);

  // Dropdown
  const options = ["Anacoombra", "Hatale", "Mini-World's End", "Nagala"];
  const defaultOption = options[0];

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (option: DropdownOption) => {
    setSelectedOption(option.value);
    console.log("Selected option:", option.value);
  };

  return (
    <div className="px-2 mt-5 lg:hidden">
      <div className="bg-primary text-white flex flex-col border-white border-[2px] rounded-3xl shadow-2xl px-10 max-sm:px-2">
        <h2 className="text-center pt-5 pb-4 border-b-[1px] border-white text-2xl">
          Plan Your Getaway Today
        </h2>
        <div className="flex border-b-[1px] border-white py-8 gap-5">
          <input
            placeholder="Full Name"
            type="text"
            name=""
            id=""
            className="focus:outline-none placeholder:text-white/40 bg-transparent border-b-[1px] border-white w-[50%]"
          />
          <input
            type="text"
            placeholder="Email"
            name=""
            id=""
            className="focus:outline-none placeholder:text-white/40 bg-transparent border-b-[1px] border-white w-[50%]"
          />
        </div>
        <div className="flex items-center justify-between text-center border-b-[1px] border-white py-8 gap-5 w-full">
          <div className="border-opacity-60 flex flex-col items-center justify-center">
            <p className="text-sm">Adults</p>
            <div className="mt-2 flex items-center gap-2 font-extralight opacity-80">
              <button
                disabled={adultCount == 1 ? true : false}
                onClick={() => setAdultCount((count) => count - 1)}
              >
                <FaCircleMinus
                  className={`text-xl ${
                    adultCount == 1 ? "text-white" : "text-secondary"
                  }`}
                />
              </button>
              <p className="border-[1px] border-white rounded-sm pt-1 px-1 w-8 text-center">
                {adultCount}
              </p>
              <button onClick={() => setAdultCount((count) => count + 1)}>
                <FaCirclePlus className="text-xl text-secondary" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" border-opacity-60 w-full">
              <p className="text-sm">Check-in</p>
              <DatePicker
                minDate={new Date()}
                selected={startDate}
                onChange={(date: Date | null) => date && setStartDate(date)}
                className="border-b-[1px] border-white mt-2 font-quicksand max-sm:text-center font-thin focus:outline-none pl-1 text-xl max-sm:text-sm bg-transparent w-[120px] max-sm:w-full"
                dateFormat={"dd MMM, yyyy"}
              />
            </div>
            <div className="border-opacity-60 w-full">
              <p className="text-sm">Check-out</p>
              <DatePicker
                minDate={startDate}
                selected={endDate}
                onChange={(date: Date | null) => date && setEndDate(date)}
                className="border-b-[1px] mt-2 border-white font-quicksand font-thin max-sm:text-center focus:outline-none pl-1 text-xl max-sm:text-sm bg-transparent w-[120px] max-sm:w-full"
                dateFormat={"dd MMM, yyyy"}
              />
            </div>
          </div>
          <div className="border-opacity-60 flex flex-col items-center justify-center">
            <p className="text-sm">Children</p>
            <div className="mt-2 flex items-center gap-2 font-extralight opacity-80">
              <button
                disabled={childrenCount == 0 ? true : false}
                onClick={() => setChildrenCount((count) => count - 1)}
              >
                <FaCircleMinus
                  className={`text-xl ${
                    childrenCount == 0 ? "text-white" : "text-secondary"
                  }`}
                />
              </button>
              <p className="border-[1px] border-white rounded-sm pt-1 px-1 w-8 text-center">
                {childrenCount}
              </p>
              <button onClick={() => setChildrenCount((count) => count + 1)}>
                <FaCirclePlus className="text-xl text-secondary" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex gap-4 py-8 max-sm:py-4 items-center justify-center ">
          <Dropdown
            options={options}
            onChange={() => handleChange}
            value={selectedOption}
            placeholder="Select an option"
          />
          <button className="bg-secondary hover:bg-secondary/50 transition-all text-black active:scale-90 font-thin rounded-md border-[1px] pb-[2px] px-3 pt-[5px]">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBook;
