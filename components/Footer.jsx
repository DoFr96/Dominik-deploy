"use client";

import React from "react";
import Image from "next/image";
import { socialMedia } from "@/constants";
import { Reveal } from "./Reveal";
const Footer = () => {
  return (
    <footer className="sm:max-w-[1280px] mx-auto  overflow-hidden sm:p-16 p-6 w-full  ">
      <Reveal>
        <div className="  flex justify-between items-center sm:flex-row flex-col-reverse mt-10 pt-6 border-t-[1px] border-t-dimBlaborder-dimBlack">
          <p className="font-poppins font-normal text-center text-[18px] md:mt-0 mt-4 leading-[27px] text-black border-black">
            Copyright Ⓒ 2024 Rupa. All Rights Reserved.
          </p>

          <div className="flex flex-row justify-center items-center ">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className={` object-contain cursor-pointer  hover:opacity-70 overflow-hidden  ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </Reveal>{" "}
    </footer>
  );
};

export default Footer;
