import Contact from "@/components/contact/ContactForm";
import Hero from "@/components/contact/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Me || RIGHTSON KIRIGHA TOLE",
  description: "Get in touch with me |Rightson Kirigha",
  keywords: [
    "contact",
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

export default function ContactPage() {
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
