import Image from "next/image";
import React from "react";

const Last = () => {
  return (
    <div className="pt-20">
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
            Were a friendly bunch and love what we do, we like to work with meet
            with inspire learn from people who feel the same.
          </h1>
          <p
            className="text-base  
            font-[400] w-full"
          >
            We have a hard working and friendly team of designers who are
            passionate about communicating ideas creatively and effectively.
            <br />
            <br />
            Were proud to say that weve built strong relationships with our
            clients over the years. Our team are perfectly equipped to deliver a
            project from concept to completion! Having all services under one
            roof allows for quick turnaround and flexibility which is something
            we are extremely proud to offer.
          </p>
        </div>
      </div>
      <div className="relative  text-black fx-c py-32">
        <h1 className="text-4xl font-[600] text-center  p-10 md:max-w-[700px] text-black z-[2]">
          A welcoming little design studio that creates bold ideas that build
          brands.
        </h1>
        <Image
          src="/chari.png"
          className="absolute w-full h-full object-cover z-[1] opacity-50"
          alt="chari"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Last;
