"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { PiSignIn } from "react-icons/pi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { socialMedia } from "@/constants";
const NavTest = () => {
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" pt-2 flex flex-row justify-between items-center ">
      <div>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      </div>
      <div className="sm:flex hidden flex-row flex-1 justify-end items-center gap-20 font-medium text-[18px]">
        <div className="flex gap-4  ">
          <Link href="#" className="hover:text-black/30">
            Home
          </Link>
          <Link href="#program" className="hover:text-black/30">
            Program
          </Link>
          <Link href="#pricing" className="hover:text-black/30">
            Pricing
          </Link>
          <Link href="/#contact" className="hover:text-black/30">
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-6 py-2 rounded-xl border text-white bg-primary  "
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-secondary text-white px-6 py-2 rounded-xl"
          >
            Register
          </Link>
        </div>
      </div>
      {/* here is menu for mobile phone */}
      <div
        className={`${
          isOpen ? "overflow-y-hidden" : ""
        } sm:hidden flex flex-1 justify-end items-center`}
      >
        {toggle ? (
          <HiBars3BottomRight
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack  transition-all  z-10 "
            onClick={() => {
              setToggle(!toggle), setIsOpen(!isOpen);
            }}
          />
        ) : (
          <IoCloseOutline
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack transition-all  z-10 "
            onClick={() => {
              setToggle(!toggle), setIsOpen(!isOpen);
            }}
          />
        )}
        <div
          className={`${toggle ? "hidden" : "flex"} ${
            isOpen ? "overflow-y-hidden" : ""
          } bg-secondary  absolute  top-0 right-0 w-screen h-dvh   z-2`}
        >
          <div className="flex flex-col flex-1 justify-center items-center gap-5 font-medium text-[22px] ">
            <div className="flex flex-col justify-between  h-[50%] gap-3 font-semibold text-white transition-all duration-200 ease-in-out ">
              <Link
                href="/"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <IoHomeOutline /> Home
              </Link>
              <Link
                href="/program"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <GrCatalog /> Program
              </Link>
              <Link
                href="/pricing"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <IoPricetagOutline /> Pricing
              </Link>
              <Link
                href="/community"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <GoPeople /> Contact
              </Link>
              <hr className="" />
              <Link
                href="/login"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2 "
              >
                <PiSignIn /> Login
              </Link>
              <Link
                href="/register"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <RiAccountPinBoxLine /> Register
              </Link>
              <hr className="" />
              <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                  <Image
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    width={25}
                    height={25}
                    className={` object-contain cursor-pointer hover:opacity-70 ${
                      index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                    }`}
                    onClick={() => window.open(social.link)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTest;
