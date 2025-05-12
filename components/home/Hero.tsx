import { Homepage } from "@/sanity.types";
import { IHomepage } from "@/types";
import Image from "next/image";
import React from "react";

const Hero = ({ sanityHomepage }: { sanityHomepage: IHomepage }) => {
  return (
    <section className="main-h bg-black w-full  text-white pxs ">
      <div
        className="flex justify-between w-full
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
           h-full  md:justify-center mb:pt-10"
        >
          <h1
            className="text-4xl  
            font-[400] w-full md:text-5xl md:font-[500] mb:font-semibold"
          >
            I am Rightson Kirigha. <br />
            {sanityHomepage.hero}
          </h1>
          <p className=" sm:text-start font-marck text-4xl">Chari</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
