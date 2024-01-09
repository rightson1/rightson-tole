import Image from "next/image";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomAccordion from "./CustomAccordion";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Section2 = () => {
  return (
    <div className="pxs w-full bg-white">
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
          className="h-[400px] object-cover w-full"
          src="/creative.png"
          width={1000}
          height={1000}
          alt="Design"
        />
        <Image
          className="h-[400px] object-cover w-full"
          src="/design.png"
          width={1000}
          height={1000}
          alt="Design"
        />
      </div>
      <div className="flex flex-col lg:flex-row py-20 gap-10">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="p">What we do</h3>
          <p className="h3">
            Adrenalin are Australia's leading digital product agency building s
          </p>
          <p className="mb:hidden  font-marck text-4xl">Chari</p>
        </div>
        <CustomAccordion />
      </div>
    </div>
  );
};

export default Section2;
