"use client";
import React from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
const containerVars = {
  initial: {
    opacity: 0,
    y: "30vh",
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Shoes = () => {
  return (
    <section className="sm:py-16 py-6 max-w-[1480px]">
      <div className="sm:flex hidden sm:flex-row flex-col sm:gap-0 gap-10 justify-between items-center w-full">
        <Image
          src={"/images/tenisica1.png"}
          width={200}
          height={200}
          alt="tenisice"
          className="z-10 hover:opacity-90"
        />
        <Image
          src={"/images/tenisica6.png"}
          width={200}
          height={200}
          alt="tenisice"
          className="z-10 hover:opacity-90"
        />
        <Image
          src={"/images/tenisica7.png"}
          width={200}
          height={200}
          alt="tenisice"
          className="z-10 hover:opacity-90"
        />
        <Image
          src={"/images/tenisica2.png"}
          width={200}
          height={200}
          alt="tenisice"
          className="z-10 hover:opacity-90"
        />
      </div>
      <div className="w-full sm:hidden flex flex-col justify-center items-center my-5 group ">
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col justify-end items-center group"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Shoes;
