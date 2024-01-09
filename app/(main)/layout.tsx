"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import MenuLinks from "@/components/MenuLinks";
import { useMediaQuery } from "react-responsive";
import Contact from "@/components/Contact";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  return (
    <motion.div
      className={`relative ${
        open &&
        "flex items-center bg-danger justify-end relative h-screen   overflow-hidden"
      }`}
      animate={{
        display: open ? "flex" : undefined,
        backgroundColor: open ? "#bf0043" : undefined,
      }}
    >
      <motion.div
        animate={{
          position: open ? "absolute" : "relative",
          top: 0,
          right: open ? (isLargeScreen ? "30%" : "60%") : 0,
        }}
        className={` z-[2] ${open && " overflowb-hidden h-screen  "}`}
      >
        <motion.main
          animate={{
            transition: {
              ease: "easeInOut",
            },
          }}
          className={`relative bg-white`}
        >
          <Contact />
          <Navbar open={open} setOpen={setOpen} />
          {children}
          <Footer />
        </motion.main>
      </motion.div>
      <motion.div
        initial={{
          display: "none",
          width: 0,
        }}
        animate={{
          display: open ? "block" : "none",
          width: isLargeScreen ? "30%" : "60%",
        }}
        className="bg-danger h-screen relative  overflow-hidden "
      >
        <motion.div
          animate={{
            scale: open ? 1 : 0,
          }}
          className="absolute z-20 top-5 right-5"
        >
          <Button
            onPress={() => setOpen(false)}
            className="  bg-primary text-white rounded-full p-4 text-xl "
            isIconOnly
          >
            <IoMdClose />
          </Button>
        </motion.div>
        <motion.div
          animate={{
            x: open ? 0 : 30,
          }}
          className="w-full  relative "
        >
          <div className="p-4 h-screen">
            <MenuLinks />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Layout;
