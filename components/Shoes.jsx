"use client";
import React from "react";
import Image from "next/image";

import { Reveal } from "./Reveal";
const Shoes = () => {
  return (
    <section className="sm:py-16 py-6 max-w-[1480px]">
      <div className="sm:flex hidden sm:flex-row flex-col sm:gap-0 gap-10 justify-between items-center w-full">
        <Reveal>
          <Image
            src={"/images/tenisica1.png"}
            width={200}
            height={200}
            alt="tenisice"
            className="z-10 hover:opacity-90"
          />
        </Reveal>
        <Reveal>
          <Image
            src={"/images/tenisica6.png"}
            width={200}
            height={200}
            alt="tenisice"
            className="z-10 hover:opacity-90"
          />
        </Reveal>
        <Reveal>
          <Image
            src={"/images/tenisica7.png"}
            width={200}
            height={200}
            alt="tenisice"
            className="z-10 hover:opacity-90"
          />
        </Reveal>

        <Reveal>
          <Image
            src={"/images/tenisica2.png"}
            width={200}
            height={200}
            alt="tenisice"
            className="z-10 hover:opacity-90"
          />
        </Reveal>
      </div>
      {/*
      
       <div className="w-full sm:hidden flex flex-col justify-center items-center my-5 group ">
        <Reveal>
          <div className="flex flex-col justify-end items-center group">
            <Image
              src={"/images/tenisica0.png"}
              width={200}
              height={200}
              alt="tenisice"
              className="z-10 hover:opacity-90"
            />
            <p className="invisible group-hover:visible text-transparent bg-clip-text bg-gradient-to-r from-[#ef9e78] to-[#f84808] font-semibold ">
              Nike Pegasus
            </p>
          </div>
        </Reveal>
      </div>
      */}
    </section>
  );
};

export default Shoes;
