"use client";
import { menuLinks } from "@/utils/constants";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";

const MenuLinks = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full flex-col main-h  gap-3  flex pt-10 justify-center">
      <div className="flex-col flex gap-3 flex-1 items-center justify-center">
        {menuLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="text-lg font-medium t-200  group  flex flex-col
                 text-white hover:text-black"
            onClick={() => {
              setOpen(false);
              router.push(link.url);
            }}
          >
            {link.name}
            <span
              className={`w-0
            h-[2px] bg-black t-200  
            -bottom-[5px] left-0 group-hover:w-full
             ${pathname === link.url && "w-full bg-white"}
            `}
            ></span>
          </Link>
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
          <Button
            isIconOnly
            className="text-xl text-white bg-transparent
             rounded-full "
            as="a"
            href="https://twitter.com/_rightson_"
          >
            <FaXTwitter />
          </Button>
          <Button
            isIconOnly
            className="text-xl text-white rounded-full bg-transparent"
            as="a"
            href="https://github.com/righson1"
          >
            <FaGithub />
          </Button>

          <Button
            isIconOnly
            className="text-xl text-white rounded-full  bg-transparent"
            as="a"
            href="https://api.whatsapp.com/send?phone=254778749554"
          >
            <FaWhatsapp />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
