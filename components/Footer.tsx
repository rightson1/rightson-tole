import React from "react";

const Footer = () => {
  return (
    <div className="bg-black mt-10 mb:pt-20 pt-16 pb-5  w-full pxs text-white">
      <div className=" w-full bg-white/60 p-[.6px]"></div>
      <div
        className="flex justify-between items-center 
      py-5 mb:flex-col mb:items-start mb:gap-8"
      >
        <h1 className="text-8xl mb:text-6xl  font-alegreya">Say hi!</h1>
        <div className="flex items-center gap-2 ">
          <div className="bg-white w-[50px] h-[1px]"></div>
          <p className=" font-semibold">My Projects</p>
        </div>
      </div>
      <div className=" w-full bg-white/60 p-[.6px]"></div>
      <div className="flex flex-col py-10 gap-4">
        <p className="font-marck text-4xl  mb:text-2xl py-5 ">Chari</p>
        <div className="flex justify-between flex-col  gap-8 md:flex-row">
          {[1, 2, 3].map((item, index) => (
            <div className="flex gap-2" key={item}>
              {/* <div className="flex flex-col gap-2">
                <p className="font-semibold">Email</p>
                <p className="font-semibold">Phone</p>
                <p className="font-semibold">Address</p>
              </div> */}
              <div className="flex flex-col gap-2">
                <h6 className="h6">Contact Us</h6>
                <p className="font-semibold">
                  <a href="mailto:chari.rightson@gmail.com">
                    chari.rightson@gmail.com
                  </a>
                </p>
                <p className="font-semibold">
                  <a href="tel:+2347035366505">+2347035366505</a>
                </p>
                <p className="font-semibold">Lagos, Nigeria</p>
                <p className="font-semibold">Abuja, Nigeria</p>
              </div>
            </div>
          ))}
        </div>
        <p className="pt-10">
          © 2023 Chari Designs. All Rights Reserved . Privacy policy | Cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
