import type { MetadataRoute } from "next";
import { webUrl } from "@/utils/constants";
import { getSanityBlogs } from "@/utils/api/blogs";
import { getProjectsPage } from "@/utils/api/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blogs and projects from Sanity
  const blogs = await getSanityBlogs();
  const projectsPage = await getProjectsPage();

  // Static routes
  const staticRoutes = [
    {
      url: webUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${webUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${webUrl}/#blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${webUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${webUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Blog routes
  const blogRoutes = blogs
    .filter((blog) => blog.slug?.current)
    .map((blog) => ({
      url: `${webUrl}/blog/${blog?.slug?.current}`,
      lastModified: new Date(blog._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  // Project routes
  const projectRoutes = projectsPage.projects
    .filter((project) => project.slug?.current)
    .map((project) => ({
      url: `${webUrl}/projects/${project?.slug?.current}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
