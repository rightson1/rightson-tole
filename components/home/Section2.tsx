import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomAccordion from "./CustomAccordion";
import { IHomepage } from "@/types";

const Section2 = ({ sanityHomepage }: { sanityHomepage: IHomepage }) => {
  return (
    <div className="pxs w-full bg-white relative">
      <div
        className="bg-black absolute hidden lg:flex
       w-full top-0 left-0 h-[250px] "
      ></div>

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
          {sanityHomepage.featuredImageSection?.description
            ?.split("|")
            .map((text, i) => {
              if (i % 2 === 1) {
                return <strong key={i}>{text}</strong>;
              }
              return text;
            })}
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
          <h3 className="p">{sanityHomepage.whatIDoSection?.title}</h3>
          <p className="h3">{sanityHomepage.whatIDoSection?.description}</p>
          <p className="mb:hidden  font-marck text-4xl">Chari</p>
        </div>
        <CustomAccordion homepage={sanityHomepage} />
      </div>
    </div>
  );
};

export default Section2;
