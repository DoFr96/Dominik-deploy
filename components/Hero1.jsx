import React from "react";
import Link from "next/link";
import Image from "next/image";
const Hero1 = () => {
  return (
    <section className=" flex sm:flex-row flex-col md:items-center sm:items-start sm:justify-between items-center justify-center sm:my-16 my-6 ">
      <div className="flex flex-col flex-1 justify-center items-start sm:mr-10 mr-0 sm:mb-0 mb-10 min-w-[50%]">
        <h1 className="md:text-[60px] text-[52px] md:leading-[70px]  leading-[57px] font-semibold mb-5">
          I will help you achieve your goals
        </h1>
        <p className="max-w-[470px] mb-5 ">
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </p>
        <div className="flex flex-row justify-start items-center gap-5">
          <button className="main_btn" href="/">
            Start Training
          </button>
          <button className="flex flex-row justify-center items-center">
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
        <div className="w-full sm:flex hidden flex-col justify-end items-end mt-10  transition-all ">
          <div className="md:flex hidden flex-col justify-end items-end group">
            <Image
              src={"/images/tenisica0.png"}
              width={200}
              height={200}
              alt="tenisice"
              className="z-10 hover:opacity-90 "
            />
            <p className="invisible group-hover:visible inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ef9e78] to-[#f84808] font-semibold ">
              Nike Pegasus
            </p>
          </div>
          <div className="md:hidden flex flex-col justify-end items-end group">
            <Image
              src={"/images/tenisica0.png"}
              width={150}
              height={150}
              alt="tenisice"
              className="z-10 hover:opacity-90 "
            />
            <p className="invisible group-hover:visible inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ef9e78] to-[#f84808] font-semibold ">
              Nike Pegasus
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-1 sm:justify-end justify-center sm:mb-0 mb-10">*/}{" "}
      <div className=" flex flex-1 flex-row-reverse sm:justify-end justify-center sm:mb-0 mb-10 ">
        <Image
          src={"/images/andrej.png"}
          width={450}
          height={450}
          alt="personal trainer"
          className="z-10 "
        />
        {/*  <div className="relative ">*/}
        <div className="relative bg-red-300">
          <h3 className="md:text-[150px] text-[120px] absolute md:top-[170px] sm:top-[150px] xs:top-[205px] top-[170px]  md:right-[167px] sm:right-[145px] xs:right-[200px] right-[170px] font-bold z-1  -rotate-90  opacity-50 md:text-black sm:text-green-500 xs:text-blue-200 ">
            Andrej
          </h3>
        </div>

        {/*  <div clasName="relative ">
          <h3 className="md:text-[150px] sm:text-[100px] text-[100px] absolute -top-[20px] right-[0px] font-bold z-1  opacity-50 ">
            Andrej
          </h3>
        </div>*/}
      </div>
      <div className="w-full sm:hidden flex flex-col justify-center items-center my-10 group transition-all">
        <div className="flex flex-col justify-end items-center group">
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
        </div>
      </div>
    </section>
  );
};

export default Hero1;
