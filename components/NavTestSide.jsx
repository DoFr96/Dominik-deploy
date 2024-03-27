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
  MotionConfig,
} from "framer-motion";
import { navLinksAccount } from "@/constants";
import { Reveal } from "./Reveal";
const NavTestSide = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);

    if (!open) {
      document.querySelector("body").classList.add("overflow-hidden");
    }
    if (open) {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  };

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
        <div className="sm:flex hidden flex-row flex-1 justify-end items-center gap-20 font-medium ">
          <div className="flex gap-5 text-[20px]  ">
            {/* navigation on desktop mode */}
            {navLinks.map((link, index) => {
              const { title, href } = link;
              return (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "tween" }}
                  className=""
                  key={index}
                >
                  <Link href={href} className="hover:text-black/30">
                    {title}
                  </Link>
                </motion.div>
              );
            })}
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
      <div className={`  sm:hidden flex flex-1 justify-end items-center`}>
        <div
          className="  hover:bg-secondary/30 rounded-full z-[999]  "
          onClick={toggleMenu}
        >
          <AnimatedHamburgerButton />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={` bg-white  fixed right-0 top-0 w-full h-screen origin-top text-black p-10 z-[998] `}
            >
              <div className="flex flex-col justify-center items-center h-full ">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col justify-center gap-3 font-medium text-[25px] text-black "
                >
                  {/*  links for mobile navbar */}
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
                          className="  flex flex-row justify-start items-center gap-2"
                        >
                          {" "}
                          <span className=" text-secondary">{icon}</span>
                          <motion.span
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                            }}
                            whileTap={{ scale: 0.8 }}
                            transition={{ type: "tween" }}
                          >
                            {" "}
                            {title}
                          </motion.span>{" "}
                        </Link>
                      </motion.div>
                    );
                  })}

                  <motion.hr
                    variants={mobileLinkVars}
                    className="h-[2.5px] bg-secondary"
                  />
                  {/* login register links for mobile navbar */}
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
                          className=" flex flex-row group transition-all   justify-start items-center gap-2"
                        >
                          <span className="text-secondary">{icon}</span>
                          <motion.span
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                            }}
                            whileTap={{ scale: 0.8 }}
                            transition={{ type: "tween" }}
                            className=""
                          >
                            {title}
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.hr
                    variants={mobileLinkVars}
                    className="h-[2.5px] bg-secondary"
                  />
                  {/* social media links for mobile navbar */}
                  <div className="flex flex-row justify-center items-center md:mt-0 mt-4">
                    {socialMedia.map((social, index) => (
                      <motion.div
                        key={index}
                        variants={mobileLinkVars}
                        whileHover={{
                          scale: 1.1,
                          originX: 0,
                        }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "tween" }}
                        className={` object-contain cursor-pointer  hover:opacity-70 overflow-hidden  ${
                          index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                      >
                        {social.icon}
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

export default NavTestSide;

export const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,

        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-14 w-14 rounded-full "
      >
        {/* top bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-8 bg-secondary"
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        />
        {/* middle bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="absolute h-1 w-8 bg-secondary"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        />
        {/* bottom bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50.5%",
              bottom: ["35%", "50%", "54%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 10px)",
              bottom: ["54%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-4 bg-secondary"
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-65%",
            y: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

{
  /* <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50.5%",
              bottom: ["35%", "50%", "54%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 10px)",
              bottom: ["54%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-4 bg-secondary"
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-65%",
            y: "50%",
          }}
        />{" "} */
}

{
  /*
<Image
                          key={social.id}
                          src={social.icon}
                          alt={social.id}
                          width={25}
                          height={25}
                          className={` object-contain cursor-pointer text-secondary hover:opacity-70 ${
                            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                          }`}
                          onClick={() => window.open(social.link)}
                        />
*/
}

{
  /*

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
*/
}
