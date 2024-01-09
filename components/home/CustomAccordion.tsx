"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { services } from "@/utils/constants";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const CustomAccordion = () => {
  return (
    <div className="flex-[2]   overflow-hidden ">
      <Accordion
        itemClasses={{
          heading: "py-5",
        }}
        className="w-full "
      >
        {services.map((service, index) => {
          return (
            <AccordionItem
              classNames={{
                title: "acc-title text-start text-xl",
              }}
              key={`${index + 1}`}
              title={service.title}
              className="w-full"
            >
              {service.description}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
