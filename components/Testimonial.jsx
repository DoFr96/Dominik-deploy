"use client";

import React, { useState } from "react";
import { testimonials } from "@/constants";
import { LiaStarSolid } from "react-icons/lia";
import Image from "next/image";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Reveal } from "./Reveal";
const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(0);

  console.log(testimonials.length);

  const toggle = (i) => {
    if (isVisible == i) setIsVisible(null);
    if (i == testimonials.length) {
      setIsVisible(0);
    } else setIsVisible(i);
  };

  return (
    <>
      <Reveal>
        {testimonials.map((testimonial, i) => {
          const { role, img, name, review, stars } = testimonial;

          return (
            <div
              key={name}
              index={i}
              className={`${
                isVisible === i ? "flex" : "hidden"
              } p-8 bg-dimBlack rounded-md flex-col hover:shadow-md `}
            >
              {" "}
              <div className="flex flex-row mb-2 text-yellow-400 ">{stars}</div>
              <p className="mb-1 text-white">{review}</p>
              {/* Person who left the review */}
              <div className="flex flex-row items-center justify-between  mt-5">
                {/* Left side */}
                <div className="flex flex-row justify-start items-center space-x-3">
                  <div className="relative"></div>
                  <Image
                    src={img}
                    alt={`image`}
                    width={50}
                    height={50}
                    className=" aspect-square rounded-full"
                  />

                  <div>
                    <h4 className="font-bold text-white">{name}</h4>
                    <p className=" text-dimWhite">{role}</p>
                  </div>
                </div>
                {/* Right side */}
                <div className="flex justify-end items-center">
                  <HiOutlineArrowSmRight
                    className=" w-[40px] h-[40px] cursor-pointer text-white bg-secondary hover:bg-secondary/90 active:bg-secondary/90 transition-all  flex justify-center items-center rounded-full p-1"
                    onClick={() => toggle(i + 1)}
                  />
                </div>
              </div>
            </div>
          );
        })}{" "}
      </Reveal>
    </>
  );
};

export default Testimonial;
