import React from "react";
import { FaChevronLeft as ChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { getBlogBySlug } from "@/utils/api";
import {
  dateFormatter,
  defaultMetadata,
  getImageUrl,
} from "@/components/functions";
import RichText from "@/components/RichText";
import { getBlogBySlugSanity } from "@/utils/api/blogs";
import { imageUrl } from "@/sanity/lib/client";
import Portable_Text_Editor from "@/components/text-editor/portable_text_editor";
import { Props } from "@/types";
import { Metadata } from "next";
const Blog = async ({
  params,
}: {
  params: {
    blog: string;
  };
}) => {
  const blog = await getBlogBySlugSanity(params.blog);
  if (!blog) return <div>404</div>;
  return (
    <div className="pxs md:px-20 lg:px-40 py-10 relative bg-black text-white">
      <div className="fx-col gap-5">
        <Link
          href="/"
          className="text-sm flex items-center opacity-75 gap-1 -ml-2"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>
        <div className="fx-col pt-5 gap-5">
          <p className="text-sm flex items-center opacity-75 gap-1">
            {dateFormatter(blog._createdAt)}
          </p>
          <div className="flex items-center gap-2">
            <Avatar size="md" src={"/rightson.jpg"} />
            <div className="flex-col">
              <h6 className="text-sm font-bold flex items-center gap-1">
                Rightson Chari
              </h6>
              <p className="text-[12px] flex items-center opacity-75 gap-1">
                chari.rightson@gmail.com
              </p>
            </div>
          </div>
          <h1 className="h2">{blog.title}</h1>
          <Image
            src={imageUrl(blog.mainImage)}
            className="w-full h-[500px] 
            border-[1px] border-gray-200/10
            rounded-md mb:max-h-[350px] object-cover "
            alt="Rightson"
            width={500}
            height={500}
          />

          <div className="max-w-none prose my-5  prose-p:text-default-600 ">
            <Portable_Text_Editor body={blog.body} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getBlogBySlugSanity(params.blog as string);
  if (!data) {
    return defaultMetadata();
  }
  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      title: data.title,
      description: data.excerpt ?? "",
      images: [
        {
          url: imageUrl(data.mainImage || data.mainImage),
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
}
