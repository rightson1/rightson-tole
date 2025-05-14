import React from "react";
import { FaChevronLeft as ChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import {
  dateFormatter,
  defaultMetadata,
  getImageUrl,
} from "@/components/functions";
import RichText from "@/components/RichText";
import Images from "./Images";
import { getProjectBySlugSanity } from "@/utils/api/projects";
import { imageUrl } from "@/sanity/lib/client";
import Portable_Text_Editor from "@/components/text-editor/portable_text_editor";
import { Metadata } from "next";
type Props = {
  params: Promise<{ project: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const project_slug = (await params).project as string;
  const data = await getProjectBySlugSanity(project_slug);
  if (!data) {
    return defaultMetadata();
  }
  return {
    title: `${data.title} by Rightson Kirigha Tole`,
    description: data.excerpt,
    openGraph: {
      title: `${data.title} by Rightson Kirigha Tole`,
      description: data.excerpt ?? "",
      images: [
        {
          url: imageUrl(data.main_image || data.main_image),
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
}

const Project = async ({ params }: Props) => {
  const project_slug = (await params).project as string;
  const project = await getProjectBySlugSanity(project_slug);
  console.log({ project });
  if (!project) return <div>404</div>;
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
            {dateFormatter(project._createdAt)}
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
          <Link href={project.live_preview ?? ""} className="h1 underline">
            {project.title}
          </Link>
          <Image
            src={imageUrl(project.featured_image)}
            className="w-full  my-5
            border-[1px] border-gray-200/10
          object-contain "
            alt="Rightson"
            width={500}
            height={500}
          />
          <Link href={project.live_preview ?? ""} className=" underline">
            View Project
          </Link>
          <div
            className="max-w-none prose my-5 
       prose-headings:text-white prose-p:text-default-600 text-white/70 
       prose-strong:text-white/70 prose-a:text-white/70 prose-p:text-white/70
       prose-ul:text-white/70 prose-li:text-white/70"
          >
            <Portable_Text_Editor body={project.description} />
          </div>
          {/* @ts-ignore */}
          <Images gallery={project.images} />
        </div>
      </div>
    </div>
  );
};

export default Project;
