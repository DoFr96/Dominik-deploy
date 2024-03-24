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

const Program = () => {
  const slider = React.useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    variableWidth: true,
  };
  return (
    <section className="sm:py-16 py-6 flex flex-col sm:mt-0 mt-20  ">
      <div className="flex sm:flex-row flex-col  sm:justify-between justify-center items-center">
        <div className="flex flex-1 ">
          <h3 className="sm:text-[50px] text-[42px]  font-medium w-full z-10 sm:mb-0 mb-5">
            Explore our program
          </h3>
          <div className="absolute left-0 right-0 w-full">
            <h3 className="sm:text-[150px] text-[130px]  absolute font-bold z-1 sm:-left-10 sm:-top-[118px] -left-[33px] -top-[100px]  opacity-50 ">
              Program
            </h3>
          </div>
        </div>

        {/* Arrows for chaning the sliders */}

        <div className="flex flex-1 flex-row gap-3 items-center justify-center">
          <div className="z-10 bg-secondary hover:shadow-md active:bg-secondary/90 hover:shadow-black/30 transition-all  flex justify-center items-center rounded-full p-1">
            <button onClick={() => slider?.current?.slickPrev()}>
              {" "}
              <HiOutlineArrowSmLeft className="size-[40px] text-white " />
            </button>
          </div>
          <div className="z-10 bg-secondary hover:shadow-md active:bg-secondary/90 hover:shadow-black/30 transition-all  flex justify-center items-center rounded-full p-1">
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

      <div className="sm:w-[80%] w-[100%] mt-10 mx-auto">
        <Slider {...settings} ref={slider}>
          {programs.map((program, idx) => {
            const { title, content, id, icon } = program;
            return (
              <div
                key={id}
                className="flex-wrap flex-col p-10 bg-dimBlack rounded-xl max-w-[250px] slide-center m-1"
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

export default Program;
