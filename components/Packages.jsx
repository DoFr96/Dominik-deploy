"use client";
import React from "react";
import { packages } from "@/constants";
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
      delay: 1,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Packages = () => {
  return (
    <section id="pricing" className="sm:py-16 py-6">
      <div className="flex flex-col justify-center items-center">
        <p className="text-secondary mb-1">Pricing</p>
        <h4 className="text-[25px] font-semibold mb-5">Our List Packages</h4>
        <div className="flex flex-row justify-center items-center gap-5 bg-secondary px-4 py-2 rounded-xl font-medium">
          <button className="bg-white px-2 py-1 rounded-xl">
            Billed Monthly
          </button>
          <button>Per Session</button>
        </div>
      </div>
      <div className="flex flex-wrap flex-row  sm:justify-between justify-center items-center gap-5 my-10 ">
        {packages.map((item) => {
          const { id, title, icon, price, duration, options, offer } = item;
          return (
            <motion.div
              variants={containerVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={id}
              className={` relative overflow-hidden ${
                id === "mid-packages"
                  ? "bg-secondary text-white hover:bg-secondary/90 "
                  : "bg-dimBlack text-secondary hover:bg-dimBlack/90"
              } flex flex-col bg-dimBlack rounded-lg  p-4  hover:shadow-md hover:shadow-black/30 `}
            >
              <h5
                className={` ${
                  offer === "best" ? "text-white" : "text-secondary"
                }text-secondary font-semibold text-[20px] mb-3`}
              >
                {title}
              </h5>

              <p className="text-4xl font-medium text-white mb-1">{price}</p>
              <p className="text-dimWhite mb-1">{duration}</p>

              {/* Best offer ribbon */}

              {item.offer === "best" && (
                <div class="absolute top-0 right-0 ">
                  <div class="w-32 h-8 absolute top-4 -right-8 ">
                    <div class="h-full w-full bg-white   text-black text-center leading-8 font-semibold transform rotate-45">
                      Best Offer
                    </div>
                  </div>
                </div>
              )}

              <ul className="flex flex-col">
                {options.map((option, id) => {
                  return (
                    <li
                      key={id}
                      className="flex flex-row justify-start items-start gap-3 my-1"
                    >
                      <div className="p-1 bg-white text-black rounded-full">
                        {icon}
                      </div>
                      <p className="text-white font-medium">{option}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;
