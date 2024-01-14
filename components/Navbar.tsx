"use client";
import React from "react";
import Image from "next/image";
import { menuLinks } from "@/utils/constants";
import Link from "next/link";
import { OpenProps, TimeType } from "@/types";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Navbar = ({ open, setOpen }: OpenProps) => {
  const pathname = usePathname();
  const After = ({ time, type }: TimeType) => {
    return (
      <span
        className={`absolute bottom-0 left-0 w-0 
        h-full  transition-all ease-in-out ${
          time === 150
            ? "duration-150"
            : time === 300
            ? "duration-300"
            : "duration-500"
        }
        ${
          type === "after"
            ? "bg-darkRed"
            : type === "before"
            ? "bg-black delay-75"
            : "bg-darkRed delay-150"
        }
         group-hover:w-full`}
      ></span>
    );
  };

  return (
    <div
      className="bg-black h-[80px]  w-screen
    flex justify-between items-center p-4 md:p-[64px]"
    >
      <Link className="flex items-center" href={"/"}>
        <Image
          alt="logo"
          src="/logo.svg"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          width={300}
          height={300}
        />
      </Link>

      <div className=" hidden lg:flex justify-center items-center gap-10 flex-1 ">
        {" "}
        {menuLinks.map((link) => (
          <button
            className="group relative flex flex-col text-white"
            key={link.name}
          >
            <Link
              key={link.name}
              href={link.url}
              className={`text-base
               font-medium t-200  text-white hover:text-darkRed
               ${pathname === link.url && "text-darkRed"}
               `}
            >
              {link.name}
            </Link>
            <span
              className={`w-0 
            h-[2px] bg-darkRed t-200  absolute 
            -bottom-[5px] left-0 group-hover:w-full
            ${pathname === link.url && "w-full"}
            `}
            ></span>
          </button>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="flex 
        cursor-pointer
         bg-transparent pl-5  outline-none flex-col items-start
           gap-[6px] group w-[50px]  "
      >
        {["1", "2", "3"].map((item, index) => (
          <span
            key={index}
            className={`h-line t-200 ${
              index == 0 ? "w-[15px]" : index == 1 ? "w-[25px]" : "w-[20px]"
            }
            `}
          >
            <After
              time={index == 0 ? 150 : index == 1 ? 300 : 500}
              type="after"
            />
            <After
              time={index == 0 ? 150 : index == 1 ? 300 : 500}
              type="before"
            />
            <After
              time={index == 0 ? 150 : index == 1 ? 300 : 500}
              type="last"
            />
          </span>
        ))}
      </button>
    </div>
  );
};

export default Navbar;
