import ChariImage from "@/components/ChariImage";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import Last from "@/components/home/Last";
import Projects from "@/components/home/Projects";
import Section2 from "@/components/home/Section2";
import StartProject from "@/components/home/StartProject";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      <Section2 />
      <StartProject />
      <Blogs />
      <Projects />
      <Last />
    </main>
  );
}
