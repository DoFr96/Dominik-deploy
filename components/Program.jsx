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
import { AnimatePresence, motion } from "framer-motion";

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    opacity: 0,
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

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
    <motion.section
      variants={containerVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="program"
      className="sm:py-16 py-6 flex flex-col sm:mt-0 mt-20  "
    >
      <motion.div
        variants={mobileLinkVars}
        className="flex sm:flex-row flex-col  sm:justify-between justify-center items-center"
      >
        <div className="flex flex-1 ">
          <h3 className="sm:text-[50px] text-[42px]  font-medium w-full z-10 sm:mb-0 mb-5">
            Our Program
          </h3>
          <div className="absolute left-0 right-0 w-full overflow-x-clip ">
            <h3 className="sm:text-[150px] text-[130px] overflow-x-clip  absolute font-bold z-1 sm:-left-10 sm:-top-[118px] -left-[33px] -top-[100px]  opacity-50 ">
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
      </motion.div>

      {/* Slider section */}

      <motion.div
        variants={mobileLinkVars}
        className="sm:w-[80%] w-[100%] mt-10 mx-auto"
      >
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
      </motion.div>
    </motion.section>
  );
};

export default Program;
