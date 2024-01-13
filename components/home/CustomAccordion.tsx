"use client";
import { services } from "@/utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-[2]">
      {services.map((service, index) => (
        <div key={index}>
          <motion.header
            initial={false}
            onClick={() => toggleOpen(index)}
            className="py-5  border-b-1 border-black/20 
            cursor-pointer flex justify-between items-center"
            animate={{
              borderBottom:
                openIndex === index
                  ? "1px solid rgba(0,0,0,0)"
                  : "1px solid black",
            }}
          >
            <span className="acc-title text-start text-lg md:text-xl">
              {service.title}
            </span>
            <motion.div
              animate={{
                rotate: openIndex === index ? 45 : 0,
                transition: {
                  ease: "easeInOut",
                },
              }}
              className="w-3 h-3 md:w-4 md:h-4 relative opacity-75"
            >
              <div
                className="w-[2px] h-full
               bg-black absolute left-1/2 t
               op-0 transform -translate-x-1/2"
              ></div>
              <div className="w-full h-[2px] bg-black absolute left-0 top-1/2 transform -translate-y-1/2"></div>
            </motion.div>
          </motion.header>
          <AnimatePresence>
            {openIndex === index && (
              <motion.section
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {service.description}
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
