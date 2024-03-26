"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./Reveal";

const Hero2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [play, setPlay] = useState(false);
  const [toggle, setToggle] = useState(false);
  const url = play
    ? `https://www.youtube.com/embed/vtIQcIMr7iM?autoplay=1`
    : `https://www.youtube.com/embed/vtIQcIMr7iM`;
  return (
    <section
      id="home"
      className={` ${
        isChecked ? "md:items-start " : "md:items-center"
      } flex sm:flex-row flex-col  md:justify-between xs:items-start xs:justify-center items-start justify-center sm:my-16 my-6`}
    >
      <div className="flex flex-col flex-1 justify-center sm:items-start xs:items-center items-start sm:mr-10 mr-0 sm:mb-0 mb-10 w-full">
        <Reveal>
          <h1 className="sm:text-[60px] text-[52px] sm:leading-[70px]  leading-[57px] font-semibold mb-5">
            Andrej Rupnik
          </h1>
        </Reveal>
        <Reveal>
          <div className="flex flex-row justify-center items-center mb-5">
            <hr className="w-5 h-1 bg-secondary mr-1" />
            <p className="text-black font-semibold text-[20px]">
              Magistar Kineziologije
            </p>
          </div>
        </Reveal>
        <Reveal>
          {" "}
          <p className="max-w-[470px] mb-5">
            Motivate users with benefits and positive reinforcement, and offer
            modifications and progress tracking.
          </p>{" "}
        </Reveal>

        <div className="flex flex-row justify-start items-center gap-5">
          <Reveal>
            <button className="main_btn " href="/">
              Start Training
            </button>
          </Reveal>
          <Reveal>
            {" "}
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
            </button>{" "}
          </Reveal>
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
        {/* Employment history */}
        <div className="md:block hidden">
          <Reveal>
            <div className="flex flex-row justify-start items-center mt-10">
              <h3 className="font-semibold text-[20px]">Employment history</h3>
              <div className="ml-5">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                    />
                    <div
                      className={`box block h-8 w-14 rounded-full ${
                        isChecked ? "bg-secondary" : "bg-[#e5e7eb]"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                        isChecked ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </Reveal>
          {isChecked && (
            <Reveal>
              <div className="my-10 ">
                {/*<!-- Item #1 --> */}

                <div class="relative pl-8 sm:pl-32 py-3 group">
                  {/* <!-- Purple label -->  */}

                  {/*  <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}

                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                      2020
                    </time>
                    <Reveal>
                      <div class="text-xl font-bold text-slate-900">
                        Miketa sport centar, Rijeka
                      </div>
                    </Reveal>
                  </div>

                  {/*  <!-- Content --> */}
                  <Reveal>
                    <div class="text-slate-500">
                      Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                    </div>
                  </Reveal>
                </div>

                <div class="relative pl-8 sm:pl-32 py-3 group">
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                      2021
                    </time>
                    <Reveal>
                      <div class="text-xl font-bold text-slate-900">
                        NK Opatija
                      </div>
                    </Reveal>
                  </div>
                  <Reveal>
                    <div class="text-slate-500">
                      Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                    </div>
                  </Reveal>
                </div>

                <div class="relative pl-8 sm:pl-32 py-3 group">
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                      2022
                    </time>
                    <Reveal>
                      <div class="text-xl font-bold text-slate-900">
                        HNK Rijeka
                      </div>
                    </Reveal>
                  </div>
                  <Reveal>
                    <div class="text-slate-500">
                      Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                    </div>
                  </Reveal>
                </div>

                <div class="relative pl-8 sm:pl-32 py-3 group">
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                      2023
                    </time>
                    <Reveal>
                      <div class="text-xl font-bold text-secondary">
                        Orladno fit gym, Zagreb{" "}
                      </div>
                    </Reveal>
                  </div>
                  <Reveal>
                    <div class="text-slate-500">
                      Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Rupa cover photo */}
      <div className="flex flex-1 sm:justify-end justify-center w-full sm:mb-0 mb-10">
        <Reveal>
          <Image
            src={"/images/rupalosslesssmaller.webp"}
            width={350}
            height={350}
            alt="personal trainer"
            className=""
          />
        </Reveal>
      </div>
      {/* Employment history */}
      <div className="md:hidden block w-full">
        <Reveal>
          <div className="flex flex-row justify-center items-center my-10 ">
            <h3 className="font-semibold text-2xl ">Employment history</h3>
            <div className="ml-5">
              <label className="flex cursor-pointer select-none items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`box block h-8 w-14 rounded-full ${
                      isChecked ? "bg-secondary" : "bg-[#e5e7eb]"
                    }`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                      isChecked ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </Reveal>
        {isChecked && (
          <div className="my-10 ">
            {/*<!-- Item #1 --> */}

            <div class="relative pl-8 sm:pl-32 py-3 group">
              {/* <!-- Purple label -->  */}

              {/*  <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}

              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <Reveal>
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                    2020
                  </time>
                </Reveal>

                <Reveal>
                  <div class="text-xl font-bold text-slate-900">
                    Miketa sport centar, Rijeka
                  </div>
                </Reveal>
              </div>

              {/*  <!-- Content --> */}
              <Reveal>
                <div class="text-slate-500">
                  Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                </div>
              </Reveal>
            </div>

            <div class="relative pl-8 sm:pl-32 py-3 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <Reveal>
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                    2021
                  </time>
                </Reveal>

                <Reveal>
                  <div class="text-xl font-bold text-slate-900">NK Opatija</div>
                </Reveal>
              </div>
              <Reveal>
                <div class="text-slate-500">
                  Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                </div>
              </Reveal>
            </div>

            <div class="relative pl-8 sm:pl-32 py-3 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <Reveal>
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                    2022
                  </time>
                </Reveal>

                <Reveal>
                  <div class="text-xl font-bold text-slate-900">HNK Rijeka</div>
                </Reveal>
              </div>
              <Reveal>
                <div class="text-slate-500">
                  Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                </div>
              </Reveal>
            </div>

            <div class="relative pl-8 sm:pl-32 py-3 group">
              <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <Reveal>
                  <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-secondary/30 rounded-full">
                    2023
                  </time>
                </Reveal>

                <Reveal>
                  <div class="text-xl font-bold text-secondary">
                    Orladno fit gym, Zagreb{" "}
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <div class="text-slate-500">
                  Priprema sportasa, zagrijavanje, oporavak od ozljeda.
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero2;
