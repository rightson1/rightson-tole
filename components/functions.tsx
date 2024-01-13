import { TImage } from "@/types";

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
