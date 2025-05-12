import { sanityFetch } from "@/sanity/lib/client";
import { Project, ProjectsPage } from "@/sanity.types";
import { IProjectPage } from "@/types";

const projectsPageQuery = `
*[_type == "projectsPage"][0]{
  ...,
  projects[]->{ ... }
}
`;

export const getProjectsPage = async (): Promise<IProjectPage> => {
  return sanityFetch<IProjectPage>({
    query: projectsPageQuery,
    tags: ["projectsPage", "project"],
  });
};

const projectBySlugQuery = (slug: string) => `
*[_type == "project" && slug.current == "${slug}"][0]{
  ...
}
`;

export const getProjectBySlugSanity = async (
  slug: string
): Promise<Project | null> => {
  return sanityFetch<Project>({
    query: projectBySlugQuery(slug),
    tags: ["project", slug],
  });
};
