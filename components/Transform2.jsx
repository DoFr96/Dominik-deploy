"use client";
import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { transform } from "@/constants";
import { Reveal } from "./Reveal";
const Transform2 = () => {
  return (
    <section className="flex sm:flex-row  flex-col-reverse justify-between items-center sm:py-16 py-6 sm:gap-20 sm:mb-0 mb-10">
      <div className="flex flex-1 justify-center items-start ">
        <Reveal>
          <Image
            src={"/images/transformlossy2brightness.webp"}
            alt="excercise"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl "
          />
        </Reveal>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
        <Reveal>
          <h3 className="md:text-[50px] text-[40px] font-medium w-full z-10 md:leading-[60px] leading-[55px] mb-10 ">
            Transform your physique with our fitness plan
          </h3>
        </Reveal>

        <div className="flex flex-col mb-5">
          {transform.map((item, index) => {
            const { id, desc, icon } = item;
            return (
              <div key={index} className="flex flex-row">
                <Reveal>
                  <div className="flex flex-row justify-center items-center mb-3 gap-3">
                    <div className="p-1 bg-secondary text-black rounded-full">
                      {icon}
                    </div>
                    <p className="font-medium text-[18px]">{desc}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transform2;
