"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProgramList from "./ProgramList";
import Test5 from "./Test5";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { programs } from "../constants";

const Program2 = () => {
  const slider = React.useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    variableWidth: true,
  };
  return (
    <section className="sm:py-16 py-6 flex flex-col ">
      <div className="flex flex-row  justify-between items-center">
        <div className="flex flex-1 ">
          <h3 className="text-[50px] font-medium w-full z-10">
            Explore our program
          </h3>
          <div className="absolute left-0 right-0 w-full">
            <h3 className="text-[150px] absolute font-bold z-1 -left-10 -top-[118px]  opacity-50 ">
              Program
            </h3>
          </div>
        </div>

        {/* Arrows for chaning the sliders */}

        <div className="flex flex-1 flex-row gap-3 items-center justify-center">
          <div className="bg-secondary hover:shadow-md active:bg-secondary/90 hover:shadow-black/30 transition-all  flex justify-center items-center rounded-full p-1">
            <button onClick={() => slider?.current?.slickPrev()}>
              {" "}
              <HiOutlineArrowSmLeft className="size-[40px] text-white " />
            </button>
          </div>
          <div className="bg-secondary hover:shadow-md active:bg-secondary/90 hover:shadow-black/30 transition-all  flex justify-center items-center rounded-full p-1">
            <button
              onClick={() => slider?.current?.slickNext()}
              className="cursor-pointer  "
            >
              <HiOutlineArrowSmRight className="size-[40px] text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider section */}

      <div className="w-[80%] mt-10 mx-auto">
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
                  width={35}
                  height={35}
                  className="mb-3"
                />
                <h4 className="text-white font-semibold text-xl mb-2">
                  {title}
                </h4>
                <p className="text-dimWhite leading-[25px]">{content}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Program2;
