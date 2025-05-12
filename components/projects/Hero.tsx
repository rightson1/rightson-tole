import Image from "next/image";
import React from "react";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="main-h bg-black w-full  text-white pxs ">
      <div
        className="flex justify-between w-full items-start
           gap-72 py-10 "
      >
        <div className=" lg:flex hidden ">
          <Image
            src="/rightson-vert.svg"
            width={100}
            height={100}
            className="h-24 "
            alt="RIGHTSON KIRIGHA"
          />
        </div>
        <div
          className="flex-col flex gap-3 
             md:justify-center "
        >
          {" "}
          <h1 className="h1">{title}</h1>
          <p
            className="text-xl  
            font-[400] w-full"
          >
            {description}
          </p>
          <p className=" sm:text-start font-marck text-4xl">Chari</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
