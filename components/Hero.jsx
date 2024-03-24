"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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

const mobileLinkVarsImage = {
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
      delay: 0.5,
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const Hero = () => {
  const [play, setPlay] = useState(false);
  const [toggle, setToggle] = useState(false);
  const url = play
    ? `https://www.youtube.com/embed/vtIQcIMr7iM?autoplay=1`
    : `https://www.youtube.com/embed/vtIQcIMr7iM`;
  return (
    <motion.section
      variants={containerVars}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="home"
      className=" flex sm:flex-row flex-col md:items-center md:justify-between xs:items-start xs:justify-center items-start justify-center sm:my-16 my-6 "
    >
      <motion.div
        variants={mobileLinkVars}
        className="flex flex-col flex-1 justify-center sm:items-start xs:items-center items-start sm:mr-10 mr-0 sm:mb-0 mb-10 w-full"
      >
        <h1 className="sm:text-[60px] text-[52px] sm:leading-[70px]  leading-[57px] font-semibold mb-5">
          Andrej Rupnik
        </h1>
        <div className="flex flex-row justify-center items-center mb-5">
          <hr className="w-5 h-1 bg-secondary mr-1" />
          <p className="text-black font-semibold text-[20px]">
            Magistar Kineziologije
          </p>
        </div>
        <p className="max-w-[470px] mb-5">
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </p>
        <div className="flex flex-row justify-start items-center gap-5">
          <button className="main_btn" href="/">
            Start Training
          </button>
          <button
            className="flex flex-row justify-center items-center hover:text-secondary "
            onClick={() => {
              setPlay(true), setToggle(!toggle);
            }}
          >
            <Image
              src={"/icons/play-circle.svg"}
              alt="play"
              width={30}
              height={30}
              className="mr-1"
            />
            Watch Demo
          </button>
        </div>
        <div
          className={`${toggle ? "flex" : "hidden"} aspect-video w-full my-10`}
        >
          <iframe
            className=" h-full w-full rounded-lg"
            src={url}
            width="100%"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full md:flex hidden flex-col justify-end items-end mt-10  transition-all ">
          <div className="flex flex-col justify-end items-end group">
            <Image
              src={"/images/tenisica0.png"}
              width={170}
              height={170}
              alt="tenisice"
              className="z-10 hover:opacity-90 "
            />
            <p className="invisible group-hover:visible inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ef9e78] to-[#f84808] font-semibold ">
              Nike Pegasus
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={mobileLinkVarsImage}
        className="flex flex-1 sm:justify-end justify-center w-full sm:mb-0 mb-10"
      >
        <Image
          src={"/images/andrej.png"}
          width={450}
          height={450}
          alt="personal trainer"
          className=""
        />
        {/*
         <div className="relative ">
          <h3 className="md:text-[150px] text-[120px] absolute md:top-[170px] sm:top-[150px] xs:top-[205px] top-[170px]  md:right-[167px] sm:right-[145px] xs:right-[200px] right-[170px] font-bold z-1  -rotate-90  opacity-50 md:text-black sm:text-green-500 xs:text-blue-200  ">
            Andrej
          </h3>
        </div>{" "}
        */}

        {/*  <div className="relative ">
          <h3 className="md:text-[150px] sm:text-[100px] text-[100px] absolute -top-[20px] right-[0px] font-bold z-1  opacity-50 ">
            Andrej
          </h3>
        </div>*/}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
