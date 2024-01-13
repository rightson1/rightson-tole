import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="main-h bg-black w-full  text-white pxs  ">
      <div
        className="flex justify-between w-full py-10
         h-full  gap-72 "
      >
        <div className="  pt-24 lg:flex hidden">
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
           h-full  md:justify-center "
        >
          {" "}
          <h1 className="h1">Wanna Talk</h1>
          <p
            className="text-xl  
            font-[400] w-full"
          >
            Hello there! Ready to connect and bring ideas to life? Whether you
            have a project in mind, a collaboration to propose, or just want to
            chat about the latest tech trends, I'm all ears. Drop me a line, and
            let's turn pixels into possibilities.
          </p>
          <p className=" sm:text-start font-marck text-4xl">Chari</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
