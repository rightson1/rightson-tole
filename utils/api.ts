import { IBlog, IProject } from "@/types";
import { baseUrl } from "./constants";

export const getProjects = async (): Promise<IProject[]> => {
  const data = await fetch(`${baseUrl}/projects`, {
    next: {
      revalidate: 60 * 60 * 5,
      tags: ["projects"],
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};
export const getBlogs = async (): Promise<IBlog[]> => {
  const data = await fetch(`${baseUrl}/blogs`, {
    next: {
      revalidate: 60 * 60 * 5,
      tags: ["blogs"],
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};

export const getProjectBySlug = async (slug: string): Promise<IProject> => {
  const data = await fetch(`${baseUrl}/projects?slug=${slug}`, {
    next: {
      revalidate: 60 * 60 * 5,
      tags: [`${slug}`],
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};
//blog by slug
export const getBlogBySlug = async (slug: string): Promise<IBlog> => {
  const data = await fetch(`${baseUrl}/blogs?slug=${slug}`, {
    next: {
      revalidate: 60 * 60 * 5,
      tags: [`${slug}`],
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};
