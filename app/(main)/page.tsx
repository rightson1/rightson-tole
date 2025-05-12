import ChariImage from "@/components/ChariImage";
import Blogs from "@/components/home/Blogs";
import Hero from "@/components/home/Hero";
import Last from "@/components/home/Last";
import Projects from "@/components/home/Projects";
import Section2 from "@/components/home/Section2";
import StartProject from "@/components/home/StartProject";
import { getBlogs, getProjects } from "@/utils/api";
import { getSanityBlogs } from "@/utils/api/blogs";
import { getResumeUrl, getSanityHomepage } from "@/utils/api/homapage";

export default async function Home() {
  const [projects, blogs, sanityBlogs, sanityHomepage, resumeUrl] =
    await Promise.all([
      getProjects(),
      getBlogs(),
      getSanityBlogs(),
      getSanityHomepage(),
      getResumeUrl(),
    ]);
  return (
    <main
      className="flex  flex-col items-center font-manrope 
    justify-between bg-white"
    >
      <Hero sanityHomepage={sanityHomepage} />
      <Section2 sanityHomepage={sanityHomepage} />
      <StartProject sanityHomepage={sanityHomepage} resumeUrl={resumeUrl} />
      {sanityBlogs && <Blogs blogs={sanityBlogs} />}
      {projects && <Projects homepage={sanityHomepage} />}
      <Last />
    </main>
  );
}
