"use client";
import { getImageUrl } from "@/components/functions";
import { TImage } from "@/types";
import Image from "next/image";
import React from "react";
import Lightbox from "yet-another-react-lightbox";

const Images = ({ gallery }: { gallery: TImage[] }) => {
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (gallery) {
      setImages(gallery.map((item) => getImageUrl(item)));
    }
  }, [gallery]);
  return (
    <div>
      <h5 className="h5 my-5">Gallery (Click Image)</h5>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={
          images?.map((item) => ({
            src: item,
          })) || []
        }
      />
      <div className="flex gap-2 flex-wrap w-full ">
        {images?.map((item, index) => (
          <Image
            src={item}
            key={index}
            alt="image"
            onClick={() => setOpen(true)}
            height={300}
            width={300}
            className="rounded-sm object-cover 
            h-[100px] w-[100px] cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
