import Contact from "@/components/contact/ContactForm";
import Hero from "@/components/contact/Hero";

export default function About() {
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      <Contact />
    </main>
  );
}
