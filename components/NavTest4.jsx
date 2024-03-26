"use client";
import React, { useState, useEffect } from "react";
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
import { navLinks } from "@/constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { navLinksAccount } from "@/constants";
import { Reveal } from "./Reveal";
const NavTest4 = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  {
    /* Animation section is this */
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  {
    /*
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
*/
  }

  return (
    <nav className=" pt-2 flex flex-row justify-between items-center ">
      <div>
        <Reveal>
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </Reveal>
      </div>{" "}
      <Reveal>
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
              className="px-6 py-2 rounded-xl border text-white bg-primary font-medium text-[18px] hover:shadow-md active:bg-black/90 hover:shadow-black/30 transition-all  "
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-secondary text-white px-6 py-2 rounded-xl font-medium text-[18px] hover:shadow-md active:bg-secondary/90 hover:shadow-black/30 transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </Reveal>
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      <div
        className={`${
          isOpen ? "overflow-y-hidden" : ""
        } sm:hidden flex flex-1 justify-end items-center`}
      >
        {open ? (
          <IoCloseOutline
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack z-10 "
            onClick={toggleMenu}
          />
        ) : (
          <HiBars3BottomRight
            className="w-[30px] h-[30px] cursor-pointer overflow-hidden hover:text-dimBlack   z-10 "
            onClick={toggleMenu}
          />
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={` bg-secondary  fixed left-0 top-0 w-full h-screen origin-top text-black p-10 `}
            >
              <div className="flex flex-col justify-center items-center h-full  font-medium text-white text-[22px]">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col justify-center gap-3 font-semibold text-white "
                >
                  {navLinks.map((link, index) => {
                    const { title, href, icon } = link;
                    return (
                      <motion.div
                        variants={mobileLinkVars}
                        key={index}
                        className="overflow-hidden"
                      >
                        <Link
                          href={href}
                          className="hover:text-dimWhite  flex flex-row justify-start items-center gap-2"
                        >
                          {" "}
                          <span>{icon}</span>
                          {title}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.hr variants={mobileLinkVars} className="" />
                  {navLinksAccount.map((link, index) => {
                    const { title, href, icon } = link;
                    return (
                      <motion.div
                        variants={mobileLinkVars}
                        key={index}
                        className="overflow-hidden"
                      >
                        <Link
                          href={href}
                          className="hover:text-dimWhite flex flex-row justify-start items-center gap-2"
                        >
                          {" "}
                          <span>{icon}</span>
                          {title}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.hr variants={mobileLinkVars} className="" />
                  <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                      <motion.div
                        key={index}
                        variants={mobileLinkVars}
                        className="overflow-hidden"
                      >
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
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavTest4;
