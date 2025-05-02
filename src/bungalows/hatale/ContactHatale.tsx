import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../components/border-style.css";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { hacontactbg } from "../../assets";
import { FaSquarePhone, FaSquareEnvelope } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ContactHatale = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  // Adult & Children count
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(1);

  // Loading
  useGSAP(() => {
    gsap.from(".contact-txt", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact",
        start: "bottom, bottom",
      },
    });
    gsap.from(".book-container", {
      scale: 1.1,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact",
        start: "bottom, bottom",
      },
    });
  }, []);

  return (
    <div
      id="contact"
      className="flex justify-center items-center gap-5 lg:gap-20 py-[100px] max-sm:py-[70px] px-5 max-sm:flex-col"
      style={{
        backgroundImage: `url(${hacontactbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" w-[20rem]">
        <h2 className="text-3xl max-sm:text-center contact-txt">Contact Us</h2>
        <p className="font-quicksand mt-1 mb-10 max-sm:text-center contact-txt">
          Have a question for us? Our team will be happy to listen to your
          queries and assist you in making your stay memorable
        </p>
        <div className="flex items-center gap-2 max-sm:justify-center contact-txt">
          <FaSquarePhone />
          <p className="font-quicksand">+94 76 830 4310</p>
        </div>
        <div className="flex items-center gap-2 max-sm:justify-center contact-txt">
          <FaSquareEnvelope />
          <p className="font-quicksand">meezanbungalow@sltnet.lk</p>
        </div>
      </div>
      <div className="bg-secondary flex flex-col border-primary border-[2px] rounded-3xl shadow-2xl px-10 max-sm:px-2 book-container">
        <h2 className="text-center pt-5 pb-4 border-b-[1px] border-primary text-2xl">
          Book your Stay at <span>Hatale</span>
        </h2>
        <div className="flex border-b-[1px] border-primary py-8 gap-5">
          <input
            placeholder="Full Name"
            type="text"
            name=""
            id=""
            className="focus:outline-none placeholder:text-primary/40 bg-transparent border-b-[1px] border-primary w-[50%]"
          />
          <input
            type="text"
            placeholder="Email"
            name=""
            id=""
            className="focus:outline-none placeholder:text-primary/40 bg-transparent border-b-[1px] border-primary w-[50%]"
          />
        </div>
        <div className="flex items-center justify-between text-center border-b-[1px] border-primary py-8 gap-5 w-full">
          <div className="border-opacity-60 flex flex-col items-center justify-center">
            <p className="text-sm">Adults</p>
            <div className="mt-2 flex items-center gap-2 font-extralight opacity-80">
              <button
                disabled={adultCount == 1 ? true : false}
                onClick={() => setAdultCount((count) => count - 1)}
              >
                <FaCircleMinus
                  className={`text-xl ${
                    adultCount == 1 ? "text-white" : "text-primary"
                  }`}
                />
              </button>
              <p className="border-[1px] border-primary rounded-sm pt-1 px-1 w-8 text-center">
                {adultCount}
              </p>
              <button onClick={() => setAdultCount((count) => count + 1)}>
                <FaCirclePlus className="text-xl text-primary" />
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
                className="border-b-[1px] border-primary mt-2 font-quicksand max-sm:text-center font-thin focus:outline-none pl-1 text-xl max-sm:text-sm bg-transparent w-[120px] max-sm:w-full"
                dateFormat={"dd MMM, yyyy"}
              />
            </div>
            <div className="border-opacity-60 w-full">
              <p className="text-sm">Check-out</p>
              <DatePicker
                minDate={startDate}
                selected={endDate}
                onChange={(date: Date | null) => date && setEndDate(date)}
                className="border-b-[1px] mt-2 border-primary font-quicksand font-thin max-sm:text-center focus:outline-none pl-1 text-xl max-sm:text-sm bg-transparent w-[120px] max-sm:w-full"
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
                    childrenCount == 0 ? "text-white" : "text-primary"
                  }`}
                />
              </button>
              <p className="border-[1px] border-primary rounded-sm pt-1 px-1 w-8 text-center">
                {childrenCount}
              </p>
              <button onClick={() => setChildrenCount((count) => count + 1)}>
                <FaCirclePlus className="text-xl text-primary" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex py-8 max-sm:py-4 items-center justify-center ">
          <button className="bg-primary hover:bg-primary/50 transition-all active:scale-90 text-white font-thin rounded-md border-[1px] pb-[2px] px-3 pt-[5px]">
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHatale;
