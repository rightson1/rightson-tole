import { IProject } from "@/types";
import Image from "next/image";
import React from "react";
import { getImageUrl } from "../functions";
import Link from "next/link";
import { Project } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/client";

const Projects = ({ projects }: { projects: Project[] }) => {
  if (!projects) return null;
  return (
    <div className="w-full pxs -mt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mb:gap-10">
        {projects.map((item, index) => {
          return (
            <Link
              href={`/projects/${item.slug?.current}`}
              className="flexflex-col gap-2 w-full shadow-md"
              key={index}
            >
              <Image
                src={imageUrl(item.main_image)}
                alt="keyboardw"
                width={500}
                height={500}
                className="w-full  h-[200px] object-cover "
              />
              <div className="flex flex-col gap-1   p-4">
                <h4 className="h4">{item.title}</h4>
                <div className="flex items-center gap-2 ">
                  <p className=" font-[300] text-sm opacity-75">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
