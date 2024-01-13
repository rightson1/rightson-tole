import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomAccordion from "./CustomAccordion";

const Section2 = () => {
  return (
    <div className="pxs w-full bg-white relative">
      <div
        className="bg-black absolute hidden lg:flex
       w-full top-0 left-0 h-[250px] "
      >
        h
      </div>

      <div
        className=" flex  w-full fx-
       pt-20 lg:pt-24  z-[5] -mt-[250px]
       md:-mt-[150px]
       "
      >
        <Image
          src="/happy.jpg"
          width={1000}
          height={1000}
          // unoptimized
          alt="Helooe"
          className=" h-[300px] md:h-[500px]
          z-[2]
           w-full  object-cover"
        />
      </div>
      <div className="flex items-start w-full py-10 ">
        <p className="md:max-w-[50vw]">
          Ever heard of the saying "Jack of all trades, master of none"? Well, I
          am that guy who proved that saying is wrong .I am Rightson Kirigha, a
          third-year Computer Science student at Riara University. I am a
          designer, developer, and founder. My superpower? Turning complex
          problems into elegant web wonders.<strong> Creativity</strong> is my
          passion,
          <strong> problem-solving </strong>
          is my forte, and collaboration is my driving force. With these powers
          combined, I create purposeful experiences that drive business results
          and push boundaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className=" mb:h-[300px] overflow-hidden h-[400px]">
          <Image
            className="h-full w-full object-cover"
            src="/creative.jpg"
            width={1000}
            height={1000}
            alt="Design"
          />
        </div>

        <div className=" mb:h-[300px] overflow-hidden h-[400px]">
          <Image
            className="object-top"
            src="/problem-solver.jpg"
            width={1000}
            height={1000}
            alt="Design"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-20 gap-10">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="p">What I do</h3>
          <p className="h3">
            Combining my passion for design and development with hardwork, I
            bring creativity and technical skills to crafting digital
            experiences for web and mobile platforms.
          </p>
          <p className="mb:hidden  font-marck text-4xl">Chari</p>
        </div>
        <CustomAccordion />
      </div>
    </div>
  );
};

export default Section2;
