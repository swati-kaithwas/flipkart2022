import React, { useState } from "react";
import { caruosel } from "./Caruoseldata";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Carousel.css";
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextS = () => {
    setCurrent(current === 0 ? length - 1 : current + 1);
  };
  const previousS = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section>
      <MdArrowBackIosNew className="left_Arrow" onClick={previousS} />
      <MdArrowForwardIos className="right_Arrow" onClick={nextS} />
      {caruosel.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            <img src={slide.img} alt="carousel" className="images" />;
          </div>
        );
      })}
    </section>
  );
};
export { Carousel };
