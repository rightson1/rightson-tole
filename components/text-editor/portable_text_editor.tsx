"use client";
import { PortableText } from "next-sanity";
import React from "react";
import { TypedObject } from "sanity";
import { type ClassValue, clsx } from "clsx";
import { toHTML } from "@portabletext/to-html";
import { cn } from "@/lib/utils";
import { myPortableTextComponents } from "./sanity_components";
const Portable_Text_Editor = ({
  body,
  classNames,
}: {
  body: any;
  classNames?: ClassValue;
}) => {
  return (
    <div className={cn(`prose max-w-full`, classNames)}>
      <PortableText value={body} components={myPortableTextComponents} />
    </div>
  );
};

export default Portable_Text_Editor;

export const portable_text_to_html = (body: TypedObject | TypedObject[]) => {
  return toHTML(body, {
    components: {},
  });
};
