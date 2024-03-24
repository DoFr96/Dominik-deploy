import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { transform } from "@/constants";
const Transform = () => {
  return (
    <section className="flex sm:flex-row  flex-col-reverse justify-between items-center sm:py-16 py-6 sm:gap-20 sm:mb-0 mb-10">
      <div className="flex flex-1 justify-center items-start ">
        <Image
          src={"/images/transform.png"}
          alt="excercise"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-xl "
        />
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
        <h3 className="md:text-[50px] text-[40px] font-medium w-full z-10 md:leading-[60px] leading-[55px] mb-10 ">
          Transform your physique with our fitness plan
        </h3>
        <div className="flex flex-col mb-5">
          {transform.map((item) => {
            const { id, desc, icon } = item;
            return (
              <div key={id} className="flex flex-row">
                <div className="flex flex-row justify-center items-center mb-3 gap-3">
                  <div className="p-1 bg-secondary text-black rounded-full">
                    {icon}
                  </div>
                  <p className="font-medium text-[18px]">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transform;
