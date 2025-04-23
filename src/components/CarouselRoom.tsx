import { useEffect, useState } from "react";
import "./Carousel.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

interface Props {
  imageArray: string[];
}

function CarouselRoom({ imageArray }: Props) {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageArray.length - 1);

  useEffect(() => {
    if (midImage == 0) {
      setLeftImage(imageArray.length - 1);
      setRightImage(1);
    } else if (midImage == imageArray.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const Increment = () => {
    if (midImage == imageArray.length - 1) {
      setMidImage(0);
    } else {
      setMidImage(midImage + 1);
    }
    //----------------GSAP ANIMATIONS-------------------------
    gsap.fromTo(
      ".middleImage",
      { x: -200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };
  const Decrement = () => {
    if (midImage == 0) {
      setMidImage(imageArray.length - 1);
    } else {
      setMidImage(midImage - 1);
    }
    //----------------GSAP ANIMATIONS-------------------------
    gsap.fromTo(
      ".middleImage",
      { x: 200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );
  };

  return (
    <div className="ImageSlider">
      <div className="ImageSliderContainter">
        <div className="Images">
          <img src={imageArray[rightImage]} className="rightImage" />
          <img src={imageArray[midImage]} className="middleImage" />
          <img src={imageArray[leftImage]} className="leftImage" />
        </div>
      </div>
      <div className="buttons">
        <button className="leftButton" onClick={() => Decrement()}>
          <IoIosArrowBack />
        </button>
        <button className="rightButton" onClick={() => Increment()}>
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
}

export default CarouselRoom;
