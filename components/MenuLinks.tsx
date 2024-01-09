import { menuLinks } from "@/utils/constants";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const MenuLinks = () => {
  return (
    <div className="w-full flex-col main-h  gap-3  flex pt-10 justify-center">
      <div className="flex-col flex gap-3 flex-1 items-center justify-center">
        {menuLinks.map((link) => (
          <Button
            className="group relative flex flex-col text-white text-xl"
            key={link.name}
          >
            <Link
              key={link.name}
              href={link.url}
              className="text-lg font-medium t-200  text-white hover:text-black"
            >
              {link.name}
            </Link>
            <span className="w-0 h-[2px] bg-black t-200  absolute -bottom-[5px] left-0 group-hover:w-full"></span>
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-1 ">
        <Image
          alt="logo"
          src="/logo.svg"
          className="w-[50px] h-[50px] mx-3"
          width={300}
          height={300}
        />
        <div className="flex">
          <Button isIconOnly className="text-xl text-white rounded-full p-4">
            <FaXTwitter />
          </Button>
          <Button isIconOnly className="text-xl text-white rounded-full p-4">
            <FaGithub />
          </Button>
          <Button isIconOnly className="text-xl text-white rounded-full p-4">
            <FaWhatsapp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
