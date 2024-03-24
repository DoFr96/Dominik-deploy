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
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sm:max-w-[1280px] mx-auto  overflow-hidden sm:px-16 px-6 pt-2 flex flex-row justify-between items-center">
      <div>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      </div>
      <div className="sm:flex hidden flex-row flex-1 justify-end items-center gap-20 font-medium text-[18px]">
        <div className="flex gap-4 ">
          <Link href="/">Home</Link>
          <Link href="/program">Program</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/community">Community</Link>
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
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <HiBars3BottomRight
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack  transition-all  z-10 "
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <IoCloseOutline
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack transition-all  z-10 "
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`${
            toggle ? "hidden" : "flex"
          } bg-secondary absolute  top-0 right-0 w-full pt-10  z-1`}
        >
          <div className="flex flex-col flex-1 justify-center items-center gap-5 font-medium text-[18px] min-w-[150px] pb-10">
            <div className="flex flex-col gap-3 font-semibold text-white  ">
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
                <GoPeople /> Community
              </Link>
              <Link
                href="/login"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2 border-t-2 pt-5"
              >
                <PiSignIn /> Login
              </Link>
              <Link
                href="/register"
                className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
              >
                <RiAccountPinBoxLine /> Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
