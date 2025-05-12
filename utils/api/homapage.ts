import { Homepage, Resume } from "@/sanity.types";
import { client, sanityFetch } from "@/sanity/lib/client";
import { IHomepage } from "@/types";

const homepageQuery = `
*[_type == "homepage"][0]{
  ...,
  sampleProjectsSection{
    ...,
    projects[]->{
      ...
    }
  }
}
`;

const resumeQuery = `
*[_type == "resume"] | order(date desc)[0]{
  file{
    asset->{
      url
    }
  }
}
`;

export const getSanityHomepage = async (): Promise<IHomepage> => {
  const data = await sanityFetch<IHomepage>({
    query: homepageQuery,
    tags: ["homepage", "project", "post"],
  });
  return {
    ...data,
    //@ts-ignore
    projects: data.sampleProjectsSection,
  };
};

export const getResumeUrl = async (): Promise<string | null> => {
  const data = await sanityFetch<{ file?: { asset?: { url?: string } } }>({
    query: resumeQuery,
    tags: ["resume"],
  });
  return data?.file?.asset?.url || null;
};

//d
