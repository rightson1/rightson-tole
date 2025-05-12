"use client";
import { getImageUrl } from "@/components/functions";
import { Project } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/client";
import { TImage } from "@/types";
import Image from "next/image";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

interface ImageWithDescription {
  src: string;
  description?: string;
}

const Images = ({ gallery }: { gallery: Project["images"][] }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [images, setImages] = React.useState<ImageWithDescription[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (gallery) {
      setImages(
        gallery.map((item) => {
          return {
            src: imageUrl(item),
            //@ts-ignore
            description: item?.description || undefined,
          };
        })
      );
      setIsLoading(false);
    }
  }, [gallery]);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="bg-gray-200 h-[300px] rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h5 className="h5">Project Gallery</h5>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedIndex}
        slides={images.map((item) => ({
          src: item.src,
          description: item.description,
        }))}
        plugins={[
          // Thumbnails,
          Zoom,
          Fullscreen,
          Captions,
        ]}
        thumbnails={{
          width: 120,
          height: 80,
          padding: 4,
          border: 2,
          borderRadius: 4,
          gap: 8,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
        }}
        carousel={{
          finite: true,
          preload: 2,
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="group cursor-pointer bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:shadow-lg shadow-black/30 transition-all duration-300"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative w-full aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.description || `Project image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-300"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              {item.description && (
                <p className="mt-3 text-sm text-gray-300 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
