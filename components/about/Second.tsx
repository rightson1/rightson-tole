import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Second = () => {
  return (
    <div className="pxs w-full bg-white">
      <div className=" sm:hidden flex w-full fx-c pt-20 lg:pt-24  z-[5] -mt-[250px]">
        <Image
          src="/music.png"
          width={500}
          height={500}
          alt="Helooe"
          className=" h-[300px] md:h-[300px]
           w-full md:w-[80vw] object-cover"
        />
      </div>
      <div className="flex items-start w-full py-10 ">
        <p className="md:max-w-[50vw]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. .
        </p>
      </div>
      <div className="flex mb:flex-col gap-10 w-full">
        <Image
          className="mb:h-[300px] h-[400px] object-cover w-full"
          src="/creative.png"
          width={1000}
          height={1000}
          alt="Design"
        />
        <Image
          className="mb:h-[300px] h-[400px] object-cover w-full"
          src="/design.png"
          width={1000}
          height={1000}
          alt="Design"
        />
      </div>
    </div>
  );
};

export default Second;
