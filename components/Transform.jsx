"use client";
import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { transform } from "@/constants";

import { AnimatePresence, motion } from "framer-motion";

{
  /*mogu isto => {return ()} */
}
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    opacity: 0,
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Transform = () => {
  return (
    <section className="flex sm:flex-row  flex-col-reverse justify-between items-center sm:py-16 py-6 sm:gap-20 sm:mb-0 mb-10">
      <div className="flex flex-1 justify-center items-start ">
        <Image
          src={"/images/transformation.png"}
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
          {transform.map((item, index) => {
            const { id, desc, icon } = item;
            return (
              <motion.div
                variants={containerVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={index}
                className="flex flex-row"
              >
                <motion.div
                  variants={mobileLinkVars}
                  className="flex flex-row justify-center items-center mb-3 gap-3"
                >
                  <div className="p-1 bg-secondary text-black rounded-full">
                    {icon}
                  </div>
                  <p className="font-medium text-[18px]">{desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transform;
