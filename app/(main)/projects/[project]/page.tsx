import React from "react";
import { FaChevronLeft as ChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { getProjectBySlug } from "@/utils/api";
import { dateFormatter, getImageUrl } from "@/components/functions";
import RichText from "@/components/RichText";
import Images from "./Images";
const Blog = async ({
  params,
}: {
  params: {
    project: string;
  };
}) => {
  const blog = await getProjectBySlug(params.project);

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
            {dateFormatter(blog.date)}
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
          <Link href={blog.link || ""} className="h1 underline">
            {blog.title}
          </Link>
          <Image
            src={getImageUrl(blog.coverImage)}
            className="w-full  my-5
            border-[1px] border-gray-200/10
          object-contain "
            alt="Rightson"
            width={500}
            height={500}
          />
          <Link href={blog.link || ""} className=" underline">
            View Project
          </Link>
          <div
            className="max-w-none prose my-5 
       prose-headings:text-white prose-p:text-default-600 text-white/90"
          >
            <RichText content={blog.content} />
          </div>
          <Images gallery={blog.images} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
