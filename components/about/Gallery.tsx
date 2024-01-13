import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="pxs text-white pb-20 mb:py-20 w-full h-full overflow-hidden bg-black py-20">
      {/* <div className=" w-full bg-white h-[1px]"></div> */}
      <div className="flex items-center gap-2 my-10">
        <div className="w-[50px] md:w-[100px] bg-white h-[1px]"></div>
        <h1 className="h3">You Know Rightson?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  mb:gap-10">
        {[1, 2, 3].map((item, index) => {
          return (
            <div className="flex flex-col gap-2 w-full" key={index}>
              <Image
                src="/keyboard.png"
                alt="keyboardw"
                width={500}
                height={500}
                className="w-full mb:h-[300px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
