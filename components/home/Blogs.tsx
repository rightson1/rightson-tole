import { IBlog } from "@/types";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { dateFormatter, getImageUrl } from "../functions";
import Link from "next/link";

const Blogs = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="pxs pb-40 mb-20 w-full h-full overflow-hidden" id="blogs">
      <div className=" w-full bg-black/70 p-[1px]"></div>
      <div className="flex items-center gap-2 my-10">
        <div className=" mb:w-[50px] w-[100px] bg-black/70 h-[1px]"></div>
        <h1 className="h3 ">My Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mb:gap-10">
        {blogs.map((blog, index) => {
          return (
            <Link
              href={`/blog/${blog.slug}`}
              className="flex shadow-md  flex-col gap-2 w-full"
              key={index}
            >
              <Image
                src={getImageUrl(blog.featuredImage)}
                alt="keyboardw"
                width={500}
                height={500}
                className="w-full mb:h-[300px] md:h-[250px] object-cover"
              />
              <div className="flex flex-col gap-1 p-4">
                <p className="text-black/50 font-semibold">
                  {dateFormatter(blog.date)}
                </p>
                <h4 className="h4">{blog.title}</h4>
                <div className="flex items-center gap-2 ">
                  {/* <div className=" w-[50px] bg-black/50 h-[1px]"></div> */}
                  <p className="text-black/50 font-semibold">...Read More</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className=" w-full bg-black/70 p-[1px] my-10 mt-20 hidden"></div>
    </div>
  );
};

export default Blogs;
