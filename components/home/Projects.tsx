import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pxs pb-20 w-full h-full overflow-hidden">
      <div className=" w-full bg-black/70 p-[1px]"></div>
      <div className="flex items-center gap-2 my-10">
        <div className=" w-[100px] bg-black/70 h-[1px]"></div>
        <h1 className="h3">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mb:gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <div className="flex flex-col gap-2 w-full" key={index}>
              <Image
                src="/keyboard.png"
                alt="keyboardw"
                width={500}
                height={500}
                className="w-full"
              />
              <div className="flex flex-col gap-1">
                <h4 className="h4">How to Kill A Mocking Bird</h4>
                <div className="flex items-center gap-2 ">
                  <div className=" w-[50px] bg-[#002BE2] h-[1px]"></div>
                  <p className="text-[#002BE2] font-semibold">My Projects</p>
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
