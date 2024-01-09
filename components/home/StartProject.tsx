import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const StartProject = () => {
  return (
    <div className="flex gap-20 w-screen overflow-x-hidden pb-10">
      <div className="mb:hidden md:flex md:flex-1 ">
        <Image
          src="/grow.png "
          alt="project completed"
          className="object-cover h-[300px] w-[150px]"
          width={500}
          height={500}
        />
      </div>
      <div
        className="flex-[5] mb:flex-col mb:py-10 gap-5
       text-white flex bg-black items-center justify-center pxs"
      >
        <div className="flex-1">
          <h1 className="h1  text-white">START A SUCCESFULL PROJECT</h1>
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <p>
            Adrenalin are Australia's leading digital product agency building
            industry-defining web and mobile products
          </p>
          <div className="flex gap-2">
            <Button
              className="bg-white text-black
           px-6 py-2 rounded-full"
            >
              Get Started
            </Button>
            <Button
              variant="bordered"
              className=" text-white border-white border-2
           px-6 py-2 rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
