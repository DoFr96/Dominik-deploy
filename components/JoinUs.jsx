"use client";
import React from "react";
import { Reveal } from "./Reveal";
const JoinUs = () => {
  return (
    <Reveal>
      <section className=" sm:p-8 p-6 bg-dimBlack rounded-lg mb-10">
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center sm:items-center  ">
          <div className="sm:w-[70%] w-[100%] sm:mb-0 mb-10">
            <h4 className="font-semibold text-white sm:text-[25px] text-[22px] text-center">
              Enhance user experience with healthy nutritions tips, support
              resources, and social elements.
            </h4>
          </div>
          <div className="flex sm:justify-end justify-center items-center sm:w-[30%] w-[100%] ">
            <button className="main_btn">Join Us</button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default JoinUs;
