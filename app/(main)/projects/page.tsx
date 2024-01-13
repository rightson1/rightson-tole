import Hero from "@/components/projects/Hero";
import Projects from "@/components/projects/Projects";

export default function About() {
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      <Projects />
    </main>
  );
}
