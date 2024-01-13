import ChariImage from "@/components/ChariImage";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import Last from "@/components/home/Last";
import Projects from "@/components/home/Projects";
import Section2 from "@/components/home/Section2";
import StartProject from "@/components/home/StartProject";
import { getBlogs, getProjects } from "@/utils/api";

export default async function Home() {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      <Section2 />
      <StartProject />
      {blogs && <Blogs blogs={blogs} />}
      {projects && <Projects projects={projects} />}
      <Last />
    </main>
  );
}
