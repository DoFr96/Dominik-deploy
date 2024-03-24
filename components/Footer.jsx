"use client";

import React from "react";
import Image from "next/image";
import { socialMedia } from "@/constants";
const Footer = () => {
  return (
    <footer className="sm:max-w-[1280px] mx-auto  overflow-hidden sm:p-16 p-6">
      {" "}
      <div className="w-full flex justify-between items-center md:flex-row flex-col mt-10 pt-6 border-t-[1px] border-t-dimBlaborder-dimBlack">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black border-black">
          Copyright Ⓒ 2024 Rupa. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              width={25}
              height={25}
              className={` object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
