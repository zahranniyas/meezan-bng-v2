import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { logoWhite } from "../assets";

const Footer = () => {
  return (
    <div className="mt-[300px] bg-[#373225] flex justify-between text-white font-quicksand font-thin px-[200px] py-10">
      <img src={logoWhite} alt="logo" className="w-[150px] object-contain" />
      <div className="flex flex-col gap-3">
        <a href="">About</a>
        <a href="">Bungalows</a>
        <a href="">Services</a>
        <a href="">Booking</a>
        <a href="">Contact</a>
      </div>
      <div className="flex flex-col gap-3">
        <a href="">Events</a>
        <a href="">FAQ</a>
        <a href="">Media</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="flex flex-col gap-3">
        <p>+94 777 111 222</p>
        <p>info@meezan.com</p>
        <p>
          <FaFacebook className="inline mr-3" />
          <FaInstagram className="inline" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
