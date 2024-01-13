import Hero from "@/components/projects/Hero";
import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/api";

export default async function About() {
  const projects = await getProjects();
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      {projects && <Projects projects={projects} />}
    </main>
  );
}
