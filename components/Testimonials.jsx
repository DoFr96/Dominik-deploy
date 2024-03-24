"use client";
import React from "react";
import Testimonial from "./Testimonial";
import { Reveal } from "./Reveal";
const Testimonials = () => {
  return (
    <section className="flex sm:flex-row flex-col justify-between items-center sm:px-16 py-6 sm:mt-0 mt-10">
      <div className="flex flex-1 mr-10 ">
        <Reveal>
          <h3 className="text-[30px] font-semibold w-full z-10">
            What my clients say about me?
          </h3>
        </Reveal>

        <div className="absolute left-0 right-0 overflow-x-clip w-full">
          <Reveal>
            <h3 className="sm:text-[150px] text-[130px] absolute font-bold z-1 sm:-left-[25px] sm:-top-[118px] -left-[20px] -top-[100px]  opacity-50 ">
              stimonial
            </h3>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-1 sm:mt-0 mt-10 z-10">
        <Testimonial />
      </div>
    </section>
  );
};

export default Testimonials;
