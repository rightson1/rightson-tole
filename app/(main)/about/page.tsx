import Gallery from "@/components/about/Gallery";
import Hero from "@/components/about/Hero";
import Second from "@/components/about/Second";
import Last from "@/components/home/Last";

export default function Home() {
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero />
      <Second />
      <Gallery />
      <Last />
    </main>
  );
}
