import { IBlog } from "@/types";
import { Post } from "@/sanity.types";
import { client, sanityFetch } from "@/sanity/lib/client";
export const getSanityBlogs = async (): Promise<Post[]> => {
  const query = `*[_type=="post"]{
      ...,
      author->{...}
  }`;
  const data = await sanityFetch<Post[]>({
    query,
    tags: ["blogs", "homepage"],
  });
  return data as Post[];
};
//fetch blog by slug
export const getBlogBySlugSanity = async (slug: string): Promise<Post> => {
  const query = `*[_type=="post" && slug.current == "${slug}"][0]{
    ...,
    author->{...}
  }`;
  const data = await sanityFetch<Post>({
    query,
    tags: ["post", slug],
  });
  return data;
};
