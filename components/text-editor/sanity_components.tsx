"use client";
import { PortableTextReactComponents } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props;
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <figure>
      <Image
        {...imageProps}
        alt={alt ?? "No Alt"}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400 text-pretty">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },
};
