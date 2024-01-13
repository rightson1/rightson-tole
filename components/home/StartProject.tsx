import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartProject = () => {
  return (
    <div className="flex gap-20 w-screen overflow-x-hidden pb-10">
      <div className="mb:hidden md:flex md:flex-1 ">
        <Image
          src="/grow.jpg"
          alt="project completed"
          className="object-cover h-[300px] w-[150px]"
          width={500}
          height={500}
        />
      </div>
      <div
        className="flex-[5] mb:flex-col mb:py-20 gap-5
       text-white flex bg-black items-center justify-center pxs"
      >
        <div className="flex-1">
          <h1 className="h1  text-white">START A SUCCESFULL PROJECT</h1>
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <p>
            I am currently available for freelance projects. If you have a
            project that you want to get started, think you need my help with
            something or just fancy saying hey, then get in touch.
          </p>
          <div className="flex gap-2">
            <Button
              className="bg-white text-black
           px-6 py-2 rounded-full"
              as={Link}
              href="/contact"
            >
              Contact Me
            </Button>
            <Button
              variant="bordered"
              className=" text-white border-white border-2
           px-6 py-2 rounded-full"
              as={"a"}
              href="mailto:chari.rightson@gmail.com"
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
