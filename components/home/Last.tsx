import { IHomepage } from "@/types";
import Image from "next/image";
import React from "react";
import Portable_Text_Editor from "../text-editor/portable_text_editor";

const Last = ({ homepage }: { homepage: IHomepage }) => {
  return (
    <div className="pt-20 scroll-smooth" id="about">
      <div
        className="flex justify-between w-full pxs
         h-full  gap-72 "
      >
        <div className=" pt-5 hidden md:flex ">
          <Image
            src="/rightson-black.svg"
            width={100}
            height={100}
            className="h-24 "
            alt="RIGHTSON KIRIGHA"
          />
        </div>
        <div
          className="flex-col flex gap-3 
           h-full  md:justify-center "
        >
          {" "}
          <h1 className="text-4xl font-[500] leading-[50px]">
            Its not just about the design, its about the results. But now, lets
            learn about Rightson, you might need an pen and paper for this.
          </h1>
          <div
            className="text-base  
            font-[400] w-full"
          >
            {/* {homepage.aboutSection?.description} */}
            <Portable_Text_Editor body={homepage.aboutSection?.description} />
          </div>
        </div>
      </div>
      <div className="relative  text-black fx-c py-32 overflow-hidden">
        <h1 className="text-4xl font-[700] text-center  p-10 md:max-w-[700px] text-black z-[2]">
          Thank you for reading, now lets get to work.
        </h1>
        <Image
          src="/chari.png"
          className="absolute  object-cover 
          w-full h-full md:object-cover z-[1]  "
          alt="chari"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Last;
