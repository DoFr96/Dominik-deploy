import React from "react";
import Image from "next/image";
import { programs } from "../constants";

const ProgramList = () => {
  return (
    <section className=" ">
      <div className="flex flex-row gap-5 my-20 ">
        {programs.map((program) => {
          const { title, content, id, icon } = program;
          return (
            <div
              key={id}
              className="flex-wrap flex-col p-10 bg-dimBlack rounded-xl"
            >
              <Image
                src={icon}
                alt={id}
                width={30}
                height={30}
                className="mb-3"
              />
              <h4 className="text-white font-semibold text-xl mb-1">{title}</h4>
              <p className="text-dimWhite">{content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramList;
