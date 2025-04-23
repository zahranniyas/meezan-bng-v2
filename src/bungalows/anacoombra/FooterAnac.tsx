import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { logoWhite } from "../../assets";

const FooterAnac = () => {
  return (
    <div className=" bg-primaryGreen flex max-sm:flex-col max-sm:items-center max-sm:gap-5 justify-between text-white font-quicksand font-thin px-[20px] lg:px-[200px] py-10">
      <img src={logoWhite} alt="logo" className="w-[150px] object-contain" />
      <div className="flex max-sm:flex-row max-sm:text-xs flex-col gap-3">
        <a href="">About</a>
        <a href="">Bungalows</a>
        <a href="">Services</a>
        <a href="">Booking</a>
        <a href="">Contact</a>
      </div>
      <div className="flex max-sm:flex-row max-sm:text-[10px] flex-col gap-3">
        <a href="">Events</a>
        <a href="">FAQ</a>
        <a href="">Media</a>
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className="flex max-sm:flex-row max-sm:text-xs flex-col gap-3">
        <p>+94 76 830 4310</p>
        <p>info@meezan.com</p>
        <p>
          <FaFacebook className="inline mr-3" />
          <FaInstagram className="inline" />
        </p>
      </div>
    </div>
  );
};

export default FooterAnac;
