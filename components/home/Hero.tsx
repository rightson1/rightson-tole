import Image from "next/image";
import React from "react";

const Hero = () => {
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
           h-full  mb:items-center justify-center"
        >
          <h1
            className="text-4xl  mb:text-center
            font-[400] w-full md:text-5xl md:font-[500]"
          >
            I am Rightson Kirigha. <br />A friendly little design agency that
            creates bold ideas to help build brands.
          </h1>
          <p className=" mb:text-center sm:text-start font-marck text-4xl">
            Chari
          </p>
        </div>
      </div>
      <div className="flex w-full fx-c pt-20 lg:pt-24  ">
        <Image
          src="/happy.png"
          width={500}
          height={500}
          alt="Helooe"
          className="h-[200px] md:h-[300px] w-full md:w-[80vw] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
