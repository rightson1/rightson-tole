import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-black pxss mb:pt-20 pt-32 pb-5
      w-full  text-white"
    >
      <div className=" w-full bg-white/60 p-[.6px]"></div>
      <div
        className="flex justify-between items-center 
      py-14 mb:flex-col mb:items-start mb:gap-8"
      >
        <h1 className="text-8xl mb:text-6xl  font-alegreya">Say hi!</h1>
        <div className="flex items-center gap-2 ">
          <div className="bg-white w-[50px] h-[1px]"></div>
          <Link href={"/contact"} className=" font-semibold">
            Get in touch
          </Link>
        </div>
      </div>
      <div className=" w-full bg-white/60 p-[.6px]"></div>
      <div className="flex flex-col py-10 gap-4">
        <p className="font-marck text-4xl  mb:text-2xl py-5 ">Chari</p>
        <div className="flex justify-between flex-col  gap-8 md:flex-row">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <h6 className="h6">Contact Me</h6>
              <p className="font-semibold">
                <a href="mailto:chari.rightson@gmail.com">
                  chari.rightson@gmail.com
                </a>
              </p>
              <p className="font-semibold">
                <a href="tel:++254 791568168">+254 791568168</a>
              </p>
              <p className="font-semibold">www.rightson.univora.co.ke</p>
              <p className="font-semibold">Nairobi ,Kenya</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <h6 className="h6">What I do</h6>

              <p className="font-semibold">Web Design</p>
              <p className="font-semibold">Web Development</p>
              <p className="font-semibold">Mobile Development</p>
              <p className="font-semibold">UI/UX Design</p>

              <p className="font-semibold">Final Year Projects</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <h6 className="h6">Socials</h6>
              {/* github rightson1, twitter _rightson_ , linkedIn rightson-kirigha/ */}
              <p className="font-semibold">
                <a
                  href="https://www.github.com/rightson1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
              <p className="font-semibold">
                <a
                  href="https://www.twitter.com/_rightson_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
              <p className="font-semibold">
                <a
                  href="https://www.linkedin.com/in/rightson-kirigha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="pt-10">© 2023 Chari Designs. All Rights Reserved .</p>
      </div>
    </div>
  );
};

export default Footer;
