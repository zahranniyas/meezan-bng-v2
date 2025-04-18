import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import Dropdown from "react-dropdown";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./border-style.css";
import DatePicker from "react-datepicker";

interface DropdownOption {
  value: string;
  label: string;
}

const DesktopBook = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  // Adult & Children count
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);

  // Dropdown
  const options = ["Ancoombura", "Hatale", "Mini-World's End", "Nagala"];
  const defaultOption = options[0];

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = (option: DropdownOption) => {
    setSelectedOption(option.value);
    console.log("Selected option:", option.value);
  };

  return (
    <div
      id="bookBar"
      className="hidden lg:flex flex-col bg-[#373225] border-[#e6d199] border-[3px] py-4 justify-center items-center px-6 text-white rounded-3xl shadow-2xl"
    >
      <div className="flex border-white py-4 gap-5 mb-4 w-full">
        <input
          placeholder="Full Name"
          type="text"
          name=""
          id=""
          className="focus:outline-none placeholder:text-white/40 bg-transparent border-b-[1px] border-white w-[50%]"
        />
        <input
          type="email"
          placeholder="Email"
          name=""
          id=""
          className="focus:outline-none placeholder:text-white/40 bg-transparent border-b-[1px] border-white w-[50%]"
        />
      </div>
      <div className="flex">
        <div className="border-r-[1px] border-white border-opacity-60 pr-5 py-8">
          <p className="text-sm">Check-in</p>
          <DatePicker
            minDate={new Date()}
            selected={startDate}
            onChange={(date: Date | null) => date && setStartDate(date)}
            className="border-b-[1px] mt-2 font-quicksand font-thin focus:outline-none pl-1 text-xl bg-transparent w-[120px]"
            dateFormat={"dd MMM, yyyy"}
          />
        </div>
        <div className=" border-r-[1px] border-white border-opacity-60 pr-5 py-8 ml-5">
          <p className="text-sm">Check-out</p>
          <DatePicker
            selected={endDate}
            minDate={startDate}
            onChange={(date: Date | null) => date && setEndDate(date)}
            className="border-b-[1px] mt-2 font-quicksand font-thin focus:outline-none pl-1 text-xl bg-transparent w-[120px]"
            dateFormat={"dd MMM, yyyy"}
          />
        </div>
        <div className="border-r-[1px] border-white border-opacity-60 pr-1 py-8 ml-5">
          <p className="text-sm">Adults</p>
          <div className="mt-2 flex items-center gap-2 w-[100px] font-extralight opacity-80">
            <button
              disabled={adultCount == 1 ? true : false}
              onClick={() => setAdultCount((count) => count - 1)}
            >
              <FaCircleMinus
                className={`text-xl ${
                  adultCount == 1 ? "text-white" : "text-[#e6d199]"
                }`}
              />
            </button>
            <p className="border-[1px] rounded-sm pt-1 px-1 w-8 text-center">
              {adultCount}
            </p>
            <button onClick={() => setAdultCount((count) => count + 1)}>
              <FaCirclePlus className="text-xl text-[#e6d199]" />
            </button>
          </div>
        </div>
        <div className="border-r-[1px] border-white border-opacity-60 pr-1 py-8 ml-5">
          <p className="text-sm">Children</p>
          <div className="mt-2 flex items-center gap-2 w-[100px] font-extralight opacity-80">
            <button
              disabled={childrenCount == 0 ? true : false}
              onClick={() => setChildrenCount((count) => count - 1)}
            >
              <FaCircleMinus
                className={`text-xl ${
                  childrenCount == 0 ? "text-white" : "text-[#e6d199]"
                }`}
              />
            </button>
            <p className="border-[1px] rounded-sm pt-1 px-1 w-8 text-center">
              {childrenCount}
            </p>
            <button onClick={() => setChildrenCount((count) => count + 1)}>
              <FaCirclePlus className="text-xl text-[#e6d199]" />
            </button>
          </div>
        </div>
        <div className=" py-0 ml-5 flex flex-col justify-center items-center gap-4">
          <Dropdown
            options={options}
            onChange={() => handleChange}
            value={selectedOption}
            placeholder="Select an option"
          />
          <button className="bg-[#e6d199] text-black font-thin rounded-md border-[1px] pb-[2px] w-[110px] pt-[4px] hover:bg-[#c5b075]">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopBook;
