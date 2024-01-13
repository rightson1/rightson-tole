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
           h-full  md:justify-center "
        >
          {" "}
          <h1 className="h1">About Us</h1>
          <p
            className="text-xl  
            font-[400] w-full"
          >
            Founded in 2000, Creative Mouse has established itself as a
            multi-discipline creative agency with expertise in branding,
            brochure & catalogue design, web design, print, digital marketing,
            photography & graphic design. Based at the heart of the UK in the
            picturesque city of Worcester we work with a whole range of clients
            and all sized businesses both nationwide and local. See what else we
            can offer here!
          </p>
          <p className=" sm:text-start font-marck text-4xl">Chari</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
