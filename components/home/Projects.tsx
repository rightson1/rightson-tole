import { IProject } from "@/types";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { getImageUrl } from "../functions";
import Link from "next/link";

const Projects = ({ projects }: { projects: IProject[] }) => {
  projects.sort((a, b) => a.index - b.index);
  return (
    <div className="pxs text-white pb-20 mb:py-20 w-full h-full overflow-hidden bg-black py-20">
      <div className=" w-full bg-white h-[1px]"></div>
      <div className="flex items-center gap-2 my-14">
        <div className="w-[50px] md:w-[100px] bg-white h-[1px]"></div>
        <h1 className="h3">Sample Projects</h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
       gap-5   mb:gap-10"
      >
        {projects.slice(0, 4).map((project, index) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              className="flex shadow-lg flex-col gap-2 w-full"
              key={index}
            >
              <div
                className="w-full overflow-hidden 
              relative mb:h-[300px] h-[250px]"
              >
                {/* <div className="bg-black/50 z-[4] absolute h-full w-full"></div> */}

                <Image
                  src={getImageUrl(project.featuredImage)}
                  alt="keyboard"
                  width={500}
                  height={500}
                  className=" w-full h-full object-cover  z-[2]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="p text-lg">{project.title}</h4>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full pt-10  fx-c">
        <Button
          className="bg-white text-black
           px-6 py-2 rounded-full w-fit"
          as={Link}
          href="/projects"
        >
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default Projects;
