import { TImage } from "@/types";
import { webUrl } from "@/utils/constants";
import { Metadata } from "next";

export function getImageUrl(image: TImage) {
  return "https:" + image.fields.file.url;
}
export function dateFormatter(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
export const metadata: Metadata = {
  title: "Rightson Kirigha Tole - Web Developer and UI/UX Designer",
  description: `I am Rightson Kirigha Tole, a passionate web developer and UI/UX designer based in Nairobi, Kenya. Explore my portfolio for creative digital solutions.`,
  applicationName: null,
  authors: null,
  generator: null,
  keywords: [
    "rightson kirigha tole ",
    "riara university",
    "web developer",
    "UI/UX designer",
    "Nairobi",
    "Kenya",
    "portfolio",
  ],

  creator: "Rightson Kirigha Tole",
  openGraph: {
    determiner: "auto",
    title: "Rightson Kirigha Tole - Web Developer and UI/UX Designer",
    description:
      "Passionate about crafting digital experiences. Explore my portfolio for web development and UI/UX design wonders.",
    emails: "chari.rightson@gmail.com",
    phoneNumbers: ["+254791568168"],
    faxNumbers: [],
    siteName: "Rightson's Portfolio",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    // images: [
    //   {
    //     url: webUrl + "/rightson.jpg",
    //     alt: "Rightson Kirigha - Web Developer and UI/UX Designer",
    //   },
    // ],
    audio: [],
    videos: [],
    url: webUrl,
    countryName: "Kenya",
    ttl: 3600,
  },
  twitter: {
    site: webUrl,
    creator: "@rightson",
    title: "Rightson Kirigha Tole - Web Developer and UI/UX Designer",
    description: `I am Rightson Kirigha Tole, a passionate web developer and UI/UX designer based in Nairobi, Kenya. Explore my portfolio for creative digital solutions.`,
    // images: [
    //   {
    //     url: webUrl + "/rightson.jpg",
    //     alt: "Rightson Kirigha",
    //     width: 500,
    //     height: 500,
    //   },
    // ],
  },
};

export function defaultMetadata(): Metadata {
  return metadata;
}
