import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pxs text-white pb-20 mb:py-20 w-full h-full overflow-hidden bg-black py-20">
      <div className=" w-full bg-white h-[1px]"></div>
      <div className="flex items-center gap-2 my-10">
        <div className="w-[50px] md:w-[100px] bg-white h-[1px]"></div>
        <h1 className="h3">Sample Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mb:gap-10">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div className="flex shadow-lg flex-col gap-2 w-full" key={index}>
              <Image
                src="/keyboard.png"
                alt="keyboardw"
                width={500}
                height={500}
                className="w-full mb:h-[300px]"
              />
              <div className="flex flex-col gap-1">
                <h4 className="h4">How to Kill A Mocking Bird</h4>
                <div className="flex items-center gap-2 ">
                  <p className=" font-[300] text-sm opacity-75">Live</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
