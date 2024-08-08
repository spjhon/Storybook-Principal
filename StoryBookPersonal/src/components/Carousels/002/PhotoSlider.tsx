import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import style from "./styles.module.css";

const PhotoSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={style.carousel}>
      <BsArrowLeftCircleFill onClick={prevSlide} className={`${style.arrow} ${style.arrowLeft}`} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? `${style.slide}` : `${style.slide} ${style.slideHidden}`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${style.arrow} ${style.arrowRight}`}
      />
      <span className={style.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? `${style.indicator}` : `${style.indicator} ${style.indicatorInactive}`
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default PhotoSlider;