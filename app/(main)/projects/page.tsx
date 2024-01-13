import Hero from "@/components/projects/Hero";
import Projects from "@/components/projects/Projects";
import { getProjects } from "@/utils/api";
import { Metadata } from "next";

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
export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects I've worked on |Rightson Kirigha",
  keywords: [
    "projects",
    "portfolio",
    "work",
    "rightson kirigha",
    "riara university",
    "web developer",
    "UI/UX designer",
    "Nairobi",
    "Kenya",
    "portfolio",
  ],
  generator: "NextJS",
  referrer: "no-referrer",
};
