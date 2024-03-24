"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { programs } from "../constants";
import Image from "next/image";
import React from "react";

const Test5 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
  };
  const slider = React.useRef(null);
  return (
    <div className="w-3/4 m-auto my-20">
      <div className="mt-20">
        <Slider {...settings} ref={slider}>
          {programs.map((program, idx) => {
            const { title, content, id, icon } = program;
            return (
              <div
                key={id}
                className="flex-wrap flex-col p-10 bg-dimBlack rounded-xl max-w-[250px] slide-center"
              >
                <Image
                  src={icon}
                  alt={id}
                  width={30}
                  height={30}
                  className="mb-3"
                />
                <h4 className="text-white font-semibold text-3xl mb-2">
                  {title}
                </h4>
                <p className="text-dimWhite leading-[25px]">{content}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
      <button onClick={() => slider?.current?.slickNext()}>Next</button>
    </div>
  );
};

export default Test5;
