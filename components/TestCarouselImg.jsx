"use client";

import React from "react";
import { programs } from "../constants";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../assets/astronaut.png";
import celebrating from "../assets/celebrating.png";
import education from "../assets/education.png";
import taken from "../assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../app/imgCarousel.css";

const images = [astronaut, celebrating, education, taken];

//import { Carousel, Typography, Button } from "@material-tailwind/react";
const Test = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <section className="my-20 carouselTest">
      <Slider {...settings}>
        {images.map((img, idx) => {
          return (
            <div
              key={idx + 1}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <Image src={img} alt={idx} width={200} height={200} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Test;
