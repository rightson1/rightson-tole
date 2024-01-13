import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full pxs -mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mb:gap-10">
        {Array(8)
          .fill(0)

          .map((item, index) => {
            return (
              <div className="flexflex-col gap-2 w-full" key={index}>
                <Image
                  src="/keyboard.png"
                  alt="keyboardw"
                  width={500}
                  height={500}
                  className="w-full "
                />
                <div className="flex flex-col gap-1  border-1 border-black/10 border-t-0 p-4">
                  <h4 className="h4">How to Kill A Mocking Bird</h4>
                  <div className="flex items-center gap-2 ">
                    <p className=" font-[300] text-sm opacity-75">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illum eligendi accusantium culpa delectus quis libero.
                    </p>
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
