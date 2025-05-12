import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import imageUrlBuilder from "@sanity/image-url";
import { QueryParams } from "sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
export const builder = imageUrlBuilder(client);
export function imageUrl(source: any) {
  try {
    return builder.image(source).url();
  } catch (e) {
    return "/no-image.png";
  }
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags, revalidate: 60 * 60 * 24 },
  });
}
